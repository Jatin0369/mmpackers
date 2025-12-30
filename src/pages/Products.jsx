import { useState } from "react";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/data/products";
import ProductSheet from "@/components/ProductSheet";
import { Link } from "react-router-dom";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  const filteredProducts =
    selectedCategory === "All Products"
      ? PRODUCTS
      : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <div>

{/* PRODUCTS INTRO */}
<section className="bg-white">
  <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-32">

    <div className="max-w-4xl">

      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-5">
        <span className="h-px w-10 bg-accent" />
        <span className="text-sm uppercase tracking-wide text-black/50">
          Products
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-black">
        Corrugated packaging built around{" "}
        <span className="text-accent">real applications</span>
      </h1>

      {/* Description */}
      <p className="mt-5 md:mt-7 text-base md:text-lg text-black/75 max-w-3xl">
        Our product catalogue covers application-specific corrugated packaging
        developed for
        <Link to="/industries" className="text-accent mx-1 border-b border-accent/40
    hover:border-accent">
         industries 
         </Link>
         like food, bakery, sports, mirrors, gym equipment, industrial, OEM, logistics, and
        export-oriented supply chains.
      </p>

    </div>
  </div>
</section>


    <section className="bg-beige">
      <div className="mx-auto px-4 sm:px-6 py-20 max-w-none lg:max-w-[90vw]">

        

        {/* PAGE HEADER */}
        <div className="mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-semibold tracking-tight text-black">
              Product Catalogue
            </h2>
            {/* <p className="mt-4 text-lg text-black/70">
              Application-driven corrugated packaging solutions developed for
              industrial, agricultural, OEM, and export use.
            </p> */}
          </div>

          <div className="w-full lg:w-72">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="
                w-full rounded-xl border border-black/15
                bg-white px-4 py-3 text-sm
                focus:outline-none focus:ring-2 focus:ring-accent/30
              "
            >
              {PRODUCT_CATEGORIES.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* GRID */}
        <div
          className="
            grid grid-cols-1
            lg:grid-cols-2
            gap-12
          "
        >
          {filteredProducts.map(product => (
            <ProductSheet key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
    {/* PRODUCTS CTA */}
<section className="bg-beige">
  <div className="mx-auto px-6 py-20" style={{ maxWidth: "90vw" }}>
    <div className="max-w-4xl">

      <div className="flex items-center gap-3 mb-8">
        <span className="h-px w-12 bg-accent" />
        <span className="text-sm uppercase tracking-wide text-black/50">
          Get in Touch
        </span>
      </div>

      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black">
        Need packaging aligned to your{" "}
        <span className="text-accent">specific product or application</span>?
      </h2>

      <p className="mt-8 text-lg text-black/75 leading-relaxed max-w-3xl">
        For bulk requirements, export-ready cartons, or part-specific corrugated
        solutions, direct conversations help us align specifications accurately.
      </p>

      <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-8">
        <a
          href="tel:+919592669887"
          className="
            inline-flex items-center justify-center
            rounded-full bg-accent px-8 py-4
            text-base font-medium text-white
            hover:opacity-90 transition
          "
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

    </div>
  );
}
