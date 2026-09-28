import React from 'react';
import { Metadata } from 'next';
import { Mail, MessageSquare, Facebook, ArrowUpRight, Sparkles, Clock, ShieldCheck, Zap } from 'lucide-react';
import { studioInfo } from '@/data/studio';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Abraham Arts Studio - Project Inquiry & Commission',
  description:
    'Start a 3D modeling or animation project with Olorunleke Abraham. Direct WhatsApp, email, and inquiry brief form.',
};

export default function ContactPage() {
  return (
    <div className="w-full bg-[#070D10] pt-28 sm:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Header */}
        <div className="mb-16 space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#74E023]/10 border border-[#74E023]/30 text-[#74E023] text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>COMMISSIONS & INQUIRIES</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
            Let&apos;s create something{' '}
            <span className="text-[#74E023]">worth watching.</span>
          </h1>

          <p className="text-base sm:text-xl text-[#859CA7] font-light leading-relaxed max-w-2xl">
            Have a project in mind, an asset requirement, or an animation sequence to produce? Get in touch directly or fill out the project brief below.
          </p>
        </div>

        {/* Two Column Layout: Direct Contact Info (Left) + Project Brief Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white tracking-tight">
                Direct Channels
              </h2>
              <p className="text-xs sm:text-sm text-[#859CA7] leading-relaxed">
                For urgent inquiries, quick questions, or instant file sharing, reach Abraham directly through WhatsApp or email.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-4">
              {/* WhatsApp Direct */}
              <a
                href={studioInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-[#091317] border border-white/10 hover:border-[#74E023] transition-all duration-300 block shadow-lg hover:shadow-[0_10px_30px_rgba(116,224,35,0.15)]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-[#74E023]/20 text-[#74E023] flex items-center justify-center border border-[#74E023]/30 group-hover:scale-110 transition-transform">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#74E023] block">
                        INSTANT MESSAGING
                      </span>
                      <h3 className="text-lg font-bold text-white group-hover:text-[#74E023] transition-colors">
                        WhatsApp Direct
                      </h3>
                      <p className="text-xs font-mono text-[#CBD5E1] mt-0.5">
                        {studioInfo.phone}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-[#74E023] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </a>

              {/* Email Direct */}
              <a
                href={`mailto:${studioInfo.email}`}
                className="group p-6 rounded-2xl bg-[#091317] border border-white/10 hover:border-[#74E023] transition-all duration-300 block shadow-lg hover:shadow-[0_10px_30px_rgba(116,224,35,0.15)]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-[#74E023]/20 text-[#74E023] flex items-center justify-center border border-[#74E023]/30 group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#74E023] block">
                        DIRECT INBOX
                      </span>
                      <h3 className="text-lg font-bold text-white group-hover:text-[#74E023] transition-colors">
                        Official Studio Email
                      </h3>
                      <p className="text-xs font-mono text-[#CBD5E1] mt-0.5 break-all">
                        {studioInfo.email}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-[#74E023] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </a>

              {/* Facebook Profile */}
              <a
                href={studioInfo.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-[#091317] border border-white/10 hover:border-[#74E023] transition-all duration-300 block shadow-lg hover:shadow-[0_10px_30px_rgba(116,224,35,0.15)]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-[#74E023]/20 text-[#74E023] flex items-center justify-center border border-[#74E023]/30 group-hover:scale-110 transition-transform">
                      <Facebook className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#74E023] block">
                        SOCIAL COMMUNITY
                      </span>
                      <h3 className="text-lg font-bold text-white group-hover:text-[#74E023] transition-colors">
                        Facebook Community
                      </h3>
                      <p className="text-xs text-[#CBD5E1] mt-0.5">
                        Follow latest updates & works
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-[#74E023] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </a>
            </div>

            {/* Studio Availability Status Box */}
            <div className="p-6 rounded-2xl bg-[#0B171D] border border-[#74E023]/30 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#74E023]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#74E023] animate-pulse" />
                <span>STUDIO STATUS: ACTIVE & ACCEPTING PROJECTS</span>
              </div>
              <p className="text-xs text-[#859CA7] leading-relaxed">
                Currently booking commercial 3D modeling, cinematic camera animation, and AI visual direction commissions. Response time is typically within 12–24 hours.
              </p>
            </div>
          </div>

          {/* Right Column: Project Brief Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
