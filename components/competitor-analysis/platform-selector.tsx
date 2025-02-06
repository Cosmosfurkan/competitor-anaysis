"use client";

import React from "react";
import { Instagram, Atom as Tiktok, Youtube } from "lucide-react";

interface PlatformSelectorProps {
  selectedPlatform: string | null;
  onPlatformSelect: (platform: string) => void;
}

export default function PlatformSelector({
  selectedPlatform,
  onPlatformSelect,
}: PlatformSelectorProps) {
  const platforms = [
    {
      name: "Instagram",
      icon: Instagram,
      bgColor: "bg-gradient-to-r from-[#405DE6] via-[#5851DB] to-[#833AB4]",
      hoverColor: "hover:opacity-90",
    },
    {
      name: "TikTok",
      icon: Tiktok,
      bgColor: "bg-[#000000]",
      hoverColor: "hover:bg-[#000000]/90",
    },
    {
      name: "YouTube",
      icon: Youtube,
      bgColor: "bg-[#FF0000]",
      hoverColor: "hover:bg-[#FF0000]/90",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
      {platforms.map((platform) => (
        <button
          key={platform.name}
          onClick={() => onPlatformSelect(platform.name)}
          className={`flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all ${
            selectedPlatform === platform.name
              ? `${platform.bgColor} text-white shadow-lg`
              : `bg-white/10 text-neutral hover:bg-white/20 border border-neutral/20 ${platform.hoverColor}`
          }`}
        >
          <platform.icon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          {platform.name}
        </button>
      ))}
    </div>
  );
}
