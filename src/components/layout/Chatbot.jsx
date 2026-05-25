"use client";
import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export function Chatbot() {
  const initialMessages = [
    {
      id: "1",
      sender: "bot",
      text: "Hello! I am your Adaptive Solutions Tech guide. Ask me anything about our Custom LMS, 3D Course Development, or Consulting options!"
    }
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleToggle = (openState) => {
    setIsOpen(openState);
    if (openState) {
      setMessages(initialMessages);
      setInputValue("");
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: inputValue.trim()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Automated response logic
    setTimeout(() => {
      const lowerText = userMessage.text.toLowerCase();
      let botResponse = 'I want to make sure you get the absolute best setup details. Could you specify if you are looking for details on Custom LMS, Interactive Courses, or Corporate Consulting? You can also ping our support staff directly through the Contact view.';

      if (lowerText.includes('lms') || lowerText.includes('custom lms') || lowerText.includes('platform')) {
        botResponse = 'Our Custom Learning Management Systems are fully cloud-native, responsive, and backed by high-availability MongoDB databases to track metrics seamlessly.';
      } else if (lowerText.includes('course') || lowerText.includes('simulation') || lowerText.includes('3d') || lowerText.includes('creative')) {
        botResponse = 'We design highly interactive 3D simulations and custom cinematic courses built on standard SCORM and xAPI compliance framework specifications.';
      } else if (lowerText.includes('consulting') || lowerText.includes('strategy') || lowerText.includes('service')) {
        botResponse = 'Our e-learning consulting branch specializes in corporate knowledge restructuring, data security integration, and platform scaling compliance.';
      } else if (lowerText.includes('price') || lowerText.includes('cost') || lowerText.includes('quote') || lowerText.includes('trial')) {
        botResponse = 'To receive a tailored corporate quote, please select your exact track in the service dropdown on our Contact page, or click the "Book Strategy" button in our top navbar!';
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: botResponse
        }
      ]);
    }, 1000);
  };

  return (
    <div className="fixed z-[9999]" style={{ bottom: "1.5rem", right: "1.5rem" }}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 bg-[#FFFFFF] rounded-[16px] flex flex-col overflow-hidden origin-bottom-right"
            style={{ 
              width: "360px", 
              height: "480px", 
              boxShadow: "0 10px 25px rgba(15, 23, 42, 0.15)"
            }}
          >
            {/* Header */}
            <div className="bg-[#0F172A] p-4 text-white flex items-center justify-between shrink-0">
              <div>
                <h3 className="font-bold text-base m-0" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Adaptive Assistant
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs text-slate-300" style={{ fontFamily: "'Inter', sans-serif" }}>Online</span>
                </div>
              </div>
              <button 
                onClick={() => handleToggle(false)}
                className="text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-grow bg-[#F8FAFC] p-4 overflow-y-auto flex flex-col gap-4">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] p-3 rounded-2xl ${
                      msg.sender === 'user' 
                        ? 'bg-[#0F172A] text-white rounded-tr-none' 
                        : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none shadow-sm'
                    }`}
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", lineHeight: "1.5" }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-slate-100 shrink-0">
              <form onSubmit={handleSend} className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your question here..."
                  className="flex-grow bg-[#F8FAFC] border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#F97316] transition-colors"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="bg-[#0F172A] text-white p-3 rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 5 }}
            transition={{ duration: 0.3 }}
            className="fixed z-[99999]"
            style={{ 
              bottom: "85px",
              right: "20px",
              background: "#0F172A",
              color: "#FFFFFF",
              padding: "0.6rem 1.2rem",
              borderRadius: "8px",
              fontSize: "0.85rem",
              fontWeight: 500,
              boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
              textAlign: "center",
              whiteSpace: "nowrap",
              fontFamily: "'Inter', sans-serif"
            }}
          >
            💡 Have questions? Click here to chat with our guide!
            {/* Bottom Pointer Triangle */}
            <div 
              className="absolute -bottom-[6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#0F172A]"
            ></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={() => handleToggle(!isOpen)}
        className="bg-[#F97316] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 ease-in-out hover:scale-110 relative ml-auto mt-4"
        style={{ width: "60px", height: "60px" }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
}
