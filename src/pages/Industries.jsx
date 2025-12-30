import { Link } from "react-router-dom";

export default function Industries() {
  return (
    <>
      {/* INTRO */}
      <section className="bg-white">

        
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-28">
            
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-accent" />
              <span className="text-sm uppercase tracking-wide text-black/50">
                Industries Served
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
              Packaging solutions adapted for{" "}
              <span className="text-accent">diverse industry needs</span>
            </h1>

            <p className="mt-5 md:mt-7 text-base md:text-lg text-black/75 max-w-3xl">
              Our corrugated packaging
              <Link to="/products" className="text-accent mx-1 border-b border-accent/40
    hover:border-accent">
               products
               </Link>
                are developed to support varied handling,
              storage, and transport requirements across multiple industries and
              applications.
            </p>
          </div>
        </div>
      </section>

{/* INDUSTRIES GRID */}
<section className="bg-beige">
  <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-28">

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        {
          title: "Food & Bakery",
          img: "/images/industries/bakery-box-corrugated-packaging-industry.webp",
          desc: "Packaging solutions designed for hygiene-sensitive food handling and stable transportation.",
          points: [
            "Dry food & bakery boxes",
            "Safe material usage",
            "Stacking-friendly designs",
          ],
        },
        {
          title: "Sweets & Confectionery",
          img: "/images/industries/sweets-corrugated-packaging-industry.webp",
          desc: "Corrugated boxes developed for bulk movement and retail-oriented supply chains.",
          points: [
            "Bulk sweet packaging",
            "Retail & distributor cartons",
            "Moisture-aware structures",
          ],
        },
        {
          title: "Fruits & Produce",
          img: "/images/industries/apple-cartons-corrugated-packaging-industry.webp",
          desc: "Ventilated and durable packaging to support freshness and long-distance transport.",
          points: [
            "Fresh produce transit",
            "Ventilation-friendly boxes",
            "Weight-bearing strength",
          ],
        },
        {
          title: "E-commerce & Logistics",
          img: "/images/industries/ecommerce-corrugated-packaging-industry.webp",
          desc: "Packaging solutions engineered for repeated handling and last-mile delivery.",
          points: [
            "Warehouse-ready cartons",
            "Transit damage reduction",
            "High repeat-use durability",
          ],
        },
        {
          title: "Machinery & Industrial Parts",
          img: "/images/industries/heavy-machines-corrugated-packaging-industry.webp",
          desc: "Heavy-duty corrugated packaging for industrial components and machine parts.",
          points: [
            "High-load bearing boxes",
            "Custom sizing",
            "Irregular shape support",
          ],
        },
        {
          title: "Sports & Gym Equipment",
          img: "/images/industries/sports-corrugated-packaging-industry.webp",
          desc: "Protective packaging designed for weight-intensive and bulky sports equipment.",
          points: [
            "Gym equipment packaging",
            "Shock-resistant structures",
            "Long-distance movement",
          ],
        },
        {
          title: "Glass & Mirror Products",
          img: "/images/industries/glass-mirror-corrugated-packaging-industry.webp",
          desc: "Specialized corrugated packaging for fragile and breakage-sensitive products.",
          points: [
            "Fragile item protection",
            "Cushioning support",
            "Safe stacking",
          ],
        },
        {
          title: "Large-Scale & Master Cartons",
          img: "/images/industries/master-carton-corrugated-packaging-industry.webp",
          desc: "Bulk and master cartons engineered for palletized and export-ready shipments.",
          points: [
            "Export-oriented cartons",
            "Pallet compatibility",
            "Bulk handling support",
          ],
        },
        {
          title: "OEM & B2B Component Packaging",
          img: "/images/industries/oem-tools-corrugated-packaging-industry.webp",
          desc: "Application-specific packaging solutions developed for OEM and B2B supply chains.",
          points: [
            "Component protection",
            "Repeat supply alignment",
            "Custom configurations",
          ],
        },
].map((item, i) => (
  <div
    key={i}
    className="
      group relative overflow-hidden rounded-3xl
      bg-white/80 backdrop-blur-sm
      border border-black/5
      transition-all duration-500
      hover:-translate-y-2 hover:shadow-xl
    "
  >
    {/* IMAGE LAYER */}
    <div className="relative h-48 overflow-hidden">
      <img
        src={item.img}
        alt={item.title}
        className="
          h-full w-full object-cover
          transition-transform duration-700
          group-hover:scale-105
        "
        loading="lazy"
        decoding="async"
      />

      {/* Image overlay for mood */}
      <div className="
        absolute inset-0
        bg-gradient-to-t
        from-black/40 via-black/10 to-transparent
        opacity-80
      " />
    </div>

    {/* CONTENT */}
    <div className="relative p-6">
      {/* Accent line */}
      <span className="
        absolute top-0 left-6
        h-1 w-12 bg-accent
        rounded-full
      " />

      <h2 className="mt-4 text-xl font-semibold tracking-tight">
        {item.title}
      </h2>

      <p className="mt-2 text-sm text-black/70 leading-relaxed">
        {item.desc}
      </p>

      {/* Divider */}
      <div className="mt-4 h-px w-full bg-black/5" />

      {/* Use-cases */}
      <ul className="mt-4 space-y-2">
        {item.points.map((point, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3 text-sm text-black/65"
          >
            <span className="
              mt-1.5 h-2 w-2
              rounded-full bg-accent/80
              flex-shrink-0
            " />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
))}

    </div>
  </div>
</section>


      {/* EXPORT NOTE */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-28">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
              Export & special-use packaging
            </h2>

            <p className="mt-5 md:mt-7 text-base md:text-lg text-black/75 leading-relaxed">
              A significant portion of our packaging is developed for export-ready
              and long-distance applications, where strength, consistency, and
              repeat performance are critical.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-beige">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Not seeing your industry listed?
            </h2>

            <p className="mt-4 md:mt-6 text-base md:text-lg text-black/75">
              Our packaging capabilities are adaptable. We regularly develop
              solutions for application-specific and emerging industry needs.
            </p>

            <div className="mt-8">
              <a
                href="tel:+919592669887"
                className="inline-flex items-center justify-center rounded-full
                           bg-accent px-8 py-4 text-base font-medium text-white
                           hover:opacity-90 transition"
              >
                Discuss your requirement
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
