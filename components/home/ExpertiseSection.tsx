import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Ship, Sprout, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { companyData } from "@/data/company";

export function ExpertiseSection() {
  const iconMap = {
    Ship: Ship,
    Sprout: Sprout,
    Users: Users,
  };

  return (
    <section className="py-20 lg:py-28 bg-[#faf9f7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Core Capabilities"
          title="Three Pillars of"
          highlightText="Expertise"
          subtitle="A holistic approach connecting grower empowerment, high-yield input science, and international trade."
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {companyData.pillars.map((pillar) => {
            const IconComponent = iconMap[pillar.icon as keyof typeof iconMap] || Sprout;

            return (
              <div
                key={pillar.id}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-200/80 hover:border-[#107634]/40 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Photo container */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Floating Icon */}
                    <div className="absolute bottom-4 left-4 p-3 rounded-2xl bg-white/90 backdrop-blur-md text-[#107634] shadow-md">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Body Text */}
                  <div className="p-6">
                    <div className="text-xs font-bold text-[#107634] uppercase tracking-wider mb-1">
                      {pillar.tagline}
                    </div>
                    <h3 className="text-xl font-bold text-[#051815] group-hover:text-[#107634] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                {/* Footer action */}
                <div className="p-6 pt-0">
                  <Link
                    href={pillar.link}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#107634] hover:text-[#0a4d22] transition-colors group/link"
                  >
                    <span>Explore More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
