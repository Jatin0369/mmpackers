import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Glass Navbar */}
      <div className="backdrop-blur-xl bg-white/70 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="font-semibold text-lg tracking-tight"
            onClick={() => setOpen(false)}
          >
            M & M Packers
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10 text-base">
            <Link to="/" className="hover:opacity-70 transition">Home</Link>
            <Link to="/products" className="hover:opacity-70 transition">Products</Link>
            <Link to="/industries" className="hover:opacity-70 transition">Industries Served</Link>
            <Link to="/infrastructure" className="hover:opacity-70 transition">Infrastructure</Link>
            <Link to="/about" className="hover:opacity-70 transition">About Us</Link>
          </nav>

          {/* Desktop CTA */}
          <a
            href="tel:+919592669887"
            className="hidden md:inline-flex rounded-full bg-accent px-5 py-2.5 text-base font-medium text-white hover:opacity-90 transition"
          >
            Contact: +91 95926 69887
          </a>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="tel:+919592669887"
              className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white"
            >
              Call
            </a>

            {/* Hamburger */}
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
              className="relative w-8 h-8 flex items-center justify-center"
            >
              <span
                className={`absolute h-[2px] w-6 bg-black transition-all duration-300 ease-out
                ${open ? "rotate-45 translate-y-0" : "-translate-y-2"}`}
              />
              <span
                className={`absolute h-[2px] w-6 bg-black transition-all duration-300 ease-out
                ${open ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute h-[2px] w-6 bg-black transition-all duration-300 ease-out
                ${open ? "-rotate-45 translate-y-0" : "translate-y-2"}`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Glass Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out
          ${open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}
        >
          <nav className="bg-white/80 backdrop-blur-xl border-t border-black/5 px-6 py-6
                          flex flex-col gap-5 text-lg">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/products" onClick={() => setOpen(false)}>Products</Link>
            <Link to="/industries" onClick={() => setOpen(false)}>Industries Served</Link>
            <Link to="/infrastructure" onClick={() => setOpen(false)}>Infrastructure</Link>
            <Link to="/about" onClick={() => setOpen(false)}>About Us</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
