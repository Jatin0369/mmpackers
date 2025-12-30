import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";


const ScrollSequence = lazy(() =>
  import("@/components/ScrollSequence")
);

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-10 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT: TEXT */}
            <div>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
                Corrugated Packaging Solutions for Modern Industries
              </h1>

              <p className="mt-6 text-base md:text-lg text-black/80 max-w-xl">
                Designed for food, industrial, logistics, and export-oriented
                applications.
              </p>

              <div className="mt-6 text-sm md:text-base tracking-wide text-black/70">
                Food • Industrial • Export • Custom Applications
              </div>

              <div className="mt-10">
                <a
                  href="tel:+919592669887"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-base font-medium text-white hover:opacity-90 transition"
                >
                  Contact: +91 95926 69887
                </a>
              </div>
            </div>

            {/* RIGHT: IMAGE */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/images/home/hero-picture.webp"
                  alt="Corrugated packaging manufacturing facility"
                  className="w-full h-[420px] md:h-[480px] object-cover"
                    fetchpriority="high"
                    decoding="async"
                />
              </div>

              {/* Subtle material overlay (optional) */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5" />
            </div>

          </div>
        </div>
      </section>

      {/* TRUST / STRENGTH SNAPSHOT */}
    <section className="bg-beige">
    <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Heading Block */}
        <div className="max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Built for <span className="font-bold">Strength</span>,{" "}
            <span className="font-bold">Reliability</span>, and{" "}
            <span className="font-bold">Scale</span>
        </h2>

        <p className="mt-4 text-base md:text-lg text-black/80 leading-relaxed">
            Corrugated packaging solutions designed to perform consistently across
            real-world handling, storage, and transport environments.
        </p>
        </div>

        {/* Cards */}
<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">

  {/* Card */}
  {[
    {
      title: "Capability-Driven Solutions",
      desc: "Corrugated packaging developed around application requirements, not fixed formats.",
      icon: (
        <rect x="4" y="4" width="16" height="16" rx="3" />
      ),
    },
    {
      title: "Consistent & Dependable Supply",
      desc: "Designed to support reliable production, repeat supply, and long-term business relationships.",
      icon: (
        <path d="M5 9h14M5 13h14M5 17h10" />
      ),
    },
    {
      title: "Application-Specific Design",
      desc: "Packaging solutions tailored to handling conditions, transport needs, and product protection.",
      icon: (
        <path d="M4 20h16M8 4h8v16H8z" />
      ),
    },
    {
      title: "Export-Oriented Use Cases",
      desc: "Favoured by industries requiring dependable performance across long-distance and export supply chains.",
      icon: (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3v18M3 12h18" />
        </>
      ),
    },
  ].map((item, i) => (
    <div
      key={i}
      className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white
                 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
    >
      {/* Left visual spine */}
      <div className="absolute left-0 top-0 h-full w-1 bg-accent/80" />

      <div className="flex gap-6 p-8">

        {/* Icon block */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl
                        bg-beige text-black transition-colors duration-300
                        group-hover:bg-accent group-hover:text-white">
          <svg
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            {item.icon}
          </svg>
        </div>

        {/* Text */}
        <div>
          <h3 className="text-lg font-semibold leading-snug mb-2">
            {item.title}
          </h3>
          <p className="text-sm text-black/70 leading-relaxed">
            {item.desc}
          </p>
        </div>

      </div>
    </div>
  ))}
</div>

    </div>
    </section>

    {/* PRODUCT CAPABILITY — DESKTOP */}
    <Suspense fallback={null}>
    <ScrollSequence />
  </Suspense>
    {/* INDUSTRIES SERVED */}
<section className="bg-beige">
  <div className="max-w-7xl mx-auto px-6 py-24">

    {/* Heading */}
    <div className="max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
        Industries We Serve
      </h2>
      <p className="mt-4 text-base md:text-lg text-black/70">
        Corrugated packaging solutions developed to meet industry-specific
        handling, protection, and transport requirements.
      </p>
    </div>

    {/* Cards Grid */}
    <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {[
        {
          title: "Food & Bakery",
          desc: "Packaging designed for fresh produce, bakery, and food items requiring controlled handling.",
        },
        {
          title: "E-commerce & Logistics",
          desc: "Shipping cartons engineered to withstand sorting, stacking, and long-distance movement.",
        },
        {
          title: "Industrial & Manufacturing",
          desc: "Heavy-duty corrugated solutions for machinery parts and industrial components.",
        },
        {
          title: "OEM & Component Packaging",
          desc: "Consistent, repeatable packaging for OEM parts and B2B supply chains.",
        },
        {
          title: "Sports & Fitness Equipment",
          desc: "Protective structures for bulky, weight-intensive sports and fitness products.",
        },
        {
          title: "Fragile & Precision Products",
          desc: "Reinforced packaging for breakage-sensitive and precision items.",
        },
        {
          title: "Export-Oriented Industries",
          desc: "Export-ready cartons suitable for international shipping environments.",
        },
        {
          title: "Custom Industry Applications",
          desc: "Application-specific corrugated solutions for non-standard requirements.",
          muted: true,
        },
      ].map((item, i) => (
        <div
          key={i}
          className={`
            group relative h-full rounded-2xl
            bg-white/80 backdrop-blur-sm
            border border-black/5
            px-6 py-7
            transition-all duration-300
            hover:shadow-md
            ${item.muted ? "text-black/60" : "text-black"}
          `}
        >
          {/* Accent Marker */}
          <span
            className="
              absolute left-0 top-6
              h-10 w-[3px]
              bg-accent/80
              rounded-r
            "
          />

          {/* Heading */}
          <h3 className="text-base font-medium leading-snug tracking-tight">
            {item.title}
          </h3>

          {/* Divider */}
          <div className="mt-3 h-px w-12 bg-black/10" />

          {/* Description */}
          <p className="mt-3 text-sm text-black/70 leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}

    </div>

    {/* Soft CTA */}
<div className="mt-12">
  <Link
    to="/industries"
    className="
      inline-flex items-center gap-2
      text-sm text-black/60
      hover:text-black
      transition
    "
  >
    View all industries
    <span className="text-accent transition-transform group-hover:translate-x-1">
      →
    </span>
  </Link>
</div>

  </div>
</section>


    {/* INFRASTRUCTURE & RESPONSIBLE MANUFACTURING */}
<section className="bg-white">
  <div className="max-w-7xl mx-auto px-6 py-24">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

      {/* Image */}
      <div className="relative">
        <img
          src="/images/home/warehouse-picture-corrugated-box.webp"
          alt="Corrugated packaging manufacturing facility"
          className="w-full h-[420px] md:h-[480px] object-cover rounded-3xl"
            loading="lazy"
            decoding="async"
            fetchpriority="low"
        />
        {/* subtle frame */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-black/5" />
      </div>

{/* Text Content */}
<div className="max-w-xl">

  {/* Section Heading */}
  <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
    Infrastructure & Responsible Manufacturing
  </h2>

  {/* Lead paragraph */}
  <p className="mt-5 text-base md:text-lg text-black/75 leading-relaxed">
    Our manufacturing 
    <Link to="/infrastructure" className="text-accent mx-1 border-b border-accent/40
    hover:border-accent">
    infrastructure
    </Link>
     is designed to support consistent quality,
    dependable supply, and application-focused corrugated packaging across
    industries.
  </p>

  {/* Info Blocks */}
  <div className="mt-10 space-y-6">

    <div className="flex gap-4">
      <div className="mt-1 h-2 w-2 rounded-full bg-black/40" />
      <div>
        <h4 className="text-base font-medium">
          In-house Manufacturing Capability
        </h4>
        <p className="mt-1 text-sm md:text-base text-black/70">
          Corrugated box manufacturing supporting bulk orders, repeat production,
          and long-term supply requirements.
        </p>
      </div>
    </div>

    <div className="flex gap-4">
      <div className="mt-1 h-2 w-2 rounded-full bg-black/40" />
      <div>
        <h4 className="text-base font-medium">
          Application-based Material Selection
        </h4>
        <p className="mt-1 text-sm md:text-base text-black/70">
          Materials chosen based on handling conditions, load requirements, and
          specific customer use cases.
        </p>
      </div>
    </div>

    <div className="flex gap-4">
      <div className="mt-1 h-2 w-2 rounded-full bg-black/40" />
      <div>
        <h4 className="text-base font-medium">
          Responsible Resource Practices
        </h4>
        <p className="mt-1 text-sm md:text-base text-black/70">
          Waste material routed back to paper mills for recycling wherever
          possible.
        </p>
      </div>
    </div>

    <div className="flex gap-4">
      <div className="mt-1 h-2 w-2 rounded-full bg-black/40" />
      <div>
        <h4 className="text-base font-medium">
          Efficient & Scalable Operations
        </h4>
        <p className="mt-1 text-sm md:text-base text-black/70">
          Manufacturing practices aligned with efficient processes and scalable
          production needs.
        </p>
      </div>
    </div>

  </div>
</div>


    </div>
  </div>
</section>

{/* FINAL CTA */}
<section className="bg-beige">
  <div className="max-w-7xl mx-auto px-6 py-28">

    <div className="max-w-3xl">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
        Let’s Discuss Your Packaging Requirements
      </h2>

      {/* Supporting text */}
      <p className="mt-5 text-base md:text-lg text-black/75 leading-relaxed">
        For bulk orders, export-ready packaging, or application-specific
        corrugated solutions, we encourage direct discussion to understand
        your requirements.
      </p>

      {/* CTA Block */}
      <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6">
        <a
          href="tel:+919592669887"
          className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-base font-medium text-white hover:opacity-90 transition"
        >
          Call: +91 95926 69887
        </a>

        <span className="text-sm text-black/60">
          Serving businesses across North India
        </span>
      </div>
    </div>

  </div>
</section>

    </>
  );
}
