"use client";

import { useState, useEffect } from "react";
import HeaderFn from "./components/header";
import FooterFn from "./components/footer";
import InteractiveLogo from "./components/interactive-logo";
import PageLoader from "./components/page-loader";
import Image from "next/image";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white text-gray-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      <PageLoader />

      <div
        className={`content-wrapper ${isLoaded ? 'loaded' : ''}`}
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.8s ease-in',
        }}
      >
        <HeaderFn />

        <main className="flex flex-col">
          {/* SLIDE 1: TITLE / HERO */}
          <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-white">
            <div className="absolute top-0 right-0 w-2/3 h-full bg-orange-50/50 -skew-x-12 translate-x-1/3 z-0"></div>

            <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div className="space-y-8">
                <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-semibold text-sm tracking-wide uppercase">
                  Operational Strategy
                </div>
                <h1 className="text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-gray-900">
                  Improving <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                    Driver Output
                  </span>
                </h1>
                <p className="text-2xl text-gray-600 leading-relaxed max-w-lg">
                  Through Operational Efficiency Enhancements.
                </p>
                <div className="pt-4">
                  <p className="text-lg text-gray-500 border-l-4 border-orange-500 pl-6 italic">
                    &quot;Identifying and removing inefficiencies, then reallocating tasks to the teams best positioned to perform them efficiently.&quot;
                  </p>
                </div>
                <div className="pt-8">
                  <a href="#inefficiencies" className="inline-flex items-center text-lg font-bold text-orange-600 hover:text-orange-700 transition-colors group">
                    Explore the Analysis
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </a>
                </div>
              </div>

              <div className="h-[500px] flex items-center justify-center relative">
                {/* Interactive Logo replaces the 3D Cube */}
                <InteractiveLogo />
              </div>
            </div>
          </section>

          {/* SLIDE 2: THE PROBLEM (CURRENT STATE) */}
          <section id="inefficiencies" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Current State Analysis</h2>
                <div className="w-24 h-1.5 bg-orange-500 rounded-full"></div>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Left: Key Inefficiencies List */}
                <div className="bg-white rounded-3xl p-10 shadow-xl shadow-gray-200/50 border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                    <span className="w-10 h-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mr-4 text-xl">⚠️</span>
                    Identified Friction Points
                  </h3>
                  <div className="space-y-6">
                    {[
                      "Power jack tracking is inconsistent & time consuming",
                      "End-of-day pallet removal bottlenecks drivers",
                      "Unnecessary walking time for paperwork retrieval",
                      "Driver skills underutilized on warehouse tasks"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start">
                        <div className="w-6 h-6 mt-1 mr-4 flex-shrink-0 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-xs font-bold">
                          {i + 1}
                        </div>
                        <p className="text-lg text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 rounded-xl overflow-hidden relative h-48 w-full">
                    <Image
                      src="/images/content-image.jpg"
                      alt="Warehouse Operations"
                      fill
                      className="object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                      <p className="text-white font-medium">Operational bottlenecks impact daily output.</p>
                    </div>
                  </div>
                </div>

                {/* Right: Time Waste Data Visualization */}
                <div className="space-y-10">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Time Waste Breakdown</h3>
                    <p className="text-gray-500">Average minutes lost per driver, per day.</p>
                  </div>

                  <div className="space-y-8">
                    {/* Metric 1 */}
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold text-gray-700">Morning Paperwork</span>
                        <span className="font-bold text-orange-600">15 mins</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                        <div className="bg-orange-400 h-4 rounded-full" style={{ width: '25%' }}></div>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">Congestion & confusion</p>
                    </div>

                    {/* Metric 2 */}
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold text-gray-700">Jack Retrieval</span>
                        <span className="font-bold text-orange-600">10 mins</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                        <div className="bg-orange-400 h-4 rounded-full" style={{ width: '18%' }}></div>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">Searching & sign-in</p>
                    </div>

                    {/* Metric 3 */}
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold text-gray-700">End-of-Day Tasks</span>
                        <span className="font-bold text-orange-600">45 mins</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                        <div className="bg-orange-500 h-4 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">Pallet removal & jack return</p>
                    </div>

                    <div className="pt-6 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-gray-900">Total Daily Loss</span>
                        <span className="text-3xl font-extrabold text-red-500">~70 mins</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SLIDE 3: THE STRATEGY (SOLUTIONS) */}
          <section id="solutions" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Proposed Strategy</h2>
                <p className="text-xl text-gray-600">
                  Four targeted interventions to reclaim lost time and streamline operations.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: "📋",
                    title: "Paperwork Delivery",
                    desc: "Warehouse staff place paperwork folders directly in truck cabs.",
                    result: "Faster morning departures."
                  },
                  {
                    icon: "🔧",
                    title: "Jack Assignmentt",
                    desc: "Warehouse assigns specific power jacks to each route daily.",
                    result: "Eliminates search time."
                  },
                  {
                    icon: "📦",
                    title: "Warehouse Pallet Removal",
                    desc: "Shift end-of-day pallet removal tasks to warehouse team.",
                    result: "Saves 20-25 mins/driver."
                  },
                  {
                    icon: "📊",
                    title: "Standardized Staging",
                    desc: "Standardize dry pallet building by stop order.",
                    result: "Faster unloading at stores."
                  }
                ].map((sol, i) => (
                  <div key={i} className="group p-8 rounded-3xl border border-gray-100 bg-white hover:bg-orange-50/50 hover:border-orange-200 transition-all duration-300 shadow-sm hover:shadow-xl">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                        {sol.icon}
                      </div>
                      <span className="text-orange-200 font-black text-5xl opacity-20 group-hover:opacity-40 transition-opacity">0{i + 1}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{sol.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{sol.desc}</p>
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 group-hover:bg-white group-hover:border-orange-100 transition-colors">
                      <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">Impact</span>
                      <p className="text-gray-800 font-medium mt-1">{sol.result}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SLIDE 4: ROI (THE NUMBERS) */}
          <section id="impact" className="py-24 bg-gray-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-600/10 blur-3xl rounded-full translate-x-1/3"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-orange-500 font-bold tracking-widest uppercase mb-4">Projected ROI</h2>
                  <div className="text-8xl lg:text-9xl font-black text-white mb-2 tracking-tighter">
                    90<span className="text-4xl lg:text-5xl text-gray-400 font-bold ml-2">min</span>
                  </div>
                  <p className="text-3xl font-light text-gray-300 mb-12">
                    Saved per driver, <span className="text-white font-semibold">every single day.</span>
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex-1">
                      <div className="text-3xl mb-2">📈</div>
                      <div className="font-bold text-lg">Higher Output</div>
                      <div className="text-sm text-gray-400">More deliveries, same hours.</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex-1">
                      <div className="text-3xl mb-2">💰</div>
                      <div className="font-bold text-lg">Lower Cost</div>
                      <div className="text-sm text-gray-400">Reduced cost per delivery.</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white text-gray-900 rounded-3xl p-10 shadow-2xl">
                  <h3 className="text-2xl font-bold mb-8">The Trade-off</h3>

                    <div className="space-y-8">
                      <div className="flex items-center justify-around w-full gap-6">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">Drivers</div>
                        <div className="flex flex-col items-center text-center">
                          <div className="text-3xl font-bold text-green-600">+60-90 min</div>
                          <div className="text-gray-500">Road time gained</div>
                        </div>
                      </div>

                      <div className="h-px bg-gray-200 w-full"></div>

                      <div className="flex items-center justify-around w-full gap-6">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">Warehouse</div>
                        <div className="flex flex-col items-center text-center">
                          <div className="text-3xl font-bold text-orange-600">-5-10 min</div>
                          <div className="text-gray-500">Additional task time</div>
                        </div>
                      </div>
                    </div>

                  <div className="mt-10 bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <p className="text-center font-medium text-gray-700">
                      &quot;A massive net positive for the organization with no additional staff required.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SLIDE 5: TAKEAWAYS */}
          <section id="tips" className="py-24 bg-orange-50">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-2">Actionable Takeaways</h2>
                  <p className="text-gray-600">Immediate steps for drivers to support this initiative.</p>
                </div>
                <div className="hidden md:block">
                  <span className="text-orange-300 text-9xl font-black leading-none opacity-20">GO</span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Categorize Intake", text: "Bring product inside organized by category (drinks, dry, frozen)." },
                  { title: "Parallel Check", text: "Enable store staff to check FCL while you handle CDS." },
                  { title: "Smart Staging", text: "Stage items by category for efficient storage." }
                ].map((tip, i) => (
                  <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border-b-4 border-orange-500 hover:-translate-y-1 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{tip.title}</h3>
                    <p className="text-gray-600">{tip.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <FooterFn />
      </div>
    </div>
  );
}
