import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, VolumeX, X } from 'lucide-react';
import type { LabVideoItem } from '../data/portfolioData';

interface VideoModalProps {
  videos: LabVideoItem[];
  activeIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export function VideoModal({
  videos,
  activeIndex,
  onClose,
  onSelectIndex,
}: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playbackRate, setPlaybackRate] = useState<number>(1);

  const activeVideo = activeIndex !== null ? videos[activeIndex] : null;

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowRight' && activeIndex < videos.length - 1) {
        onSelectIndex(activeIndex + 1);
      } else if (event.key === 'ArrowLeft' && activeIndex > 0) {
        onSelectIndex(activeIndex - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, videos.length, onClose, onSelectIndex]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate, activeIndex]);

  if (activeIndex === null || !activeVideo) return null;

  const hasPrev = activeIndex > 0;
  const hasNext = activeIndex < videos.length - 1;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/90 p-4 sm:p-6 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-video-title"
      onClick={onClose}
    >
      <div
        className="relative flex w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 text-zinc-100 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between gap-4 border-b border-zinc-800 px-5 py-3.5">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <span className="font-mono tabular-nums">
                {String(activeIndex + 1).padStart(2, '0')} / {String(videos.length).padStart(2, '0')}
              </span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1 text-zinc-300">
                <VolumeX className="h-3.5 w-3.5" />
                Silent Lab Video (Audio Removed)
              </span>
            </div>
            <h3 id="modal-video-title" className="mt-0.5 truncate text-base font-semibold text-white">
              {activeVideo.label}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close video player"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Uncropped video viewport */}
        <div className="relative flex items-center justify-center bg-black px-4 py-3">
          <video
            key={activeVideo.videoSrc}
            ref={videoRef}
            src={activeVideo.videoSrc}
            poster={activeVideo.thumbSrc}
            controls
            autoPlay
            muted
            playsInline
            controlsList="nodownload"
            className="max-h-[62vh] w-full object-contain rounded-lg"
          />
        </div>

        {/* Footer controls & caption */}
        <div className="flex flex-col gap-4 border-t border-zinc-800 bg-zinc-950 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl">
            <p className="text-sm text-zinc-200 leading-relaxed">{activeVideo.caption}</p>
            <p className="mt-1 font-mono text-xs text-zinc-400">{activeVideo.observation}</p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <div className="flex items-center gap-1 rounded-lg border border-zinc-800 bg-zinc-900 p-1">
              {[0.5, 1, 1.5].map((rate) => (
                <button
                  key={rate}
                  type="button"
                  onClick={() => setPlaybackRate(rate)}
                  className={`rounded-md px-2 py-1 font-mono text-xs tabular-nums transition-colors cursor-pointer ${
                    playbackRate === rate
                      ? 'bg-[#92400E] text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {rate}x
                </button>
              ))}
            </div>

            <button
              type="button"
              disabled={!hasPrev}
              onClick={() => hasPrev && onSelectIndex(activeIndex - 1)}
              className="inline-flex items-center gap-1 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-xs font-medium text-zinc-200 hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <ChevronLeft className="h-4 w-4" />
              Prev
            </button>
            <button
              type="button"
              disabled={!hasNext}
              onClick={() => hasNext && onSelectIndex(activeIndex + 1)}
              className="inline-flex items-center gap-1 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-xs font-medium text-zinc-200 hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
