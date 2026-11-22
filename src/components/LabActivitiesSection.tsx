import { useState } from 'react';
import { Maximize2, Play, VolumeX } from 'lucide-react';
import { LED_DEMONSTRATIONS, LED_EXPERIMENT_CONTENT } from '../data/portfolioData';
import {
  HardwareTechnicalIllustrations,
  InteractiveSignalFlowDiagram,
} from './ArduinoIllustrations';
import { VideoModal } from './VideoModal';

export function LabActivitiesSection() {
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [inlinePlayingId, setInlinePlayingId] = useState<string | null>(null);

  return (
    <section
      id="lab-activities"
      className="border-t border-[#E6DAC4] bg-[#FFFDF8] py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Heading & Introduction */}
        <div className="max-w-3xl">
          <div className="text-xs font-medium text-[#92400E]">
            Coursework Documentation · Hands-On Hardware Lab
          </div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#241C16] sm:text-4xl text-balance">
            {LED_EXPERIMENT_CONTENT.sectionTitle}
          </h2>
          <p className="mt-4 text-base text-[#57493E] leading-relaxed">
            {LED_EXPERIMENT_CONTENT.sectionIntro}
          </p>
        </div>

        {/* Experiment 01 Header */}
        <div className="mt-12 rounded-2xl border border-[#E6DAC4] bg-[#F7F0E1] p-6 sm:p-8">
          <div className="text-xs font-medium text-[#6C5B4D]">
            Category: {LED_EXPERIMENT_CONTENT.category}
          </div>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-[#241C16] sm:text-2xl text-balance">
            {LED_EXPERIMENT_CONTENT.experimentTitle}
          </h3>

          {/* Objective & Working Principle Grid */}
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* Objective */}
            <div className="rounded-xl border border-[#E6DAC4] bg-[#FFFDF8] p-6 lg:col-span-5">
              <h4 className="text-base font-semibold text-[#241C16]">Objective</h4>
              <p className="mt-2.5 text-sm text-[#57493E] leading-relaxed">
                {LED_EXPERIMENT_CONTENT.objective}
              </p>

              <div className="mt-6 border-t border-[#EFE6D5] pt-5">
                <h5 className="text-sm font-semibold text-[#241C16]">Components Used</h5>
                <ul className="mt-3 space-y-2.5">
                  {LED_EXPERIMENT_CONTENT.componentsUsed.map((component) => (
                    <li
                      key={component.name}
                      className="flex flex-col text-sm sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                    >
                      <span className="font-medium text-[#241C16] shrink-0">{component.name}</span>
                      <span className="text-xs text-[#6C5B4D] sm:text-right">{component.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Working Principle & Patterns Demonstrated */}
            <div className="rounded-xl border border-[#E6DAC4] bg-[#FFFDF8] p-6 lg:col-span-7">
              <h4 className="text-base font-semibold text-[#241C16]">Working Principle</h4>
              <div className="mt-2.5 space-y-2 text-sm text-[#57493E] leading-relaxed">
                {LED_EXPERIMENT_CONTENT.workingPrinciple.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>

              <div className="mt-6 border-t border-[#EFE6D5] pt-5">
                <h4 className="text-base font-semibold text-[#241C16]">Patterns Demonstrated</h4>
                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {LED_EXPERIMENT_CONTENT.patternsDemonstrated.map((pattern, index) => (
                    <div
                      key={pattern.name}
                      className="rounded-lg border border-[#E6DAC4] bg-[#FAF5EA] p-3.5"
                    >
                      <div className="font-mono text-xs text-[#92400E] tabular-nums">
                        0{index + 1}
                      </div>
                      <div className="mt-1 text-sm font-semibold text-[#241C16]">
                        {pattern.name}
                      </div>
                      <p className="mt-1 text-xs text-[#57493E] leading-relaxed">
                        {pattern.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-lg border border-amber-300/70 bg-amber-50/70 p-4 text-xs text-[#4A3B30] leading-relaxed">
                  <p className="font-medium text-[#241C16]">
                    Recorded Sketch Note: {LED_EXPERIMENT_CONTENT.codeDemoNote}
                  </p>
                  <p className="mt-1 text-[#5E4E41]">{LED_EXPERIMENT_CONTENT.scopeNote}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Working Diagram: Arduino -> Digital Output -> LED Patterns */}
          <div className="mt-6">
            <InteractiveSignalFlowDiagram />
          </div>

          {/* Technical Hardware Illustrations */}
          <div className="mt-6">
            <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
              <h4 className="text-base font-semibold text-[#241C16]">
                Hardware Schematic Reference
              </h4>
              <span className="text-xs text-[#6C5B4D]">
                Arduino UNO · Four LEDs · Breadboard Layout
              </span>
            </div>
            <HardwareTechnicalIllustrations />
          </div>
        </div>

        {/* Video Gallery: Five Original Laboratory Demonstration Videos */}
        <div id="led-video-gallery" className="mt-14">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between border-b border-[#E6DAC4] pb-5">
            <div>
              <div className="text-xs font-medium text-[#92400E]">
                Practical Participation Evidence · Five Original Recordings
              </div>
              <h3 className="mt-1 text-2xl font-bold tracking-tight text-[#241C16]">
                Laboratory Demonstration Video Gallery
              </h3>
              <p className="mt-1.5 text-sm text-[#57493E] max-w-2xl">
                Different recorded demonstrations of the Arduino LED blinking and sequencing activity. Play inline or open any recording individually with full playback controls.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-xs text-[#5E4E41] shrink-0">
              <VolumeX className="h-4 w-4 text-[#6C5B4D]" />
              <span>Background audio removed from all 5 videos</span>
            </div>
          </div>

          {/* Responsive Video Grid */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {LED_DEMONSTRATIONS.map((video, index) => {
              const isInlinePlaying = inlinePlayingId === video.id;
              return (
                <article
                  key={video.id}
                  className="flex flex-col overflow-hidden rounded-xl border border-[#E6DAC4] bg-[#FFFDF8] transition-shadow hover:shadow-md"
                >
                  {/* Uncropped Video / Thumbnail Container */}
                  <div className="relative aspect-[4/3] w-full bg-[#1C1611] overflow-hidden">
                    {isInlinePlaying ? (
                      <video
                        src={video.videoSrc}
                        poster={video.thumbSrc}
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
                          src={video.thumbSrc}
                          alt={`${video.label} — Arduino UNO LED blinking breadboard circuit`}
                          referrerPolicy="no-referrer"
                          className="h-full w-full object-contain"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                        <button
                          type="button"
                          onClick={() => setInlinePlayingId(video.id)}
                          aria-label={`Play ${video.label} inline`}
                          className="absolute inset-0 flex items-center justify-center group cursor-pointer"
                        >
                          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFFDF8]/95 text-[#241C16] shadow-lg transition-transform duration-150 group-hover:scale-105">
                            <Play className="h-5 w-5 fill-current ml-0.5" />
                          </span>
                        </button>
                        <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                          <span className="inline-flex items-center gap-1 font-mono text-[11px] bg-black/60 px-2 py-0.5 rounded">
                            <VolumeX className="h-3 w-3" />
                            Silent
                          </span>
                          <span className="font-mono text-[11px] tabular-nums bg-black/60 px-2 py-0.5 rounded">
                            {video.duration}
                          </span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Card Details & Actions */}
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-base font-semibold text-[#241C16]">{video.label}</h4>
                        <span className="font-mono text-xs text-[#6C5B4D] tabular-nums">
                          {video.duration}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-[#57493E] leading-relaxed">
                        {video.caption}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-3 border-t border-[#EFE6D5] pt-4">
                      <button
                        type="button"
                        onClick={() =>
                          setInlinePlayingId(isInlinePlaying ? null : video.id)
                        }
                        className="text-xs font-semibold text-[#92400E] hover:text-[#78350F] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                      >
                        {isInlinePlaying ? 'Show Thumbnail' : 'Play Inline'}
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setInlinePlayingId(null);
                          setModalIndex(index);
                        }}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-[#E6DAC4] bg-[#FAF5EA] px-3 py-1.5 text-xs font-medium text-[#3B2E24] hover:bg-[#EFE5D1] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                      >
                        <Maximize2 className="h-3.5 w-3.5" />
                        Open Player
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* What I Learned & Key Takeaway */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="rounded-2xl border border-[#E6DAC4] bg-[#F7F0E1] p-6 sm:p-7 lg:col-span-7">
            <h3 className="text-lg font-bold text-[#241C16]">What I Learned</h3>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {LED_EXPERIMENT_CONTENT.whatILearned.map((outcome, idx) => (
                <li
                  key={outcome}
                  className="flex items-start gap-3 rounded-lg border border-[#E6DAC4] bg-[#FFFDF8] p-3.5 text-sm text-[#3B2E24]"
                >
                  <span className="font-mono text-xs font-semibold text-[#92400E] tabular-nums mt-0.5">
                    0{idx + 1}
                  </span>
                  <span className="leading-snug">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-[#3F2E21] bg-[#2C2017] p-6 sm:p-7 text-white lg:col-span-5">
            <div>
              <div className="text-xs font-medium text-amber-300">
                Faculty Evaluation Summary
              </div>
              <h3 className="mt-2 text-xl font-bold tracking-tight text-white">
                Key Takeaway
              </h3>
              <p className="mt-4 text-sm text-amber-50/90 leading-relaxed">
                {LED_EXPERIMENT_CONTENT.keyTakeaway}
              </p>
            </div>
            <div className="mt-6 border-t border-[#473426] pt-4 text-xs text-amber-200/70">
              Muskan Jaiswal · Experiment 01 · Arduino UNO LED Interfacing
            </div>
          </div>
        </div>
      </div>

      {/* Individual Video Modal */}
      <VideoModal
        videos={LED_DEMONSTRATIONS}
        activeIndex={modalIndex}
        onClose={() => setModalIndex(null)}
        onSelectIndex={(idx) => setModalIndex(idx)}
      />
    </section>
  );
}
