"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Mail, ArrowRight, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { teamMembers, TeamMember } from "@/data/team";
import { imageAssets } from "@/lib/imageAssets";

export default function OurTeamPage() {
  const [activeDept, setActiveDept] = useState<string>("All");

  const departments = [
    "All",
    "Board of Directors",
    "Growth Alchemists",
    "Strategic Management",
    "Agri Export",
    "Agri Input",
    "Workplace",
  ];

  const filteredTeam =
    activeDept === "All"
      ? teamMembers
      : teamMembers.filter((m) => m.department === activeDept);

  return (
    <div className="bg-[#faf9f7] min-h-screen pb-24">
      {/* Page Hero */}
      <section className="relative py-16 sm:py-24 bg-[#051815] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={imageAssets.gallery.farmerTraining.src}
            alt="Bandhan Agritech Team"
            fill
            sizes="100vw"
            className="object-cover opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051815] via-[#051815]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "About Us", href: "/about" },
              { label: "Our Team" },
            ]}
            className="mb-6 text-gray-300"
          />

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-white/10">
              <Users className="w-3.5 h-3.5 text-[#eecd15]" />
              <span>Leadership & Agronomists</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Our <span className="text-emerald-400">Team</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              Meet the directors, business partners, supply chain strategists, and agricultural experts driving Bandhan Agritech&apos;s mission to connect Indian growers to the world.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Department Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {departments.map((dept) => {
            const isActive = activeDept === dept;
            return (
              <button
                key={dept}
                onClick={() => setActiveDept(dept)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#107634] text-white shadow-sm"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {dept}
              </button>
            );
          })}
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTeam.map((member) => (
            <div
              key={member.id}
              className="group bg-white rounded-3xl p-6 border border-gray-200/80 hover:border-[#107634]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Portrait */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 mb-6 shadow-inner">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#051815]/80 backdrop-blur-md text-emerald-300 text-[10px] font-bold border border-white/10">
                    {member.department}
                  </div>
                </div>

                {/* Details */}
                <h3 className="text-xl font-bold text-[#051815] group-hover:text-[#107634] transition-colors">
                  {member.name}
                </h3>
                <div className="text-xs font-semibold text-[#107634] mt-0.5 mb-3">
                  {member.role}
                </div>
                <p className="text-xs text-gray-600 leading-relaxed line-clamp-4">
                  {member.bio}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
                <span>Bandhan Agritech Executive</span>
                <ShieldCheck className="w-4 h-4 text-[#107634]" />
              </div>
            </div>
          ))}
        </div>

        {/* Workplace & Values Section */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-white border border-gray-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#107634] uppercase tracking-wider">
              Careers & Culture
            </span>
            <h3 className="text-2xl font-black text-[#051815]">
              Join the Agritech Movement
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 max-w-xl leading-relaxed">
              We are constantly seeking passionate agronomists, international export specialists, and supply chain coordinators dedicated to advancing Indian agricultural prosperity.
            </p>
          </div>

          <Link
            href="/contact"
            className="px-6 py-3 rounded-full bg-[#107634] text-white text-xs sm:text-sm font-bold hover:bg-[#0a4d22] transition-colors shrink-0 shadow-md"
          >
            <span>Get in Touch With HR</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
