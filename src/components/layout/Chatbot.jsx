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
    setMessages(initialMessages);
    setInputValue("");
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const text = inputValue.trim();
    const lowerText = text.toLowerCase();

    const userMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: text
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Automated response logic
    setTimeout(() => {
      let botResponse = "I want to make sure I answer your question perfectly! It sounds like you are asking about our specialized enterprise solutions. Could you clarify if your question relates to our Custom LMS Features, 3D Interactive Simulations, or Corporate Consulting Services? You can also reach our engineering staff directly via our Contact screen.";

      const lmsTokens = ['lms', 'learning management', 'platform', 'system', 'scorm', 'xapi', 'migration', 'analytics', 'report', 'student data', 'mobile'];
      const simTokens = ['3d', 'simulation', 'interactive', 'course', 'virtual', 'vr', 'gamified', 'powerpoint', 'animation', 'headset', 'game'];
      const consultingTokens = ['consulting', 'strategy', 'audit', 'security', 'integration', 'hr', 'api', 'staff training', 'blueprint', 'rbac', 'encryption'];
      const onboardingTokens = ['price', 'cost', 'quote', 'how much', 'timeline', 'weeks', 'book', 'meeting', 'support', 'contact', 'launch', 'maintenance'];

      const hasTokens = (tokens) => tokens.some(token => lowerText.includes(token));

      if (hasTokens(lmsTokens)) {
        if (lowerText.includes('scorm') || lowerText.includes('xapi')) {
          botResponse = "Yes, our platforms fully support SCORM 1.2, SCORM 2004, and xAPI (Tin Can) standards for seamless course tracking.";
        } else if (lowerText.includes('migrate') || lowerText.includes('data') || lowerText.includes('student')) {
          botResponse = "Absolutely. We build secure data-migration pipelines to move your user logs, course histories, and credentials without downtime.";
        } else if (lowerText.includes('mobile') || lowerText.includes('phone') || lowerText.includes('responsive')) {
          botResponse = "Yes, the interface is completely responsive, built on fluid UI layouts that adapt perfectly to iOS, Android, tablets, and desktops.";
        } else if (lowerText.includes('analytics') || lowerText.includes('report') || lowerText.includes('dashboard')) {
          botResponse = "Yes, our admin dashboards include visual analytics engines to monitor completion rates, test scores, and active user metrics instantly.";
        } else {
          botResponse = "Our Custom Learning Management Systems are fully cloud-native, responsive, and backed by high-availability MongoDB databases to track metrics seamlessly.";
        }
      } else if (hasTokens(simTokens)) {
        if (lowerText.includes('vr') || lowerText.includes('headset') || lowerText.includes('hardware')) {
          botResponse = "No, we optimize our 3D courses using WebGL framework engines so they run smoothly on standard web browsers without extra hardware.";
        } else if (lowerText.includes('powerpoint') || lowerText.includes('slide') || lowerText.includes('convert')) {
          botResponse = "Yes, our creative design team transforms standard text slide decks into fully animated, gamified, and interactive learning environments.";
        } else if (lowerText.includes('industry') || lowerText.includes('medical') || lowerText.includes('aerospace') || lowerText.includes('use case')) {
          botResponse = "We primarily build them for industrial engineering safety, medical procedure walkthroughs, aerospace configurations, and complex corporate onboarding.";
        } else if (lowerText.includes('game') || lowerText.includes('gamified') || lowerText.includes('points')) {
          botResponse = "Yes, they include interactive achievements, pass/fail branching scenarios, and points tracking to maximize learner retention.";
        } else {
          botResponse = "We design highly interactive 3D simulations and custom cinematic courses built on standard SCORM and xAPI compliance framework specifications.";
        }
      } else if (hasTokens(consultingTokens)) {
        if (lowerText.includes('security') || lowerText.includes('secure') || lowerText.includes('encrypt') || lowerText.includes('rbac')) {
          botResponse = "Yes, our consulting includes setting up advanced role-based access control (RBAC), end-to-end data encryption, and corporate privacy compliance protocols.";
        } else if (lowerText.includes('staff') || lowerText.includes('train our') || lowerText.includes('internal')) {
          botResponse = "Yes, we provide comprehensive training handovers for your internal administrators, instructional designers, and HR teams.";
        } else if (lowerText.includes('success') || lowerText.includes('measure') || lowerText.includes('kpi')) {
          botResponse = "We map out key performance indicators (KPIs) focused on reducing training timelines, lowering system maintenance overheads, and boosting course completion rates.";
        } else if (lowerText.includes('hr') || lowerText.includes('integrate') || lowerText.includes('api') || lowerText.includes('directory')) {
          botResponse = "Yes, we specialize in building secure API bridges between your new LMS and existing enterprise HR platforms or Active Directory systems.";
        } else {
          botResponse = "Our e-learning consulting branch specializes in corporate knowledge restructuring, helping businesses audit their training processes, choose the right tech stack, and design enterprise learning blueprints.";
        }
      } else if (hasTokens(onboardingTokens)) {
        if (lowerText.includes('cost') || lowerText.includes('price') || lowerText.includes('quote') || lowerText.includes('how much')) {
          botResponse = "Because our enterprise solutions are completely custom-built to your scale, pricing depends on your requirements. Please submit an inquiry via our Contact page for a tailored proposal!";
        } else if (lowerText.includes('timeline') || lowerText.includes('long') || lowerText.includes('weeks') || lowerText.includes('develop')) {
          botResponse = "Standard LMS builds take roughly 4–6 weeks, while highly complex 3D simulation tracks typically take 6–10 weeks from initial design to live deployment.";
        } else if (lowerText.includes('book') || lowerText.includes('strategy') || lowerText.includes('meeting')) {
          botResponse = "You can click the highlighted 'BOOK STRATEGY' button at the far right of our top navigation navbar to secure a full architecture walkthrough with our engineers.";
        } else if (lowerText.includes('maintenance') || lowerText.includes('support') || lowerText.includes('launch')) {
          botResponse = "Yes, we provide dedicated maintenance SLA packages, regular database backups, and software updates to keep your systems running flawlessly.";
        } else {
          botResponse = "To request a project quote or map out an onboarding path, please use our Contact page form or click 'Book Strategy' at the top.";
        }
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
    <div className="fixed z-[9999] chatbot-container" style={{ bottom: "1.5rem", right: "1.5rem" }}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 bg-[#FFFFFF] rounded-[16px] flex flex-col overflow-hidden origin-bottom-right chatbot-window"
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
            className="fixed z-[99999] chatbot-tooltip"
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
            💬 Have a question? Tap to chat!
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
        className="bg-[#F97316] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 ease-in-out hover:scale-110 relative ml-auto mt-4 chatbot-toggle-btn"
        style={{ width: "60px", height: "60px" }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
}
