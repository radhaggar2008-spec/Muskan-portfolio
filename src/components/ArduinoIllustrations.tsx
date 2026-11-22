import { useEffect, useState } from 'react';
import { ArrowRight, Pause, Play } from 'lucide-react';

type PatternMode = 'sequential' | 'alternating' | 'all';

const LED_CONFIGS = [
  { pin: 8, label: 'LED 1', colorName: 'Red', onHex: '#EF4444', glowHex: 'rgba(239, 68, 68, 0.45)', offHex: '#7F1D1D' },
  { pin: 9, label: 'LED 2', colorName: 'Yellow', onHex: '#F59E0B', glowHex: 'rgba(245, 158, 11, 0.45)', offHex: '#78350F' },
  { pin: 10, label: 'LED 3', colorName: 'Red', onHex: '#EF4444', glowHex: 'rgba(239, 68, 68, 0.45)', offHex: '#7F1D1D' },
  { pin: 11, label: 'LED 4', colorName: 'Green', onHex: '#22C55E', glowHex: 'rgba(34, 197, 94, 0.45)', offHex: '#14532D' },
];

export function InteractiveSignalFlowDiagram() {
  const [pattern, setPattern] = useState<PatternMode>('alternating');
  const [step, setStep] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;
    const timer = window.setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 500);
    return () => window.clearInterval(timer);
  }, [isRunning]);

  const getLedState = (index: number): boolean => {
    if (pattern === 'sequential') {
      return step === index;
    }
    if (pattern === 'alternating') {
      // Alternating pairs: (8, 10) vs (9, 11)
      return step % 2 === 0 ? index % 2 === 0 : index % 2 === 1;
    }
    return step % 2 === 0;
  };

  return (
    <div className="rounded-xl border border-[#E6DAC4] bg-[#FFFDF8] p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-[#EFE6D5] pb-4">
        <div>
          <h4 className="text-base font-semibold text-[#241C16]">
            Visual Working Diagram: Signal &amp; Timing Flow
          </h4>
          <p className="mt-1 text-sm text-[#57493E]">
            Interactive 500 ms logic preview mapping digital pins 8, 9, 10, and 11 to breadboard LEDs.
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <div className="flex items-center gap-1 rounded-lg bg-[#EFE6D5] p-1">
            <button
              type="button"
              onClick={() => {
                setPattern('sequential');
                setStep(0);
              }}
              className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                pattern === 'sequential'
                  ? 'bg-[#FFFDF8] text-[#241C16] shadow-xs'
                  : 'text-[#5E4E41] hover:text-[#241C16]'
              }`}
            >
              Sequential
            </button>
            <button
              type="button"
              onClick={() => {
                setPattern('alternating');
                setStep(0);
              }}
              className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                pattern === 'alternating'
                  ? 'bg-[#FFFDF8] text-[#241C16] shadow-xs'
                  : 'text-[#5E4E41] hover:text-[#241C16]'
              }`}
            >
              Alternating
            </button>
            <button
              type="button"
              onClick={() => {
                setPattern('all');
                setStep(0);
              }}
              className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                pattern === 'all'
                  ? 'bg-[#FFFDF8] text-[#241C16] shadow-xs'
                  : 'text-[#5E4E41] hover:text-[#241C16]'
              }`}
            >
              All Blink
            </button>
          </div>
          <button
            type="button"
            onClick={() => setIsRunning((prev) => !prev)}
            aria-label={isRunning ? 'Pause diagram preview' : 'Play diagram preview'}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#E6DAC4] bg-[#FFFDF8] text-[#4A3B30] hover:bg-[#FAF5EA] hover:text-[#241C16] transition-colors cursor-pointer shrink-0"
          >
            {isRunning ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
          </button>
        </div>
      </div>

      {/* Arduino -> Digital Output -> LED Patterns Visual Chain */}
      <div className="mt-6 grid grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1.2fr]">
        {/* Stage 1: Arduino UNO */}
        <div className="rounded-lg border border-[#E6DAC4] bg-[#FAF5EA] p-4">
          <div className="text-xs font-medium text-[#6C5B4D]">Stage 01 · Controller</div>
          <div className="mt-1 text-base font-semibold text-[#241C16]">Arduino UNO</div>
          <p className="mt-1 text-xs text-[#57493E] leading-relaxed">
            Executes uploaded sketch via USB power and sets pin modes to OUTPUT.
          </p>
          <div className="mt-3 font-mono text-[11px] text-[#92400E] bg-amber-50/80 border border-amber-200/80 rounded px-2.5 py-1.5 tabular-nums">
            int led[] = &#123;8, 9, 10, 11&#125;;
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center text-[#A89680]">
          <ArrowRight className="h-5 w-5" />
        </div>

        {/* Stage 2: Digital Output */}
        <div className="rounded-lg border border-[#E6DAC4] bg-[#FAF5EA] p-4">
          <div className="text-xs font-medium text-[#6C5B4D]">Stage 02 · Signal Logic</div>
          <div className="mt-1 text-base font-semibold text-[#241C16]">Digital Output</div>
          <p className="mt-1 text-xs text-[#57493E] leading-relaxed">
            Switches pins between 5V (HIGH) and 0V (LOW) with 500 ms delay intervals.
          </p>
          <div className="mt-3 grid grid-cols-4 gap-1.5 font-mono text-[11px] tabular-nums">
            {LED_CONFIGS.map((led, idx) => {
              const isOn = getLedState(idx);
              return (
                <div
                  key={led.pin}
                  className={`rounded border px-1.5 py-1 text-center transition-colors ${
                    isOn
                      ? 'border-[#92400E] bg-[#92400E] text-white font-semibold'
                      : 'border-[#E6DAC4] bg-[#FFFDF8] text-[#6C5B4D]'
                  }`}
                >
                  D{led.pin}
                  <span className="block text-[9px] font-normal">{isOn ? 'HIGH' : 'LOW'}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center text-[#A89680]">
          <ArrowRight className="h-5 w-5" />
        </div>

        {/* Stage 3: LED Patterns */}
        <div className="rounded-lg border border-[#3F2E21] bg-[#1F1711] p-4 text-white">
          <div className="flex items-center justify-between text-xs text-amber-200/70">
            <span>Stage 03 · Output State</span>
            <span className="font-mono tabular-nums">delay(500)</span>
          </div>
          <div className="mt-1 text-base font-semibold text-white">LED Patterns</div>
          <div className="mt-4 grid grid-cols-4 gap-2">
            {LED_CONFIGS.map((led, idx) => {
              const isOn = getLedState(idx);
              return (
                <div key={led.pin} className="flex flex-col items-center">
                  <div
                    className="h-8 w-8 rounded-full border border-white/15 transition-all duration-150"
                    style={{
                      backgroundColor: isOn ? led.onHex : led.offHex,
                      boxShadow: isOn ? `0 0 16px ${led.glowHex}` : 'none',
                    }}
                  />
                  <span className="mt-2 font-mono text-[10px] text-amber-100 tabular-nums">
                    Pin {led.pin}
                  </span>
                  <span className="text-[10px] text-amber-200/70">{led.colorName}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export function HardwareTechnicalIllustrations() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {/* Illustration 1: Arduino UNO */}
      <div className="rounded-xl border border-[#E6DAC4] bg-[#FFFDF8] p-5">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold text-[#241C16]">Arduino UNO Board</h4>
          <span className="font-mono text-xs text-[#6C5B4D] tabular-nums">5V · Pins 8–11</span>
        </div>
        <div className="mt-4 flex items-center justify-center rounded-lg border border-[#EFE6D5] bg-[#FAF5EA] p-4">
          <svg
            viewBox="0 0 240 150"
            className="h-36 w-full max-w-[230px]"
            role="img"
            aria-label="Technical illustration of an Arduino UNO microcontroller highlighting digital pins 8 to 11 and GND"
          >
            {/* PCB Board */}
            <rect x="24" y="18" width="196" height="114" rx="8" fill="#0F4C81" stroke="#0B355C" strokeWidth="2" />
            {/* USB Port */}
            <rect x="10" y="34" width="28" height="30" rx="2" fill="#CBD5E1" stroke="#64748B" strokeWidth="1.5" />
            <text x="24" y="52" textAnchor="middle" fontSize="7" fill="#334155" fontFamily="monospace">
              USB
            </text>
            {/* Barrel Jack */}
            <rect x="12" y="92" width="26" height="24" rx="2" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
            {/* Digital Header Top */}
            <rect x="70" y="24" width="136" height="14" rx="2" fill="#0F172A" />
            {/* Highlight Pins 8,9,10,11 */}
            <rect x="112" y="25" width="38" height="12" rx="1.5" fill="#1D4ED8" stroke="#93C5FD" strokeWidth="1" />
            <text x="131" y="34" textAnchor="middle" fontSize="7" fill="#FFFFFF" fontFamily="monospace">
              8 9 10 11
            </text>
            <text x="88" y="34" textAnchor="middle" fontSize="6.5" fill="#94A3B8" fontFamily="monospace">
              GND
            </text>
            {/* ATmega328P DIP IC */}
            <rect x="92" y="72" width="96" height="24" rx="2" fill="#1E293B" stroke="#475569" strokeWidth="1" />
            <text x="140" y="87" textAnchor="middle" fontSize="7" fill="#CBD5E1" fontFamily="monospace">
              ATMEGA328P
            </text>
            {/* Board Label */}
            <text x="64" y="64" fontSize="11" fontWeight="bold" fill="#FFFFFF" fontFamily="sans-serif">
              UNO
            </text>
            <circle cx="194" cy="60" r="4" fill="#EF4444" />
            <text x="180" y="62" textAnchor="end" fontSize="6" fill="#E2E8F0" fontFamily="monospace">
              ON
            </text>
            {/* Bottom Power/Analog Headers */}
            <rect x="78" y="112" width="60" height="13" rx="2" fill="#0F172A" />
            <rect x="148" y="112" width="58" height="13" rx="2" fill="#0F172A" />
            <text x="108" y="121" textAnchor="middle" fontSize="6.5" fill="#94A3B8" fontFamily="monospace">
              POWER
            </text>
            <text x="177" y="121" textAnchor="middle" fontSize="6.5" fill="#94A3B8" fontFamily="monospace">
              ANALOG IN
            </text>
          </svg>
        </div>
        <p className="mt-3 text-xs text-[#57493E] leading-relaxed">
          Microcontroller executing <code className="font-mono text-[#241C16]">digitalWrite()</code> instructions on pins 8–11.
        </p>
      </div>

      {/* Illustration 2: Four LEDs */}
      <div className="rounded-xl border border-[#E6DAC4] bg-[#FFFDF8] p-5">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold text-[#241C16]">Four LED Array</h4>
          <span className="font-mono text-xs text-[#6C5B4D] tabular-nums">Anode (+) · Cathode (−)</span>
        </div>
        <div className="mt-4 flex items-center justify-center rounded-lg border border-[#EFE6D5] bg-[#FAF5EA] p-4">
          <svg
            viewBox="0 0 240 150"
            className="h-36 w-full max-w-[230px]"
            role="img"
            aria-label="Technical illustration of four LEDs wired to digital pins 8, 9, 10, and 11 with common ground"
          >
            {[
              { x: 38, color: '#EF4444', rim: '#B91C1C', pin: 'D8' },
              { x: 92, color: '#F59E0B', rim: '#B45309', pin: 'D9' },
              { x: 146, color: '#EF4444', rim: '#B91C1C', pin: 'D10' },
              { x: 200, color: '#22C55E', rim: '#15803D', pin: 'D11' },
            ].map((item) => (
              <g key={item.pin}>
                {/* Glow */}
                <circle cx={item.x} cy="48" r="18" fill={item.color} opacity="0.16" />
                {/* LED Dome */}
                <path
                  d={`M ${item.x - 10} 58 L ${item.x - 10} 44 A 10 10 0 0 1 ${item.x + 10} 44 L ${item.x + 10} 58 Z`}
                  fill={item.color}
                  stroke={item.rim}
                  strokeWidth="1.5"
                />
                {/* LED Base Flange */}
                <rect x={item.x - 13} y="58" width="26" height="5" rx="1.5" fill={item.rim} />
                {/* Anode (+) longer leg */}
                <line x1={item.x - 5} y1="63" x2={item.x - 5} y2="108" stroke="#64748B" strokeWidth="2" />
                {/* Cathode (-) shorter leg */}
                <line x1={item.x + 5} y1="63" x2={item.x + 5} y2="96" stroke="#94A3B8" strokeWidth="2" />
                {/* Labels */}
                <text x={item.x - 5} y="122" textAnchor="middle" fontSize="8.5" fill="#1D4ED8" fontFamily="monospace" fontWeight="bold">
                  {item.pin}
                </text>
                <text x={item.x + 7} y="106" textAnchor="middle" fontSize="7" fill="#64748B" fontFamily="monospace">
                  −
                </text>
              </g>
            ))}
            {/* Common Ground Rail */}
            <line x1="25" y1="134" x2="215" y2="134" stroke="#0F172A" strokeWidth="2" strokeDasharray="4 2" />
            <text x="120" y="145" textAnchor="middle" fontSize="7.5" fill="#475569" fontFamily="monospace">
              COMMON GND RETURN
            </text>
          </svg>
        </div>
        <p className="mt-3 text-xs text-[#57493E] leading-relaxed">
          Four polarized LEDs with anode legs routed to digital pins and cathodes tied to ground.
        </p>
      </div>

      {/* Illustration 3: Breadboard */}
      <div className="rounded-xl border border-[#E6DAC4] bg-[#FFFDF8] p-5">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold text-[#241C16]">Solderless Breadboard</h4>
          <span className="font-mono text-xs text-[#6C5B4D] tabular-nums">Power Rails · Terminal Strips</span>
        </div>
        <div className="mt-4 flex items-center justify-center rounded-lg border border-[#EFE6D5] bg-[#FAF5EA] p-4">
          <svg
            viewBox="0 0 240 150"
            className="h-36 w-full max-w-[230px]"
            role="img"
            aria-label="Technical illustration of a solderless breadboard showing power bus rails and jumper connections"
          >
            {/* Breadboard body */}
            <rect x="16" y="16" width="208" height="118" rx="6" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
            {/* Top ground rail */}
            <line x1="26" y1="28" x2="214" y2="28" stroke="#2563EB" strokeWidth="1.5" />
            {/* Top VCC rail */}
            <line x1="26" y1="36" x2="214" y2="36" stroke="#DC2626" strokeWidth="1.5" />
            {/* Center Dip Channel */}
            <rect x="22" y="70" width="196" height="10" rx="2" fill="#E2E8F0" />
            {/* Pin Grid Dots */}
            {Array.from({ length: 14 }).map((_, col) => {
              const x = 32 + col * 13.5;
              return (
                <g key={col}>
                  <rect x={x - 1.5} y="46" width="3" height="3" fill="#475569" />
                  <rect x={x - 1.5} y="54" width="3" height="3" fill="#475569" />
                  <rect x={x - 1.5} y="62" width="3" height="3" fill="#475569" />
                  <rect x={x - 1.5} y="86" width="3" height="3" fill="#475569" />
                  <rect x={x - 1.5} y="94" width="3" height="3" fill="#475569" />
                  <rect x={x - 1.5} y="102" width="3" height="3" fill="#475569" />
                </g>
              );
            })}
            {/* Jumper wires */}
            <path d="M 59 54 C 59 34, 42 34, 42 28" fill="none" stroke="#18181B" strokeWidth="2" />
            <path d="M 86 86 C 86 112, 86 124, 86 134" fill="none" stroke="#16A34A" strokeWidth="2" />
            <path d="M 113 86 C 113 112, 113 124, 113 134" fill="none" stroke="#DC2626" strokeWidth="2" />
            <path d="M 140 86 C 140 112, 140 124, 140 134" fill="none" stroke="#D97706" strokeWidth="2" />
            <path d="M 167 86 C 167 112, 167 124, 167 134" fill="none" stroke="#EF4444" strokeWidth="2" />
            {/* Bottom rail */}
            <line x1="26" y1="116" x2="214" y2="116" stroke="#2563EB" strokeWidth="1.5" />
            <line x1="26" y1="124" x2="214" y2="124" stroke="#DC2626" strokeWidth="1.5" />
          </svg>
        </div>
        <p className="mt-3 text-xs text-[#57493E] leading-relaxed">
          Organizes 5-pin vertical terminal columns and horizontal ground bus rails for clean prototyping.
        </p>
      </div>
    </div>
  );
}
