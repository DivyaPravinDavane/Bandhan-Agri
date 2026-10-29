"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ShieldCheck, Building2 } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { companyData } from "@/data/company";
import { imageAssets } from "@/lib/imageAssets";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Farmer",
    company: "",
    message: "",
    consent: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please provide your name, email address, and inquiry message.");
      return;
    }
    setError("");
    setLoading(true);

    // Simulated short client-side delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <div className="bg-[#faf9f7] min-h-screen pb-24">
      {/* Page Hero */}
      <section className="relative py-16 sm:py-24 bg-[#051815] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={imageAssets.export.warehouse.src}
            alt="Bandhan Agritech Headquarters"
            fill
            sizes="100vw"
            className="object-cover opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051815] via-[#051815]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Contact Us" }]}
            className="mb-6 text-gray-300"
          />

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-white/10">
              <span>Direct Corporate & Agronomy Desk</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Get in <span className="text-emerald-400">Touch</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-200 leading-relaxed italic">
              &ldquo;The basic principle of Bandhan Agritech is the quality of our products, which is always confirmed by the highest level of assessment.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Verified Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold text-[#107634] uppercase tracking-wider">
                  Contact Information
                </span>
                <h2 className="text-2xl font-black text-[#051815] mt-1">
                  Corporate Headquarters
                </h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#107634]/10 text-[#107634] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-[#051815] font-bold">Address</strong>
                    <span className="text-gray-600 leading-relaxed">{companyData.address.full}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#107634]/10 text-[#107634] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-[#051815] font-bold">Support & Toll Free</strong>
                    <div className="space-y-0.5 text-gray-600">
                      <div>Toll Free: <strong className="text-[#107634]">{companyData.contact.tollFree}</strong></div>
                      <div>Direct Phone: {companyData.contact.phone}</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#107634]/10 text-[#107634] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-[#051815] font-bold">Email</strong>
                    <span className="text-gray-600">{companyData.contact.email}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#107634]/10 text-[#107634] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-[#051815] font-bold">Office Hours</strong>
                    <span className="text-gray-600">{companyData.contact.hours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Visual Card */}
            <div className="bg-gradient-to-br from-[#051815] to-[#0a241f] p-8 rounded-3xl text-white border border-white/10 shadow-lg space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#eecd15] uppercase tracking-wider">
                <Building2 className="w-4 h-4" />
                <span>Pune Commercial Hub</span>
              </div>
              <h3 className="text-lg font-bold">Teerth Exchange, Baner</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Strategically positioned along the Pune-Bangalore Highway near the Audi showroom, providing streamlined coordination with Maharashtra’s western transport corridors and international port terminals.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-gray-200/80 shadow-xl">
            <div className="mb-8">
              <span className="text-xs font-bold text-[#107634] uppercase tracking-wider">
                Inquiry Form
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#051815] mt-1">
                Send Us a Message
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Please select your relationship with Bandhan Agritech and provide your inquiry details below.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#107634] text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#051815]">
                  Submission Recorded Successfully
                </h3>
                <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed max-w-md mx-auto">
                  Thank you for your interest. This frontend demo has recorded your submission locally for demonstration purposes only.
                </p>
                <div className="pt-2 text-xs text-gray-500">
                  Role: <strong>{formData.role}</strong> • Name: <strong>{formData.name}</strong> ({formData.email})
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full bg-[#107634] text-white text-xs font-bold hover:bg-[#0a4d22] transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="p-3.5 rounded-xl bg-red-50 text-red-700 text-xs font-medium border border-red-200">
                    {error}
                  </div>
                )}

                {/* Role Selector */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    I am contacting as a: *
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#107634] focus:bg-white"
                  >
                    <option value="Farmer">Farmer / Producer</option>
                    <option value="Vendor">Vendor</option>
                    <option value="Supplier">Supplier</option>
                    <option value="Dealer">Dealer</option>
                    <option value="Distributor">Distributor</option>
                    <option value="Other">Other / International Importer</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Patil"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#107634] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ramesh@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#107634] focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#107634] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Company / Farm Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Patil Agro Orchards"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#107634] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Your Message / Inquiry *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your crop, input requirements, or export needs..."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#107634] focus:bg-white"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="w-4 h-4 text-[#107634] rounded border-gray-300 focus:ring-[#107634]"
                  />
                  <label htmlFor="consent" className="text-xs text-gray-600">
                    I agree to allow Bandhan Agritech to contact me regarding this inquiry.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#107634] hover:bg-[#0a4d22] text-white font-bold text-sm shadow-md transition-all active:scale-95 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? "Recording..." : "Send Message (Frontend Demo)"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
