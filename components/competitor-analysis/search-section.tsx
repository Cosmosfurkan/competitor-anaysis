"use client";

import React from "react";
import { Search } from "lucide-react";

interface SearchSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onAnalyze: () => void;
}

export default function SearchSection({
  searchQuery,
  onSearchChange,
  onAnalyze,
}: SearchSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6 sm:py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 w-full">
        <div className="relative w-full sm:w-2/3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent w-4 h-4 sm:w-5 sm:h-5" />
          <input
            type="text"
            placeholder="Search for creators or content..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 sm:pl-12 pr-4 py-2 sm:py-3 rounded-lg border bg-[#f4fcff] border-primary/20  text-neutral  placeholder-neutral focus:ring-2 focus:ring-accent focus:border-transparent"
          />
        </div>
        <button
          onClick={onAnalyze}
          className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 bg-neutral text-white rounded-lg  shadow-lg"
        >
          Analyze Now
        </button>
      </div>
    </section>
  );
}
