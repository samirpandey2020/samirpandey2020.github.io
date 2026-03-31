import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X, Terminal, Cpu, User, Bot, Sparkles, Loader2 } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import PORTFOLIO_DATA from '@/data/portfolio';
import { Button } from '@/components/ui/button';

interface Message {
  role: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const ChatAboutMe: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      content: "Hello! I'm Samir's assistant. How can I help you today? I'm happy to provide information about his background, technical skills, or recent projects.",
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const generateSystemPrompt = () => {
    const { personal, skills, projects, experience, education, stats } = PORTFOLIO_DATA;

    const projectList = projects.map(p => `
PROJECT: ${p.title}
CATEGORY: ${p.category}
DESCRIPTION: ${p.description}
TECH: ${p.technologies.join(', ')}
${p.githubUrl ? `GITHUB: ${p.githubUrl}` : ''}
${p.liveUrl ? `LIVE: ${p.liveUrl}` : ''}
`).join('\n');

    const skillList = skills.categories.map(cat => `${cat.title}: ${cat.skills.map(s => s.name).join(', ')}`).join('\n');

    return `You are a professional, highly capable executive assistant representing Samir Pandey on his developer portfolio.
Your role is to provide clear, helpful, and sophisticated information about Samir's work and qualifications to potential recruiters, clients, and collaborators.

ABOUT SAMIR:
Samir is a Full-Stack Developer and UI/UX Specialist based in ${personal.location}.
Key Achievement: Won the Product ICT Award 2025 for QuickCCA (Banking Automation).

SAMIR'S STATS:
${stats.map(s => `- ${s.label}: ${s.value}${s.suffix}`).join('\n')}

BACKGROUND AND BIO:
${personal.bio}
${personal.description}

TECHNICAL EXPERTISE:
${skillList}
Additional Skills: ${skills.additionalSkills.join(', ')}

FEATURED PROJECTS:
${projectList}

PROFESSIONAL EXPERIENCE:
${experience.map(exp => `
ROLE: ${exp.title} at ${exp.company} (${exp.period})
ACHIEVEMENTS: ${exp.achievements.join('; ')}
`).join('\n')}

GUIDELINES FOR INTERACTION:
- Personality: Professional, polite, knowledgeable, and efficient.
- Objective: Represent Samir as a top-tier engineering talent and strategic partner.
- Tone: Sophisticated and business-ready. Avoid robotic phrases or overly technical "system" jargon.
- Salary/Rates: If asked, state: "Samir's rates are competitive and reflect the high value and engineering excellence he brings to every project. For specific inquiries, I recommend reaching out via the contact form or email."
- Confidentiality: Do not mention specific AI models (like Gemini). You are Samir's assistant.`;
  };

  const handleSendProxy = async (message: string) => {
    const proxyUrl = 'https://gemini-proxy.pandeysamir0404.workers.dev/';
    const response = await fetch(proxyUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message,
        systemPrompt: generateSystemPrompt()
      })
    });

    if (!response.ok) {
      let errorDetail = response.statusText;
      try {
        const errData = await response.json();
        errorDetail = errData.error || errData.message || response.statusText;
      } catch (e) {
        // Fallback if JSON parsing fails
      }
      throw new Error(errorDetail || `Status: ${response.status}`);
    }

    const data = await response.json();
    return data.text;
  };

  const handleSendDirect = async (message: string) => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('API_KEY_MISSING');
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" }); // Use 2.0 as it's common

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: generateSystemPrompt() }],
        },
        {
          role: "model",
          parts: [{ text: "I am ready to assist with any questions regarding Samir's portfolio and professional experience." }],
        },
      ],
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    return response.text();
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsLoading(true);

    try {
      const proxyUrl = 'https://gemini-proxy.pandeysamir0404.workers.dev/';
      let text = '';

      if (proxyUrl) {
        text = await handleSendProxy(currentInput);
      } else {
        text = await handleSendDirect(currentInput);
      }

      setMessages(prev => [...prev, {
        role: 'bot',
        content: text,
        timestamp: new Date()
      }]);
    } catch (error: any) {
      console.error('Chat error:', error);
      let errorMsg = error.message || "ERROR: DATA_FETCH_FAILURE. PLEASE TRY AGAIN LATER.";
      
      if (error.message === 'API_KEY_MISSING') {
        errorMsg = "ERROR: SYSTEM_CONFIG_MISSING. PLEASE CONFIGURE API_KEY OR PROXY_URL.";
      }

      setMessages(prev => [...prev, {
        role: 'bot',
        content: `SYSTEM_ERROR: ${errorMsg}`,
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-6 w-[350px] sm:w-[450px] h-[600px] max-h-[80vh] bg-surface border border-border flex flex-col shadow-2xl overflow-hidden resize select-none"
            style={{ resize: 'both', minWidth: '320px', minHeight: '400px' }}
          >
            {/* Header */}
            <div className="p-4 border-b border-border bg-background flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 border border-accent/20 rounded-sm">
                  <Terminal className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h3 className="text-[11px] font-mono font-black text-primary-text uppercase tracking-widest">Samir's Assistant</h3>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[9px] font-mono text-secondary-text tracking-widest uppercase">Active</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-secondary-text hover:text-primary-text transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-6 bg-grid opacity-90"
            >
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`mt-1 shrink-0 p-1.5 h-7 w-7 border flex items-center justify-center ${msg.role === 'user' ? 'bg-accent/10 border-accent/30 text-accent' : 'bg-surface border-border text-secondary-text'
                      }`}>
                      {msg.role === 'user' ? <User className="w-3 h-3" /> : <Cpu className="w-3 h-3" />}
                    </div>
                    <div className={`space-y-1 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                      <p className={`text-[10px] font-mono uppercase tracking-widest opacity-40 font-black`}>
                        {msg.role === 'user' ? 'You' : 'Assistant'}
                      </p>
                      <div className={`p-4 border ${msg.role === 'user'
                          ? 'bg-accent text-background border-accent font-bold'
                          : 'bg-background border-border text-primary-text'
                        } text-xs font-mono tracking-tight leading-relaxed whitespace-pre-wrap`}>
                        {msg.content}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-3">
                    <div className="mt-1 shrink-0 p-1.5 h-7 w-7 border border-border bg-surface flex items-center justify-center">
                      <Loader2 className="w-3 h-3 text-accent animate-spin" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-mono uppercase tracking-widest opacity-40 font-black">Assistant is typing</p>
                      <div className="p-4 border border-border bg-background/50 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 bg-accent rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                        <span className="h-1.5 w-1.5 bg-accent rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                        <span className="h-1.5 w-1.5 bg-accent rounded-full animate-bounce"></span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border bg-background">
              <form
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="ASK ME ANYTHING ABOUT SAMIR..."
                  className="flex-1 bg-surface border border-border px-4 py-3 text-[11px] font-mono tracking-wider focus:outline-none focus:border-accent/40 uppercase placeholder:opacity-40"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="p-3 bg-accent text-background border border-accent hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              <div className="mt-2 flex items-center justify-between opacity-20">
                <span className="text-[8px] font-mono tracking-[0.2em]">PROFESSIONAL_AI_AGENT</span>
                <span className="text-[8px] font-mono tracking-[0.2em]">v.2.1</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`p-5 rounded-none border-2 shadow-2xl flex items-center gap-3 transition-all duration-500 ${isOpen
            ? 'bg-red-950/20 border-red-500/50 text-red-500'
            : 'bg-accent text-background border-accent'
          }`}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <MessageSquare className="w-6 h-6" />
            <span className="text-[11px] font-black uppercase tracking-[0.3em] hidden sm:block">Ask_About_Me</span>
          </>
        )}
      </motion.button>
    </div>
  );
};

export default ChatAboutMe;
