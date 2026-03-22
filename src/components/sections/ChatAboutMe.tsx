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
      content: "HELLO. I AM SAMIR'S SYSTEM ASSISTANT. ASK ME ANYTHING ABOUT HIS SKILLS, PROJECTS, OR EXPERIENCE.",
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
    const { personal, skills, projects, experience, education } = PORTFOLIO_DATA;

    return `You are a helpful AI assistant for Samir Pandey's portfolio website. 
Your goal is to answer questions about Samir's professional background, skills, and projects based on the provided data.
You should be professional, concise, and stay in character as a high-tech system assistant.

SAMIR'S DATA:
- Name: ${personal.name}
- Title: ${personal.title}
- Bio: ${personal.bio}
- Location: ${personal.location}
- Experience: ${experience.map(exp => `${exp.title} at ${exp.company} (${exp.period})`).join(', ')}
- Top Skills: ${skills.categories.flatMap(cat => cat.skills.map(s => s.name)).join(', ')}
- Notable Projects: ${projects.map(p => `${p.title}: ${p.description}`).join('; ')}
- Education: ${education.map(edu => `${edu.degree} from ${edu.institution}`).join(', ')}

GUIDELINES:
1. Only answer based on the information provided. If you don't know something, say "I don't have that specific data in my current archives."
2. Keep responses short and impactful.
3. If asked about contact info, mention email: ${personal.email}.
4. Don't mention you are an AI model like Gemini, just act as "Samir's System Assistant".`;
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error('API key missing');
      }

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

      const chat = model.startChat({
        history: [
          {
            role: "user",
            parts: [{ text: generateSystemPrompt() }],
          },
          {
            role: "model",
            parts: [{ text: "SYSTEM_ACCESS_GRANTED. I am ready to assist with inquiries regarding Samir's portfolio." }],
          },
        ],
      });

      const result = await chat.sendMessage(input);
      const response = await result.response;
      const text = response.text();

      setMessages(prev => [...prev, {
        role: 'bot',
        content: text.toUpperCase(), // Keeping the technical aesthetic
        timestamp: new Date()
      }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, {
        role: 'bot',
        content: "ERROR: DATA_FETCH_FAILURE. PLEASE TRY AGAIN LATER.",
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
            className="mb-6 w-[350px] sm:w-[400px] h-[500px] bg-surface border border-border flex flex-col shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-border bg-background flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 border border-accent/20 rounded-sm">
                  <Terminal className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h3 className="text-[11px] font-mono font-black text-primary-text uppercase tracking-widest">About_Me_API</h3>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[9px] font-mono text-secondary-text tracking-widest uppercase">System_Active</span>
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
                        {msg.role === 'user' ? 'Client_Request' : 'System_Output'}
                      </p>
                      <div className={`p-4 border ${msg.role === 'user'
                          ? 'bg-accent text-background border-accent font-bold'
                          : 'bg-background border-border text-primary-text'
                        } text-xs font-mono tracking-tight leading-relaxed`}>
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
                      <p className="text-[10px] font-mono uppercase tracking-widest opacity-40 font-black">Processing</p>
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
                  placeholder="QUERY_SAMIR_SYSTEM..."
                  className="flex-1 bg-surface border border-border px-4 py-3 text-[11px] font-mono tracking-wider focus:outline-none focus:border-accent/40 uppercase placeholder:opacity-20"
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
                <span className="text-[8px] font-mono tracking-[0.2em]">SECURE_SOCKET_LAYER</span>
                <span className="text-[8px] font-mono tracking-[0.2em]">v1.0.2_BETA</span>
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
