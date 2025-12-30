export default function AboutContact() {
  return (
    <>
      {/* ABOUT INTRO */}
      <section className="relative bg-white overflow-hidden">
        {/* Corrugation Pattern */}
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

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 lg:py-32">
          <div className="max-w-4xl">
            {/* Accent marker */}
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <span className="h-px w-12 bg-accent" />
              <span className="text-sm uppercase tracking-wide text-black/50">
                About Us
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
              Packaging built around{" "}
              <span className="text-accent">real-world use</span>, not assumptions
            </h1>

            <p className="mt-6 md:mt-8 text-base md:text-lg text-black/75 leading-relaxed max-w-3xl">
              M & M Packers manufactures corrugated packaging solutions designed
              to support industrial, commercial, and export-oriented applications
              where consistency and performance matter.
            </p>

            <p className="mt-4 md:mt-6 text-base md:text-lg text-black/75 leading-relaxed max-w-3xl">
              Our work begins with understanding how packaging is handled, stored,
              and transported — allowing us to deliver solutions that perform
              reliably beyond controlled conditions.
            </p>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="bg-beige">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <span className="h-px w-12 bg-accent" />
                <span className="text-sm uppercase tracking-wide text-black/50">
                  Our Approach
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight">
                How we think about manufacturing
              </h2>

              <p className="mt-6 md:mt-8 text-base md:text-lg text-black/75 leading-relaxed max-w-md">
                Practical decision-making, application-first thinking, and
                long-term reliability guide every stage of our process.
              </p>
            </div>

            {/* Right */}
            <div className="space-y-8 md:space-y-10">
              <div className="border-l-2 border-accent pl-5 md:pl-6">
                <h3 className="text-base md:text-lg font-medium">
                  Application-first design
                </h3>
                <p className="mt-2 text-black/70 leading-relaxed">
                  Packaging solutions are developed based on usage conditions,
                  handling methods, and transport realities.
                </p>
              </div>

              <div className="border-l-2 border-accent pl-5 md:pl-6">
                <h3 className="text-base md:text-lg font-medium">
                  Consistency & repeat supply
                </h3>
                <p className="mt-2 text-black/70 leading-relaxed">
                  Manufacturing processes are aligned to support dependable lead
                  times and repeat production.
                </p>
              </div>

              <div className="border-l-2 border-accent pl-5 md:pl-6">
                <h3 className="text-base md:text-lg font-medium">
                  Practical manufacturing decisions
                </h3>
                <p className="mt-2 text-black/70 leading-relaxed">
                  Focus remains on performance, efficiency, and suitability rather
                  than unnecessary complexity.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* RESPONSIBILITY */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-26 lg:py-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <span className="h-px w-12 bg-accent" />
              <span className="text-sm uppercase tracking-wide text-black/50">
                Responsibility
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
              Responsible manufacturing, wherever practical
            </h2>

            <p className="mt-6 md:mt-8 text-base md:text-lg text-black/75 leading-relaxed">
              Wherever feasible, manufacturing waste is routed back to paper mills
              for recycling. Material selection and production practices aim to
              balance performance requirements with responsible resource usage.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-beige">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 lg:py-36">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <span className="h-px w-12 bg-accent" />
              <span className="text-sm uppercase tracking-wide text-black/50">
                Contact
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
              Let’s talk about your{" "}
              <span className="text-accent">packaging requirements</span>
            </h2>

            <p className="mt-6 md:mt-10 text-base md:text-lg text-black/75 max-w-3xl">
              For bulk requirements, export-ready packaging, or application-
              specific discussions, direct conversations help us understand your
              needs better.
            </p>

            <div className="mt-10 md:mt-14 flex flex-col sm:flex-row sm:items-center gap-6 md:gap-8">
              <a
                href="tel:+919592669887"
                className="inline-flex items-center justify-center rounded-full
                           bg-accent px-8 py-4 text-base font-medium text-white
                           hover:opacity-90 transition"
              >
                Call +91 95926 69887
              </a>

              <span className="text-black/60">
                Serving businesses across North India
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
