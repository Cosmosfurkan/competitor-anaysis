"use client";

import React, { useState } from "react";
import PlatformSelector from "./platform-selector";
import SearchSection from "./search-section";
import CompetitorTable from "./competitor-table";

const mockData = [
  {
    id: 1,
    creatorName: "Sarah Johnson",
    platform: "Instagram",
    handle: "@sarahjbeauty",
    topVideos: [
      {
        id: 1,
        videoLink: "https://instagram.com/p/example1",
        thumbnail:
          "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=225&fit=crop",
        hook: "5 Makeup Hacks You Need",
        topic: "Beauty Tips",
        layout: "Tutorial Style",
        views: 1500000,
        likes: 250000,
        aiInsights:
          "Strong opening hook with clear value proposition. Uses quick cuts and close-up shots effectively. Engagement peaks in first 3 seconds.",
      },
      {
        id: 2,
        videoLink: "https://instagram.com/p/example2",
        thumbnail:
          "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=225&fit=crop",
        hook: "Skincare Routine Reveal",
        topic: "Skincare",
        layout: "Morning Routine",
        views: 2000000,
        likes: 300000,
        aiInsights:
          "Effective use of before/after transitions. Personal storytelling elements increase authenticity. High retention rate throughout.",
      },
      // Add more videos up to 10
    ],
  },
  {
    id: 2,
    creatorName: "Mike Chen",
    platform: "TikTok",
    handle: "@mikechen_tech",
    topVideos: [
      {
        id: 1,
        videoLink: "https://tiktok.com/@mikechen/video1",
        thumbnail:
          "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400&h=225&fit=crop",
        hook: "iPhone Hidden Features",
        topic: "Tech Tips",
        layout: "Quick Tutorial",
        views: 3000000,
        likes: 500000,
        aiInsights:
          "Rapid-fire delivery style with clear visual demonstrations. Uses text overlays effectively. High share rate due to useful information.",
      },
      {
        id: 2,
        videoLink: "https://tiktok.com/@mikechen/video2",
        thumbnail:
          "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400&h=225&fit=crop",
        hook: "AI Tools You Need",
        topic: "Tech Tools",
        layout: "List Format",
        views: 2500000,
        likes: 400000,
        aiInsights:
          "Effective use of screen recordings and transitions. Clear value proposition in first 2 seconds. Strong call-to-action.",
      },
      // Add more videos up to 10
    ],
  },
  {
    id: 3,
    creatorName: "Tech Reviews Pro",
    platform: "YouTube",
    handle: "@techreviewspro",
    topVideos: [
      {
        id: 1,
        videoLink: "https://youtube.com/watch?v=example1",
        thumbnail:
          "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=400&h=225&fit=crop",
        hook: "The Truth About AI",
        topic: "Technology",
        layout: "Documentary Style",
        views: 5000000,
        likes: 750000,
        aiInsights:
          "Professional intro with strong narrative hook. Uses data visualization effectively. High audience retention through storytelling.",
      },
      {
        id: 2,
        videoLink: "https://youtube.com/watch?v=example2",
        thumbnail:
          "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=400&h=225&fit=crop",
        hook: "Future of Tech 2024",
        topic: "Tech Trends",
        layout: "Analysis Format",
        views: 4000000,
        likes: 600000,
        aiInsights:
          "Expert interviews add credibility. Clear chapter structure maintains engagement. Effective use of b-roll footage.",
      },
      // Add more videos up to 10
    ],
  },
  // Additional rows with premium content
  ...Array.from({ length: 22 }, (_, i) => ({
    id: i + 4,
    creatorName: `Creator ${i + 4}`,
    platform: ["Instagram", "TikTok", "YouTube"][i % 3],
    handle: `@creator${i + 4}`,
    topVideos: Array.from({ length: 10 }, (_, j) => ({
      id: j + 1,
      videoLink: "https://example.com/premium",
      thumbnail:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=225&fit=crop",
      hook: "Premium Content",
      topic: "Various",
      layout: "Premium Format",
      views: 1000000,
      likes: 150000,
      aiInsights: "Premium content analysis available with subscription.",
    })),
  })),
];

export default function CompetitorAnalysisSection() {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handlePlatformSelect = (platform: string) => {
    setSelectedPlatform(platform);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleAnalyze = () => {
    console.log("Analyzing:", { selectedPlatform, searchQuery });
  };

  return (
    <div className="min-h-screen mt-[-50px] bg-[#f4fcff]">
      <header className="border-b border-neutral/10">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2 sm:mb-4 tracking-tight">
            Competitor Research Platform
          </h1>
          <p className="text-lg sm:text-xl text-primary/80 mb-6 sm:mb-8">
            Analyze top creators and trending videos
          </p>

          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onPlatformSelect={handlePlatformSelect}
          />
        </div>
      </header>

      <main>
        <SearchSection
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          onAnalyze={handleAnalyze}
        />

        <CompetitorTable data={mockData} />
      </main>
    </div>
  );
}
