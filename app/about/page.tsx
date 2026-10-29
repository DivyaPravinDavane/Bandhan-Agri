import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, HeartHandshake, Award, Users, Target, Compass } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { companyData } from "@/data/company";
import { teamMembers } from "@/data/team";
import { imageAssets } from "@/lib/imageAssets";

export default function AboutUsPage() {
  const leadershipPreview = teamMembers.filter((m) => m.department === "Board of Directors");

  return (
    <div className="bg-[#faf9f7] min-h-screen pb-24">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-[#051815] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={imageAssets.gallery.plantation.src}
            alt="Bandhan Agritech Banana Plantation"
            fill
            sizes="100vw"
            className="object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051815] via-[#051815]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "About Us" }]}
            className="mb-6 text-gray-300"
          />

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-white/10">
              <span>Founded in 2015 • Pune, India</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              About Bandhan <span className="text-emerald-400">Agritech</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              Founded in 2015 and headquartered in Pune, Bandhan Agritech Pvt. Ltd. is a premier Indian agribusiness uniting grower welfare, scientific crop inputs, and world-class banana exports.
            </p>
          </div>
        </div>
      </section>

      {/* Main Corporate Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              eyebrow="Our Origins"
              title="A Decade of Trust, Soil &"
              highlightText="Global Trade"
              align="left"
            />

            <p className="text-base text-gray-700 leading-relaxed">
              Founded in 2015 and headquartered in Pune, Bandhan Agritech Pvt. Ltd. is a leading name in Indian agriculture. Renowned for exporting premium bananas, the company connects Indian produce to both domestic and international markets.
            </p>

            <p className="text-sm text-gray-600 leading-relaxed">
              Bandhan Agritech also provides farmers with high-quality agricultural inputs, including Organic and Chemical Fertilizers, Pesticides, Fungicides, and Insecticides, ensuring they have the tools needed for successful farming. Additionally, the company offers expert consultancy services, empowering farmers with modern, sustainable practices to boost productivity and profitability.
            </p>

            <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#107634]/10 text-[#107634] shrink-0">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#051815]">Farmer First Philosophy</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  We believe agricultural prosperity starts at the root. Direct field guidance, fair pricing, and punctual settlement empower our network of over 100,000 farmers.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="relative rounded-3xl overflow-hidden shadow-lg h-64 border border-gray-100">
              <Image
                src={imageAssets.gallery.fieldInspection.src}
                alt="Agronomist inspecting crop"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-lg h-64 border border-gray-100 mt-6">
              <Image
                src={imageAssets.gallery.farmerTraining.src}
                alt="Farmer workshop"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:border-[#107634]/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#107634]/10 flex items-center justify-center text-[#107634] mb-6">
                <Target className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold text-[#107634] uppercase tracking-wider mb-2">
                Our Vision
              </div>
              <h3 className="text-2xl font-black text-[#051815] mb-4">
                Strengthen Sustainable Food Systems
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {companyData.vision}
              </p>
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:border-[#107634]/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#eecd15]/20 flex items-center justify-center text-[#854d0e] mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold text-[#107634] uppercase tracking-wider mb-2">
                Our Mission
              </div>
              <h3 className="text-2xl font-black text-[#051815] mb-4">
                End-to-End Farmer Support
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {companyData.mission}
              </p>
            </div>
          </div>
        </div>

        {/* 5 Core Values */}
        <div className="mt-20">
          <SectionHeading
            eyebrow="Ethical Foundations"
            title="The Five Pillars of Our"
            highlightText="Core Values"
            subtitle="The uncompromising standards guiding every container dispatched and every farmer consultation."
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {companyData.values.map((val, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#107634]/10 flex items-center justify-center text-[#107634] font-black text-sm mb-4">
                    0{idx + 1}
                  </div>
                  <h4 className="text-base font-bold text-[#051815] mb-2">
                    {val.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Preview */}
        <div className="mt-24 p-8 sm:p-12 rounded-3xl bg-white border border-gray-200/80 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold text-[#107634] uppercase tracking-wider">
                Leadership
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#051815]">
                Board of Directors
              </h3>
            </div>

            <Link
              href="/our-team"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#107634] hover:underline"
            >
              <span>View Complete Executive Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadershipPreview.map((leader) => (
              <div
                key={leader.id}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 rounded-2xl bg-[#faf9f7] border border-gray-100"
              >
                <div className="relative w-28 h-28 rounded-2xl overflow-hidden shrink-0 shadow-md">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#051815]">
                    {leader.name}
                  </h4>
                  <div className="text-xs font-semibold text-[#107634] mb-2">
                    {leader.role}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
