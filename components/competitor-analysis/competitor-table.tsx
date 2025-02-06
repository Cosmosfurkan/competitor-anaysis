"use client";

import React, { useState } from "react";
import {
  Instagram,
  Atom as Tiktok,
  Youtube,
  ChevronRight,
  CreditCard,
  Check,
} from "lucide-react";

interface Competitor {
  id: number;
  creatorName: string;
  platform: string;
  handle: string;
  topVideos: Video[];
}

interface Video {
  id: number;
  videoLink: string;
  thumbnail: string;
  hook: string;
  topic: string;
  layout: string;
  views: number;
  likes: number;
  aiInsights: string;
}

interface CompetitorTableProps {
  data: Competitor[];
}

const platformColors = {
  Instagram: {
    text: "bg-clip-text text-transparent bg-gradient-to-r from-[#405DE6] via-[#5851DB] to-[#833AB4]",
    bg: "bg-gradient-to-r from-[#405DE6] via-[#5851DB] to-[#833AB4]",
    hover: "hover:opacity-90",
  },
  TikTok: {
    text: "text-[#000000]",
    bg: "bg-[#000000]",
    hover: "hover:bg-[#000000]/90",
  },
  YouTube: {
    text: "text-[#FF0000]",
    bg: "bg-[#FF0000]",
    hover: "hover:bg-[#FF0000]/90",
  },
};

const PlatformIcon = ({ platform }: { platform: string }) => {
  const icons = {
    Instagram: (
      <Instagram
        className={`w-4 h-4 sm:w-5 sm:h-5 ${
          platform === "Instagram"
            ? "text-[#405DE6]"
            : platformColors[platform as keyof typeof platformColors].text
        }`}
      />
    ),
    TikTok: (
      <Tiktok
        className={`w-4 h-4 sm:w-5 sm:h-5 ${platformColors[platform as keyof typeof platformColors].text}`}
      />
    ),
    YouTube: (
      <Youtube
        className={`w-4 h-4 sm:w-5 sm:h-5 ${platformColors[platform as keyof typeof platformColors].text}`}
      />
    ),
  };
  return (
    <div className="flex items-center gap-2">
      {icons[platform as keyof typeof icons]}
      <span
        className={platformColors[platform as keyof typeof platformColors].text}
      >
        {platform}
      </span>
    </div>
  );
};

export default function CompetitorTable({ data }: CompetitorTableProps) {
  const [selectedCreator, setSelectedCreator] = useState<Competitor | null>(
    null
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-6 sm:py-8 sm:px-6 lg:px-8">
      <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
        <table className="min-w-full divide-y divide-neutral/10">
          <thead className="bg-base">
            <tr>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-neutral uppercase tracking-wider w-[30%]">
                Creator
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-neutral uppercase tracking-wider w-[25%]">
                Platform
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-neutral uppercase tracking-wider w-[30%]">
                Handle
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-neutral uppercase tracking-wider w-[15%]">
                Details
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral/10">
            {data.map((row, idx) => (
              <tr
                key={row.id}
                className={`${
                  idx % 2 === 0 ? "bg-white" : "bg-base"
                } ${idx >= 20 ? "relative" : ""}`}
              >
                <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-neutral">
                    {row.creatorName}
                  </div>
                </td>
                <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                  <PlatformIcon platform={row.platform} />
                </td>
                <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                  <span className="text-sm text-neutral/80">{row.handle}</span>
                </td>
                <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                  <button
                    onClick={() => {
                      setSelectedCreator(row);
                      const modal = document.getElementById(
                        "creator_details_modal"
                      ) as HTMLDialogElement;
                      modal?.showModal();
                    }}
                    className={`inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-md shadow-sm text-sm font-medium text-white ${
                      platformColors[
                        row.platform as keyof typeof platformColors
                      ].bg
                    } ${platformColors[row.platform as keyof typeof platformColors].hover} transition-colors`}
                  >
                    More Info
                    <ChevronRight className="ml-1.5 -mr-0.5 h-4 w-4" />
                  </button>
                </td>
                {idx >= 20 && (
                  <td className="absolute inset-0 backdrop-blur-[4px] bg-base/90">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        className="px-6 py-3 bg-[#0069ff] text-white rounded-lg hover:bg-[#0069ff]/90 transition-colors shadow-lg"
                        onClick={() => {
                          const modal = document.getElementById(
                            "payment_modal"
                          ) as HTMLDialogElement;
                          modal?.showModal();
                        }}
                      >
                        Unlock Premium
                      </button>
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Creator Details Modal */}
      <dialog id="creator_details_modal" className="modal">
        <div className="modal-box bg-base-100 w-11/12 max-w-7xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-2xl text-primary">
              {selectedCreator?.creatorName}'s Top Videos
            </h3>
            <form method="dialog">
              <button className="btn btn-ghost btn-sm">Close</button>
            </form>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral/10">
              <thead className="bg-base">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-neutral uppercase tracking-wider">
                    Video
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-neutral uppercase tracking-wider">
                    Hook
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-neutral uppercase tracking-wider">
                    Topic
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-neutral uppercase tracking-wider">
                    Layout
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-neutral uppercase tracking-wider">
                    Views
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-neutral uppercase tracking-wider">
                    Likes
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-neutral uppercase tracking-wider">
                    AI Insights
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral/10">
                {selectedCreator?.topVideos.map((video) => (
                  <tr key={video.id}>
                    <td className="px-4 py-3">
                      <a
                        href={video.videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2"
                      >
                        <div className="w-20 h-12 rounded overflow-hidden">
                          <img
                            src={video.thumbnail}
                            alt="Video thumbnail"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </a>
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral">
                      {video.hook}
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral">
                      {video.topic}
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral">
                      {video.layout}
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral">
                      {new Intl.NumberFormat("en-US", {
                        notation: "compact",
                      }).format(video.views)}
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral">
                      {new Intl.NumberFormat("en-US", {
                        notation: "compact",
                      }).format(video.likes)}
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral">
                      <p className="line-clamp-3">{video.aiInsights}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      {/* Payment Modal */}
      <dialog id="payment_modal" className="modal">
        <div className="modal-box bg-base-100 w-11/12 max-w-5xl">
          <h3 className="font-bold text-3xl text-primary text-center mb-8">
            Choose Your Plan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
            {/* Basic Plan */}
            <div className="card bg-gradient-to-br from-base-100 to-info/5 border-2 border-info hover:border-primary transition-all duration-300 hover:shadow-xl">
              <div className="card-body p-8">
                <h2 className="card-title text-2xl text-neutral mb-2">
                  Basic Plan
                </h2>
                <p className="text-5xl font-bold text-primary mb-6">$3</p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Check className="w-6 h-6 text-success" />
                    <span className="text-neutral/80 text-lg">
                      Unlimited competitor analysis
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-6 h-6 text-success" />
                    <span className="text-neutral/80 text-lg">
                      Basic metrics
                    </span>
                  </li>
                </ul>
                <div className="card-actions justify-center mt-8">
                  <button className="btn btn-info btn-lg w-full text-white gap-3 hover:shadow-lg transition-all duration-300">
                    <CreditCard className="w-6 h-6" />
                    Pay $3
                  </button>
                </div>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="card bg-gradient-to-br from-base-100 to-primary/5 border-2 border-primary relative transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="badge badge-primary py-3 px-4 text-lg font-semibold shadow-lg">
                  RECOMMENDED
                </div>
              </div>
              <div className="card-body p-8">
                <h2 className="card-title text-2xl text-neutral mb-2">
                  Premium Plan
                </h2>
                <p className="text-5xl font-bold text-primary mb-6">$5</p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Check className="w-6 h-6 text-success" />
                    <span className="text-neutral/80 text-lg">
                      Everything in Basic
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-6 h-6 text-success" />
                    <span className="text-neutral/80 text-lg">
                      AI Recommendations
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-6 h-6 text-success" />
                    <span className="text-neutral/80 text-lg">
                      Advanced Analytics
                    </span>
                  </li>
                </ul>
                <div className="card-actions justify-center mt-8">
                  <button className="btn btn-primary btn-lg w-full gap-3 hover:shadow-lg transition-all duration-300">
                    <CreditCard className="w-6 h-6" />
                    Pay $5
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-8">
            <p className="text-base text-neutral/60 mb-4">
              Secure payment powered by Stripe
            </p>
            <form method="dialog">
              <button className="btn btn-ghost btn-sm">Close</button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      {/* Payment Section below table */}
      <div className="text-center mt-8 py-12 bg-gradient-to-r from-base-100 via-info/5 to-base-100 rounded-lg border border-neutral/10">
        <h3 className="text-2xl font-bold text-primary mb-3">
          Want to see more results?
        </h3>
        <p className="text-neutral/80 text-lg mb-6">
          Unlock unlimited competitor analysis starting from $3!
        </p>
        <button
          className="btn btn-primary btn-lg gap-3 hover:shadow-lg transition-all duration-300"
          onClick={() => {
            const modal = document.getElementById(
              "payment_modal"
            ) as HTMLDialogElement;
            modal?.showModal();
          }}
        >
          <CreditCard className="w-6 h-6" />
          View Pricing Options
        </button>
      </div>
    </section>
  );
}
