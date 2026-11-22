import { useState } from 'react';
import { ArrowDownRight, Menu, Play, VolumeX, X } from 'lucide-react';
import {
  ADDITIONAL_MODULES,
  FINAL_PROJECT,
  type CourseModule,
} from './data/portfolioData';
import { LabActivitiesSection } from './components/LabActivitiesSection';

type ModuleFilter = 'All' | 'Sensors & Analog' | 'App & IoT';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moduleFilter, setModuleFilter] = useState<ModuleFilter>('All');
  const [activeModuleVideo, setActiveModuleVideo] = useState<string | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; caption: string } | null>(
    null
  );

  const filteredModules: CourseModule[] =
    moduleFilter === 'All'
      ? ADDITIONAL_MODULES
      : ADDITIONAL_MODULES.filter((mod) => mod.category === moduleFilter);

  const navItems = [
    { label: 'Overview', href: '#overview' },
    { label: 'Lab Activities', href: '#lab-activities' },
    { label: 'Experiments', href: '#experiments' },
    { label: 'Working Model', href: '#working-model' },
    { label: 'Takeaways', href: '#takeaways' },
  ];

  return (
    <div className="min-h-screen bg-[#FAF5EA] text-[#241C16]">
      {/* Sticky 3-Zone Top Bar */}
      <header className="sticky top-0 z-40 border-b border-[#E6DAC4] bg-[#FFFDF8]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-3.5">
          {/* Zone 1: Single-line Brand Wordmark */}
          <a
            href="#overview"
            className="text-lg font-bold tracking-tight text-[#241C16] whitespace-nowrap shrink-0"
          >
            Muskan Jaiswal
          </a>

          {/* Zone 2: Concise single-line navigation links */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-6 text-sm font-medium text-[#5E4E41]"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-[#241C16] transition-colors whitespace-nowrap shrink-0"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Single Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#led-video-gallery"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-[#92400E] px-4 py-2 text-xs font-semibold text-white hover:bg-[#78350F] transition-colors whitespace-nowrap shrink-0"
            >
              Watch Lab Demos
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#E6DAC4] text-[#4A3B30] md:hidden cursor-pointer"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="border-t border-[#E6DAC4] bg-[#FFFDF8] px-6 py-4 md:hidden"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1.5 text-sm font-medium text-[#4A3B30] hover:text-[#241C16]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#led-video-gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-1 inline-flex items-center justify-center rounded-lg bg-[#92400E] px-4 py-2.5 text-xs font-semibold text-white"
              >
                Watch Lab Demos
              </a>
            </div>
          </nav>
        )}
      </header>

      <main>
        {/* Hero / Portfolio Overview */}
        <section id="overview" className="mx-auto max-w-6xl px-6 py-14 lg:py-20">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12">
            <div className="flex flex-col justify-between lg:col-span-6">
              <div>
                <div className="text-xs font-medium text-[#92400E]">
                  Engineering Exploration E-Portfolio · First-Year Showcase
                </div>
                <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#241C16] sm:text-5xl text-balance leading-[1.1]">
                  From Breadboard Logic to Real-World Arduino Systems
                </h1>
                <p className="mt-5 text-base text-[#57493E] leading-relaxed max-w-xl">
                  I am <strong className="font-semibold text-[#241C16]">Muskan Jaiswal</strong>. This
                  portfolio documents the practical knowledge I gained during my Engineering
                  Exploration Lab experiments—from foundational digital pin interfacing and sensor
                  telemetry to app-controlled IoT circuits—culminating in an Arduino-UNO based
                  working model project.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#lab-activities"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#2C2119] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1E1610] transition-colors whitespace-nowrap shrink-0"
                >
                  Explore Lab Activities
                  <ArrowDownRight className="h-4 w-4" />
                </a>
                <a
                  href="#working-model"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#DECFAF] bg-[#FFFDF8] px-5 py-2.5 text-sm font-semibold text-[#3B2E24] hover:bg-[#F3EBD8] transition-colors whitespace-nowrap shrink-0"
                >
                  View Working Model
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-full min-h-[280px] overflow-hidden rounded-2xl border border-[#E6DAC4] bg-[#241C16]">
                <img
                  src={FINAL_PROJECT.teamPhoto}
                  alt="Muskan Jaiswal and her engineering team presenting their Arduino-UNO working model"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-center lg:h-full"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5">
                  <div className="text-xs font-medium text-amber-300">
                    Engineering Exploration Lab Team
                  </div>
                  <p className="mt-0.5 text-sm text-white">
                    Muskan Jaiswal &amp; project team demonstrating the Arduino-UNO working prototype.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 4-Column Summary Strip below hero split */}
          <div className="mt-10 grid grid-cols-2 gap-4 border-t border-[#E6DAC4] pt-8 md:grid-cols-4">
            <div>
              <div className="font-mono text-2xl font-bold text-[#241C16] tabular-nums">05</div>
              <div className="mt-1 text-xs text-[#5E4E41]">Silent LED Lab Recordings</div>
            </div>
            <div>
              <div className="font-mono text-2xl font-bold text-[#241C16] tabular-nums">04</div>
              <div className="mt-1 text-xs text-[#5E4E41]">Core Hardware &amp; IoT Modules</div>
            </div>
            <div>
              <div className="font-mono text-2xl font-bold text-[#241C16] tabular-nums">
                Arduino UNO
              </div>
              <div className="mt-1 text-xs text-[#5E4E41]">Primary Microcontroller Platform</div>
            </div>
            <div>
              <div className="font-mono text-2xl font-bold text-[#241C16] tabular-nums">500 ms</div>
              <div className="mt-1 text-xs text-[#5E4E41]">Recorded Pair-Blink Timing Demo</div>
            </div>
          </div>
        </section>

        {/* Requested New Section: ENGINEERING EXPLORATION – LABORATORY ACTIVITIES */}
        <LabActivitiesSection />

        {/* Additional Course Experiments */}
        <section id="experiments" className="border-t border-[#E6DAC4] bg-[#F5EFE0] py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <div className="text-xs font-medium text-[#92400E]">
                  Continued Lab Progression
                </div>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#241C16] text-balance">
                  Additional Laboratory Experiments &amp; Software Builds
                </h2>
                <p className="mt-3 text-sm text-[#57493E] leading-relaxed">
                  Following the LED interfacing foundation, our coursework expanded into analog
                  voltage sensing, ultrasonic distance measurement, mobile app logic, and cloud IoT
                  telemetry.
                </p>
              </div>

              {/* Functional Filter Control */}
              <div className="flex items-center gap-1 self-start rounded-lg bg-[#E9DFCA] p-1 shrink-0">
                {(['All', 'Sensors & Analog', 'App & IoT'] as ModuleFilter[]).map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setModuleFilter(filter)}
                    className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      moduleFilter === filter
                        ? 'bg-[#FFFDF8] text-[#241C16] shadow-xs'
                        : 'text-[#5E4E41] hover:text-[#241C16]'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8">
              {filteredModules.map((mod) => {
                const isPlaying = activeModuleVideo === mod.id;
                return (
                  <article
                    key={mod.id}
                    className="grid grid-cols-1 gap-6 rounded-2xl border border-[#E6DAC4] bg-[#FFFDF8] p-6 lg:grid-cols-12"
                  >
                    {/* Silent Lab Recording */}
                    <div className="lg:col-span-5">
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#1C1611]">
                        {isPlaying && mod.videoSrc ? (
                          <video
                            src={mod.videoSrc}
                            poster={mod.thumbSrc}
                            controls
                            autoPlay
                            muted
                            playsInline
                            controlsList="nodownload"
                            className="h-full w-full object-contain"
                          />
                        ) : (
                          <>
                            <img
                              src={mod.thumbSrc}
                              alt={mod.title}
                              referrerPolicy="no-referrer"
                              className="h-full w-full object-contain"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                            <button
                              type="button"
                              onClick={() => setActiveModuleVideo(mod.id)}
                              aria-label={`Play ${mod.title} recording`}
                              className="absolute inset-0 flex items-center justify-center group cursor-pointer"
                            >
                              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFFDF8]/95 text-[#241C16] shadow-lg transition-transform duration-150 group-hover:scale-105">
                                <Play className="h-5 w-5 fill-current ml-0.5" />
                              </span>
                            </button>
                            <div className="pointer-events-none absolute bottom-3 left-3 inline-flex items-center gap-1 rounded bg-black/60 px-2 py-0.5 font-mono text-[11px] text-white">
                              <VolumeX className="h-3 w-3" />
                              Silent Lab Recording
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Description & Evidence Photos */}
                    <div className="flex flex-col justify-between lg:col-span-7">
                      <div>
                        <div className="text-xs font-medium text-[#6C5B4D]">
                          Module {mod.number} · {mod.categoryLabel}
                        </div>
                        <h3 className="mt-1.5 text-xl font-bold text-[#241C16]">{mod.title}</h3>
                        <p className="mt-2.5 text-sm text-[#57493E] leading-relaxed">{mod.summary}</p>
                        <ul className="mt-4 space-y-1.5 text-sm text-[#3B2E24]">
                          {mod.highlights.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span className="text-[#92400E] font-semibold">—</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Supporting Lab Images */}
                      <div className="mt-5 border-t border-[#EFE6D5] pt-4">
                        <div className="text-xs font-medium text-[#6C5B4D]">
                          Circuit &amp; Code Documentation (Click to Enlarge)
                        </div>
                        <div className="mt-2.5 grid grid-cols-3 gap-3">
                          {mod.secondaryImages.map((img) => (
                            <button
                              key={img.src}
                              type="button"
                              onClick={() => setLightboxImage(img)}
                              className="group relative aspect-video overflow-hidden rounded-lg border border-[#E6DAC4] bg-[#F5EFE0] cursor-pointer"
                            >
                              <img
                                src={img.src}
                                alt={img.caption}
                                referrerPolicy="no-referrer"
                                className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Culminating Working Model Project */}
        <section id="working-model" className="border-t border-[#E6DAC4] bg-[#FAF5EA] py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <div className="h-full overflow-hidden rounded-2xl border border-[#E6DAC4] bg-[#F3EBD8]">
                  <img
                    src={FINAL_PROJECT.modelPhoto}
                    alt="Working physical Arduino-UNO rain-sensing and garden protection model"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-between lg:col-span-6">
                <div>
                  <div className="text-xs font-medium text-[#92400E]">
                    {FINAL_PROJECT.subtitle}
                  </div>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#241C16] text-balance">
                    {FINAL_PROJECT.title}
                  </h2>
                  <p className="mt-4 text-sm text-[#57493E] leading-relaxed sm:text-base">
                    {FINAL_PROJECT.description}
                  </p>

                  <div className="mt-6">
                    <h3 className="text-sm font-semibold text-[#241C16]">
                      Integrated Hardware Subsystems
                    </h3>
                    <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {FINAL_PROJECT.components.map((comp) => (
                        <li
                          key={comp}
                          className="rounded-lg border border-[#E6DAC4] bg-[#FFFDF8] px-3.5 py-2.5 text-xs font-medium text-[#3B2E24]"
                        >
                          {comp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-4 border-t border-[#E6DAC4] pt-5">
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxImage({
                        src: FINAL_PROJECT.codePhoto,
                        caption: 'Automated Moisture & Pump Relay Control Sketch (sketch_nov18a)',
                      })
                    }
                    className="inline-flex items-center gap-2 rounded-lg border border-[#DECFAF] bg-[#FFFDF8] px-4 py-2 text-xs font-semibold text-[#3B2E24] hover:bg-[#F3EBD8] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    Inspect Sensor Control Sketch
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxImage({
                        src: FINAL_PROJECT.modelPhoto,
                        caption: FINAL_PROJECT.title,
                      })
                    }
                    className="inline-flex items-center gap-2 rounded-lg bg-[#92400E] px-4 py-2 text-xs font-semibold text-white hover:bg-[#78350F] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    View Full Model Photo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Quiet Academic Footer */}
      <footer id="takeaways" className="border-t border-[#E6DAC4] bg-[#F3EBD8] py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 sm:flex-row sm:items-center">
          <div>
            <div className="text-sm font-semibold text-[#241C16]">Muskan Jaiswal</div>
            <p className="mt-0.5 text-xs text-[#5E4E41]">
              Engineering Exploration Lab E-Portfolio · Arduino UNO &amp; Embedded Systems Coursework
            </p>
          </div>
          <div className="flex items-center gap-5 text-xs font-medium text-[#4A3B30]">
            <a href="#overview" className="hover:text-[#241C16]">
              Overview
            </a>
            <a href="#lab-activities" className="hover:text-[#241C16]">
              Lab Activities
            </a>
            <a href="#working-model" className="hover:text-[#241C16]">
              Working Model
            </a>
          </div>
        </div>
      </footer>

      {/* Image Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/90 p-4 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-4xl overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-zinc-800 px-5 py-3">
              <p className="text-sm font-medium text-zinc-100">{lightboxImage.caption}</p>
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                aria-label="Close image preview"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="bg-black p-3">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.caption}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
