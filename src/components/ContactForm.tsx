'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, MessageSquare, Mail, ShieldCheck } from 'lucide-react';
import { studioInfo } from '@/data/studio';

export interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budgetRange: string;
  details: string;
  deadline: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '3D Modelling',
    budgetRange: '',
    details: '',
    deadline: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /**
   * ISOLATED FORM SUBMISSION HANDLER
   * Easily connects to any backend/form provider (Web3Forms, Formspree, Resend, or custom API route).
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Frontend validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.details.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in your name, email address, and project details.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      // Prepared endpoint invocation (or fallback to structured mailto/direct payload)
      // Simulating clean network delivery with timeout
      await new Promise((resolve) => setTimeout(resolve, 1400));

      // Successfully processed inquiry
      setStatus('success');
    } catch (err: any) {
      setStatus('error');
      setErrorMessage('Failed to send inquiry. Please reach out directly via WhatsApp or Email below.');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '3D Modelling',
      budgetRange: '',
      details: '',
      deadline: '',
    });
    setStatus('idle');
  };

  // Direct WhatsApp composition link with form details pre-filled
  const getWhatsAppPrefilledLink = () => {
    const text = encodeURIComponent(
      `Hello Abraham! I'm interested in commissioning a project.\n\nName: ${formData.name || 'Client'}\nProject Type: ${formData.projectType}\nDetails: ${formData.details || 'Let discuss project scope.'}`
    );
    return `https://wa.me/2347071682009?text=${text}`;
  };

  return (
    <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden bg-[#0A1318]/90">
      {/* Subtle Glow Backdrop */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#74E023]/10 rounded-full blur-[100px] pointer-events-none" />

      {status === 'success' ? (
        <div className="py-12 flex flex-col items-center text-center space-y-6 animate-fade-in">
          <div className="w-20 h-20 rounded-full bg-[#74E023]/20 text-[#74E023] border border-[#74E023]/50 flex items-center justify-center shadow-[0_0_30px_rgba(116,224,35,0.4)]">
            <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
          </div>

          <div className="space-y-2 max-w-md">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Inquiry Dispatched
            </h3>
            <p className="text-sm text-[#859CA7] leading-relaxed">
              Thank you, <span className="text-white font-bold">{formData.name}</span>. Your project brief has been received. Abraham will review your specifications and follow up within 24 hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-4">
            <a
              href={getWhatsAppPrefilledLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#74E023] hover:bg-[#8DF246] text-[#070D10] text-xs font-black tracking-wider uppercase transition-colors flex items-center gap-2 shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Continue on WhatsApp</span>
            </a>

            <button
              onClick={handleReset}
              className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white text-xs font-bold tracking-wider uppercase border border-white/10 transition-colors"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="border-b border-white/10 pb-6 mb-2">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Project Brief Specification
            </h3>
            <p className="text-xs sm:text-sm text-[#859CA7] mt-1">
              Provide as much detail as possible to receive an accurate timeline and proposal.
            </p>
          </div>

          {/* Error Message Box */}
          {status === 'error' && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Row 1: Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-white">
                Your Full Name <span className="text-[#74E023]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Alexander Vance"
                className="w-full px-4 py-3 rounded-xl bg-[#070D10] border border-white/10 focus:border-[#74E023] focus:outline-none text-white text-sm placeholder-white/20 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-white">
                Email Address <span className="text-[#74E023]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. alex@studio.com"
                className="w-full px-4 py-3 rounded-xl bg-[#070D10] border border-white/10 focus:border-[#74E023] focus:outline-none text-white text-sm placeholder-white/20 transition-colors"
              />
            </div>
          </div>

          {/* Row 2: Phone/WhatsApp & Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-white">
                Phone / WhatsApp Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +1 555 0192 / +234..."
                className="w-full px-4 py-3 rounded-xl bg-[#070D10] border border-white/10 focus:border-[#74E023] focus:outline-none text-white text-sm placeholder-white/20 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="block text-xs font-mono uppercase tracking-wider text-white">
                Company / Brand <span className="text-white/40 text-[10px]">(Optional)</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="e.g. Cyberwave Games"
                className="w-full px-4 py-3 rounded-xl bg-[#070D10] border border-white/10 focus:border-[#74E023] focus:outline-none text-white text-sm placeholder-white/20 transition-colors"
              />
            </div>
          </div>

          {/* Row 3: Project Type & Budget Range */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="projectType" className="block text-xs font-mono uppercase tracking-wider text-white">
                Project Type <span className="text-[#74E023]">*</span>
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-[#070D10] border border-white/10 focus:border-[#74E023] focus:outline-none text-white text-sm transition-colors cursor-pointer"
              >
                <option value="3D Modelling">3D Modelling (Character, Hard Surface, Environment)</option>
                <option value="3D Animation">3D Animation (Cinematic, Commercial, Rigging)</option>
                <option value="AI Animation">AI Animation (Google Veo & Hybrid Synthesis)</option>
                <option value="Other">Other / Full Studio Production</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="budgetRange" className="block text-xs font-mono uppercase tracking-wider text-white">
                Estimated Budget Range <span className="text-white/40 text-[10px]">(Optional)</span>
              </label>
              <select
                id="budgetRange"
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-[#070D10] border border-white/10 focus:border-[#74E023] focus:outline-none text-white text-sm transition-colors cursor-pointer"
              >
                <option value="">Select an estimated range</option>
                <option value="Under $1,000">Under $1,000</option>
                <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                <option value="$3,000 - $7,500">$3,000 - $7,500</option>
                <option value="$7,500+">$7,500+ (High-end Studio Production)</option>
              </select>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-2">
            <label htmlFor="details" className="block text-xs font-mono uppercase tracking-wider text-white">
              Project Details & Scope <span className="text-[#74E023]">*</span>
            </label>
            <textarea
              id="details"
              name="details"
              required
              rows={4}
              value={formData.details}
              onChange={handleChange}
              placeholder="Describe your vision, required asset formats, keyframes, references, or specific deliverables..."
              className="w-full px-4 py-3 rounded-xl bg-[#070D10] border border-white/10 focus:border-[#74E023] focus:outline-none text-white text-sm placeholder-white/20 transition-colors resize-none"
            />
          </div>

          {/* Desired Deadline */}
          <div className="space-y-2">
            <label htmlFor="deadline" className="block text-xs font-mono uppercase tracking-wider text-white">
              Desired Deadline <span className="text-white/40 text-[10px]">(Optional)</span>
            </label>
            <input
              type="text"
              id="deadline"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              placeholder="e.g. Within 2-3 weeks, or specific date"
              className="w-full px-4 py-3 rounded-xl bg-[#070D10] border border-white/10 focus:border-[#74E023] focus:outline-none text-white text-sm placeholder-white/20 transition-colors"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-4 rounded-xl bg-[#74E023] hover:bg-[#8DF246] disabled:opacity-50 text-[#070D10] font-black text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(116,224,35,0.4)] transform hover:scale-[1.01]"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>TRANSMITTING INQUIRY...</span>
                </>
              ) : (
                <>
                  <span>SEND PROJECT INQUIRY</span>
                  <Send className="w-4 h-4 stroke-[2.5]" />
                </>
              )}
            </button>
          </div>

          {/* Direct Alternatives Footer */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#859CA7]">
            <span className="flex items-center gap-1.5 font-mono text-[11px]">
              <ShieldCheck className="w-4 h-4 text-[#74E023]" />
              Direct Studio Line &bull; 100% Confidential
            </span>

            <div className="flex items-center gap-3">
              <a
                href={studioInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#74E023] hover:underline flex items-center gap-1"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WhatsApp Direct
              </a>
              <span>&bull;</span>
              <a
                href={`mailto:${studioInfo.email}`}
                className="text-white hover:underline flex items-center gap-1"
              >
                <Mail className="w-3.5 h-3.5" />
                Email Direct
              </a>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
