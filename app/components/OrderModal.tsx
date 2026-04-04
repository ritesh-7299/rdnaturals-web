"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderModal({ isOpen, onClose }: OrderModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    message: "",
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (formData.name.trim().length < 2) {
      newErrors.name = "Please enter your full name";
    }
    
    // Indian phone number validation
    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = formData.phone.replace(/\s+/g, "").replace("+91", "");
    if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = "Enter a valid 10-digit mobile number";
    }
    
    if (formData.location.trim().length < 3) {
      newErrors.location = "Please enter your city or area";
    }
    
    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
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
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData({ 
        name: "", 
        phone: "",
        email: "", 
        location: "", 
        message: ""
      });
      setErrors({});
      setTimeout(() => {
        onClose();
        setStatus("idle");
      }, 2000);
    } catch (error) {
      console.error("Contact error:", error);
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    // Clear error for this field when user starts typing
    if (errors[field]) {
      const newErrors = { ...errors };
      delete newErrors[field];
      setErrors(newErrors);
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
            className="relative w-full max-w-lg bg-warm-white rounded-[2rem] shadow-2xl overflow-hidden border border-forest/10 max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8 sm:p-10">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-3xl font-display text-forest">Get in Touch</h2>
                  <p className="text-forest/60 text-sm mt-1">Direct from RD Naturals Farm</p>
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
                  <h3 className="text-2xl font-display text-forest mb-2">Message Received!</h3>
                  <p className="text-forest/60">We&apos;ll contact you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-forest/50 uppercase tracking-wider mb-2 ml-1">Full Name</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="John Doe"
                        className={`w-full px-5 py-3 rounded-xl bg-forest/5 border ${errors.name ? 'border-red-400' : 'border-forest/10'} focus:border-forest/30 focus:bg-white outline-none transition-all text-forest`}
                      />
                      {errors.name && <p className="text-[10px] text-red-500 mt-1 ml-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-forest/50 uppercase tracking-wider mb-2 ml-1">Phone Number</label>
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="10-digit mobile number"
                        className={`w-full px-5 py-3 rounded-xl bg-forest/5 border ${errors.phone ? 'border-red-400' : 'border-forest/10'} focus:border-forest/30 focus:bg-white outline-none transition-all text-forest`}
                      />
                      {errors.phone && <p className="text-[10px] text-red-500 mt-1 ml-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-forest/50 uppercase tracking-wider mb-2 ml-1">Email (Optional)</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your@email.com"
                        className={`w-full px-5 py-3 rounded-xl bg-forest/5 border ${errors.email ? 'border-red-400' : 'border-forest/10'} focus:border-forest/30 focus:bg-white outline-none transition-all text-forest`}
                      />
                      {errors.email && <p className="text-[10px] text-red-500 mt-1 ml-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-forest/50 uppercase tracking-wider mb-2 ml-1">Your Location</label>
                      <input
                        required
                        type="text"
                        value={formData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                        placeholder="City or Area"
                        className={`w-full px-5 py-3 rounded-xl bg-forest/5 border ${errors.location ? 'border-red-400' : 'border-forest/10'} focus:border-forest/30 focus:bg-white outline-none transition-all text-forest`}
                      />
                      {errors.location && <p className="text-[10px] text-red-500 mt-1 ml-1">{errors.location}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-forest/50 uppercase tracking-wider mb-2 ml-1">Message or Quotation Request</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Ask for a custom quote, bulk pricing, or any other questions..."
                      className="w-full px-5 py-3 rounded-xl bg-forest/5 border border-forest/10 focus:border-forest/30 focus:bg-white outline-none transition-all text-forest resize-none text-sm"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-500 text-xs font-medium text-center">{errorMessage}</p>
                  )}

                  <button
                    disabled={status === "loading"}
                    type="submit"
                    className="w-full py-4 mt-4 bg-forest text-warm-white rounded-xl font-bold text-lg hover:bg-forest-light transition-all shadow-lg shadow-forest/20 disabled:opacity-50 flex items-center justify-center gap-3"
                  >
                    {status === "loading" ? (
                      <div className="w-6 h-6 border-2 border-warm-white/30 border-t-warm-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Message
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
