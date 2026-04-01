import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

interface Message {
  id: number;
  text: string;
  sender: "bot" | "user";
}

const STEPS = [
  { key: "name", question: "Great to meet you! What's your name?" },
  { key: "email", question: "What's the best email to reach you at?" },
  {
    key: "type",
    question: "What type of project are you looking for?",
    options: ["Website", "E-Commerce", "Web Application", "SEO & Marketing", "Video & Media", "Other"],
  },
  { key: "message", question: "Tell us briefly about your project or requirements:" },
];

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(-1);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [collected, setCollected] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  let msgId = useRef(0);

  const addMsg = (text: string, sender: "bot" | "user") => {
    msgId.current++;
    setMessages((prev) => [...prev, { id: msgId.current, text, sender }]);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open && messages.length === 0) {
      setTimeout(() => {
        addMsg("Hey there! 👋 I'm the Fluxion assistant. I'm here to help you explore our services and get started.", "bot");
        setTimeout(() => {
          addMsg("Would you like to tell us about your project so we can reach out? Just type 'yes' to start!", "bot");
        }, 800);
      }, 400);
    }
  }, [open]);

  const handleStart = () => {
    setStep(0);
    setTimeout(() => addMsg(STEPS[0].question, "bot"), 400);
  };

  const handleSend = async () => {
    const value = input.trim();
    if (!value) return;

    addMsg(value, "user");
    setInput("");

    if (step === -1) {
      if (value.toLowerCase().includes("yes") || value.toLowerCase().includes("sure") || value.toLowerCase().includes("ok")) {
        handleStart();
      } else {
        setTimeout(() => addMsg("No worries! Feel free to explore our website. If you change your mind, just type 'yes' and I'll help you get started. 😊", "bot"), 400);
      }
      return;
    }

    // Validate email
    if (STEPS[step].key === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setTimeout(() => addMsg("That doesn't look like a valid email. Could you try again?", "bot"), 400);
      return;
    }

    const newCollected = { ...collected, [STEPS[step].key]: value };
    setCollected(newCollected);

    const nextStep = step + 1;
    if (nextStep < STEPS.length) {
      setStep(nextStep);
      setTimeout(() => addMsg(STEPS[nextStep].question, "bot"), 500);
    } else {
      // All collected, send email
      setSending(true);
      setTimeout(() => addMsg("Thanks! Let me send this over to our team... ✨", "bot"), 300);
      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            name: newCollected.name,
            email: newCollected.email,
            type: newCollected.type,
            message: `[ChatBot Lead] ${newCollected.message}`,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
        setTimeout(() => {
          addMsg(`Awesome, ${newCollected.name}! 🎉 Your details have been sent to our team. We'll reach out to you at ${newCollected.email} very soon!`, "bot");
          setDone(true);
        }, 1000);
      } catch (err) {
        console.error("ChatBot EmailJS error:", err);
        setTimeout(() => addMsg("Oops, something went wrong. Please try using our Contact page instead!", "bot"), 500);
      } finally {
        setSending(false);
      }
    }
  };

  const handleOptionClick = (option: string) => {
    setInput(option);
    setTimeout(() => {
      addMsg(option, "user");
      const newCollected = { ...collected, [STEPS[step].key]: option };
      setCollected(newCollected);
      const nextStep = step + 1;
      if (nextStep < STEPS.length) {
        setStep(nextStep);
        setTimeout(() => addMsg(STEPS[nextStep].question, "bot"), 500);
      }
    }, 100);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors"
            style={{ boxShadow: "0 0 25px hsla(185, 72%, 48%, 0.4)" }}
          >
            <MessageCircle size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-6 right-6 z-50 w-[370px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-3rem)] rounded-2xl overflow-hidden flex flex-col border border-border"
            style={{ background: "hsl(215, 50%, 9%)" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-card">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Bot size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Fluxion Assistant</p>
                  <p className="text-xs text-muted-foreground">Online</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 scrollbar-thin">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex gap-2 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.sender === "bot" && (
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                      <Bot size={14} className="text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-secondary text-foreground rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.sender === "user" && (
                    <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center shrink-0 mt-1">
                      <User size={14} className="text-muted-foreground" />
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Options for project type */}
              {step >= 0 && STEPS[step]?.options && !done && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-wrap gap-2 pl-8"
                >
                  {STEPS[step].options!.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleOptionClick(opt)}
                      className="text-xs px-3 py-1.5 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                    >
                      {opt}
                    </button>
                  ))}
                </motion.div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            {!done && (
              <div className="px-3 py-3 border-t border-border bg-card">
                <div className="flex items-center gap-2">
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type a message..."
                    disabled={sending}
                    className="flex-1 bg-secondary/50 border border-border rounded-xl px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
                  />
                  <button
                    onClick={handleSend}
                    disabled={!input.trim() || sending}
                    className="w-9 h-9 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-50"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
