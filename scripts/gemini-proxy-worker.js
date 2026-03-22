/**
 * Cloudflare Worker Gemini Proxy
 * 
 * Instructions:
 * 1. Create a new Cloudflare Worker.
 * 2. Paste this code.
 * 3. Add `GEMINI_API_KEY` to your Worker's "Variables" (Found in Settings > Variables).
 * 4. Add `ALLOWED_ORIGIN` (e.g., "https://samirpandey.github.io") to Variables for CORS safety.
 */

export default {
  async fetch(request, env) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": env.ALLOWED_ORIGIN || "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405, headers: corsHeaders });
    }

    try {
      const { message, systemPrompt } = await request.json();

      if (!message) {
        return new Response("Missing message", { status: 400, headers: corsHeaders });
      }

      const GEMINI_API_KEY = env.GEMINI_API_KEY;
      const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: systemPrompt }],
            },
            {
              role: "model",
              parts: [{ text: "SYSTEM_ACCESS_GRANTED. I am ready." }],
            },
            {
              role: "user",
              parts: [{ text: message }],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
        }),
      });

      const data = await response.json();
      
      // Extract the text content from Gemini's response structure
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "NO_RESPONSE_FOUND";

      return new Response(JSON.stringify({ text }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });

    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
  },
};
