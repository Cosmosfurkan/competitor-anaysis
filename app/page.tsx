import CompetitorAnalysisSection from "@/components/competitor-analysis/competitor-analysis-section";
import {
  BookOpen,
  HelpCircle,
  Rocket,
  ArrowRight,
  Brain,
  PieChart,
} from "lucide-react";

export default async function Home() {
  return (
    <>
      <CompetitorAnalysisSection />

      {/* Authentication Section */}

      {/* Bottom Section */}
      <section className="bg-base text-neutral text-sm">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* How to Use Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <h3 className="text-neutral font-bold text-3xl">How to Use</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[base-100] text-xl">
                    1
                  </span>
                  <p className="text-xl">
                    Select your target platform (Instagram, TikTok, or YouTube)
                    to focus your research.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-neutral text-xl">
                    2
                  </span>
                  <p className="text-xl">
                    Use the search bar to find specific creators or content
                    types you're interested in analyzing.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-neutral text-xl">
                    3
                  </span>
                  <p className="text-xl">
                    Review detailed analytics and insights in the data table,
                    including engagement rates and content performance.
                  </p>
                </div>
              </div>
            </div>

            {/* Future Features Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Rocket className="w-5 h-5 text-blue-600" />
                <h3 className="text-neutral font-bold text-3xl">
                  Future Features
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="font-medium text-neutral text-xl">
                      AI Content Recommendations
                    </p>
                    <p className="text-neutral/80 text-lg">
                      Personalized content suggestions based on your niche.
                    </p>
                    <p className="text-base text-neutral/80 mt-1">
                      Coming Q2 2024
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <PieChart className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="font-medium text-neutral text-xl">
                      Advanced Analytics
                    </p>
                    <p className="text-neutral/80 text-lg">
                      Comprehensive performance metrics with custom reporting.
                    </p>
                    <p className="text-base text-neutral/80 mt-1">
                      Coming Q3 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <HelpCircle className="w-5 h-5 text-blue-600" />
                <h3 className="text-neutral font-bold text-3xl">FAQ</h3>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="font-medium text-neutral text-xl">
                    How accurate is the analysis?
                  </p>
                  <p className="text-neutral/80 text-lg">
                    Our analysis is based on real-time data with 98% accuracy.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 text-lg"
                  >
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-neutral text-xl">
                    What's included in premium?
                  </p>
                  <p className="text-neutral/80 text-lg">
                    Premium includes unlimited analysis and AI recommendations.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 text-lg"
                  >
                    View pricing <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#f4fcff] text-neutral">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-primary">Rival Research</h4>
              <p className="text-sm">
                Your ultimate platform for competitor analysis and content
                strategy.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white">
                  Twitter
                </a>
                <a href="#" className="hover:text-white">
                  LinkedIn
                </a>
                <a href="#" className="hover:text-white">
                  GitHub
                </a>
              </div>
            </div>

            {/* Product */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-primary">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-primary">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-primary">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            <p>
              © {new Date().getFullYear()} Rival Research. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
