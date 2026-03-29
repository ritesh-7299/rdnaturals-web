"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WhatsAppIcon } from "./icons";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    description: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send order");
      }

      setStatus("success");
      setFormData({ email: "", phone: "", description: "" });
      setTimeout(() => {
        onClose();
        setStatus("idle");
      }, 2000);
    } catch (error) {
      console.error("Order error:", error);
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-forest/40 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-warm-white rounded-[2rem] shadow-2xl overflow-hidden border border-forest/10"
          >
            <div className="p-8 sm:p-10">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-3xl font-display text-forest">Place Your Order</h2>
                  <p className="text-forest/60 text-sm mt-1">We'll get back to you shortly</p>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-forest/5 flex items-center justify-center text-forest hover:bg-forest hover:text-warm-white transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-forest/10 rounded-full flex items-center justify-center text-forest mx-auto mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-display text-forest mb-2">Order Received!</h3>
                  <p className="text-forest/60">Thank you for choosing RD Naturals.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-forest mb-2 ml-1">Email Address</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-6 py-4 rounded-2xl bg-forest/5 border border-forest/10 focus:border-forest/30 focus:bg-white outline-none transition-all text-forest"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-forest mb-2 ml-1">Phone Number</label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-6 py-4 rounded-2xl bg-forest/5 border border-forest/10 focus:border-forest/30 focus:bg-white outline-none transition-all text-forest"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-forest mb-2 ml-1">Order Details</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Varieties, quantity, and your location..."
                      className="w-full px-6 py-4 rounded-2xl bg-forest/5 border border-forest/10 focus:border-forest/30 focus:bg-white outline-none transition-all text-forest resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-500 text-sm font-medium text-center">{errorMessage}</p>
                  )}

                  <button
                    disabled={status === "loading"}
                    type="submit"
                    className="w-full py-5 bg-forest text-warm-white rounded-2xl font-bold text-lg hover:bg-forest-light transition-all shadow-lg shadow-forest/20 disabled:opacity-50 flex items-center justify-center gap-3"
                  >
                    {status === "loading" ? (
                      <div className="w-6 h-6 border-2 border-warm-white/30 border-t-warm-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Confirm Order
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                  
                  <div className="text-center">
                    <p className="text-xs text-forest/40 font-medium uppercase tracking-widest">
                      Or connect instantly via
                    </p>
                    <a 
                      href="https://wa.me/91XXXXXXXXXX" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-forest/70 hover:text-forest transition-colors mt-3 text-sm font-bold"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      WhatsApp Chat
                    </a>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
