export default function ProductSheet({ product }) {
  return (
    <article
      className="
        bg-white
        border border-black/15
        rounded-2xl
        overflow-hidden
      "
    >

      {/* HEADER */}
      <header className="relative px-6 py-6 bg-white">
        {/* subtle accent shine */}
        {/* Primary glass slab */}
            <div
            className="
                absolute inset-0
                bg-white/15
                backdrop-blur-md
            "
            />

            {/* Offset geometric slab */}
            <div
            className="
                absolute -top-6 -left-20
                w-[420px] h-[140%]
                bg-accent/20
                rotate-6
                blur-2xl
            "
            />

        <h2 className="
          relative z-10
          text-2xl md:text-3xl
          font-semibold
          text-black
          tracking-tight
        ">
          {product.title}
        </h2>
      </header>

      {/* MAIN CONTENT */}
      <div className="px-6 py-8">

        {/* IMAGE + DESCRIPTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

          {/* IMAGE */}
          <div>
            <div
            className="
                bg-beige
                border border-black/10
                rounded-xl
                w-full
                h-44 md:h-44 lg:h-44
                overflow-hidden
            "
            >
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
            />
            </div>

          </div>

          {/* DESCRIPTION */}
          <div>
            <p className="
              text-lg
              leading-relaxed
              text-black/80
            ">
              {product.description}
            </p>
          </div>
        </div>

        {/* APPLICATIONS — FULL WIDTH */}
        <div className="mt-8 pt-6 border-t border-black/10">
          <p className="
            text-md uppercase tracking-widest
            text-black font-medium
            mb-3
          ">
            Applications
          </p>
          <div className="flex flex-wrap gap-3">
            {product.applications.map((app, i) => (
              <span
                key={i}
                className="
                  px-3 py-1
                  rounded-full
                  bg-black/5
                  text-sm text-black/80
                "
              >
                {app}
              </span>
            ))}
          </div>
        </div>

        {/* TECHNICAL ASPECTS */}
        <div className="mt-8">
          <p className="
            text-md uppercase tracking-widest
            text-black font-medium
            mb-4
          ">
            Technical Aspects
          </p>
          <ul className="space-y-3">
            {product.technicalSpecs.map((spec, i) => (
              <li key={i} className="flex items-start">
                <span
                  className="
                    mt-2 mr-3
                    w-1.5 h-1.5
                    bg-accent
                    rounded-full
                    flex-shrink-0
                  "
                />
                <span className="text-md text-black/80 leading-relaxed">
                  {spec}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </article>
  );
}
