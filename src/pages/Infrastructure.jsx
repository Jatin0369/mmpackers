import { useEffect, useRef, useState } from "react";

function Stat({ value, label }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        let start = 0;
        const end = value;
        const duration = 1200;
        const step = Math.max(1, Math.floor(end / 40));

        const timer = setInterval(() => {
          start += step;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(start);
          }
        }, duration / (end / step));

        observer.disconnect();
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-7xl font-semibold leading-none">
        <span className="text-accent">{count}</span>
        <span className="text-black">+</span>
      </div>
      <p className="mt-2 text-sm md:text-base text-black/70">{label}</p>
    </div>
  );
}

export default function Infrastructure() {
  return (
    <>
      {/* INTRO */}
      <section className="bg-white">
                <div
          className="absolute inset-0 pointer-events-none corrugation-pattern"
          aria-hidden="true"
        >
          <svg width="100%" height="100%" preserveAspectRatio="none">
            <defs>
              <pattern
                id="corrugation"
                width="48"
                height="24"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0 12 Q12 0 24 12 T48 12"
                  fill="none"
                  stroke="#8B6B4A"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#corrugation)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-accent" />
                <span className="text-sm uppercase tracking-wide text-black/50">
                  Infrastructure
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
                Built to deliver{" "}
                <span className="text-accent">consistency at scale</span>
              </h1>

              <p className="mt-5 text-base md:text-lg text-black/75 max-w-xl">
                Our manufacturing setup is designed to support dependable,
                repeatable corrugated packaging production across industrial,
                commercial, and export-oriented applications.
              </p>

              <p className="mt-3 text-base md:text-lg text-black/70 max-w-xl">
                From material selection to production flow, infrastructure
                decisions are guided by real-world handling and transport needs.
              </p>
            </div>

            <div className="relative">
              <img
                src="/images/infrastructure/facility-corrugated-packaging.webp"
                alt="Manufacturing facility"
                className="w-full h-[300px] md:h-[380px] object-cover rounded-3xl"
                fetchPriority="high"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-black/5" />
            </div>

          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-beige my-4">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-18">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">

            <Stat value={10} label="Years of experience" />
            <Stat value={50} label="Active customers" />
            <Stat value={100} label="Export-ready consignments" />
            <Stat value={500} label="Bulk orders fulfilled" />

          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
<section className="bg-white">
  <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-28">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

      {/* TEXT */}
      <div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
          Core manufacturing capabilities
        </h2>

        <p className="mt-5 text-base md:text-lg text-black/75 max-w-md">
          Capabilities structured around repeat supply, custom configurations,
          and demanding handling conditions.
        </p>

        <div className="mt-8 space-y-7">
          {[
            [
              "In-house corrugated production",
              "Supports varied box formats, strengths, and application-specific designs.",
            ],
            [
              "Scalable production capacity",
              "Handles steady demand as well as higher-volume requirements.",
            ],
            [
              "Material & board selection",
              "Aligned to load, handling, and transport conditions.",
            ],
            [
              "Export-oriented packaging",
              "Designed for long-distance and international movement.",
            ],
          ].map(([title, desc], i) => (
            <div key={i} className="border-l-2 border-accent pl-5">
              <h3 className="font-medium">{title}</h3>
              <p className="mt-1 text-black/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* BIG IMAGE */}
      <div className="relative">
        <img
          src="/images/infrastructure/factory-corrugated-packaging.webp"
          alt="Manufacturing facility"
          className="w-full h-[320px] md:h-[420px] lg:h-[480px] object-cover rounded-3xl"
            loading="lazy"
          decoding="async"
          fetchPriority="low"
        />
        <div className="absolute inset-0 rounded-3xl ring-1 ring-black/5" />
      </div>

    </div>
  </div>
</section>



      {/* GALLERY */}
      <section className="bg-beige">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-28">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Facility & operations
            </h2>
            <p className="mt-3 text-black/70">
              Visual insights into our production environment, material handling,
              and day-to-day manufacturing operations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              [
                "corrugation-process.webp",
                "corrugation-process"
              ],
              [
                "corrugate-pasting-process.webp",
                "corrugate-pasting-process"
              ],
              [
                "corrugation-cutting-die-process.webp",
                "corrugation-cutting-die-process"
              ],
              [
                "corruagte-box-packing-process.webp",
                "corruagte-box-packing-process"
              ],
            ].map(([image, description]) => (
              <div
                key={image}
                className="h-36 md:h-44 bg-black/5 rounded-xl flex items-center justify-center text-black/40 text-sm"
              >
                <img 
                src={`/images/infrastructure/${image}`} 
                alt={`${description}`} 
                className="w-full h-full object-cover rounded-xl" 
                  loading="lazy"
                  decoding="async"
                  fetchpriority="low"/>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
