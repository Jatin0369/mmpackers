import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">
              M & M Packers
            </h3>

            <p className="text-black/70 max-w-md leading-relaxed">
              Corrugated packaging solutions designed for strength, reliability,
              and application-specific requirements across industries.
            </p>

            {/* Social Media (MOVED HERE) */}
            <div className="mt-6 space-y-3">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-black/70 hover:text-accent transition"
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2.5" y="2.5" width="13" height="13" rx="3" />
                  <circle cx="9" cy="9" r="3" />
                  <circle cx="13" cy="5" r="0.8" />
                </svg>
                <span>Instagram</span>
              </a>

              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-black/70 hover:text-accent transition"
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M11 2H9a3 3 0 0 0-3 3v2H4v3h2v6h3v-6h2.5l.5-3H9V5a1 1 0 0 1 1-1h1z" />
                </svg>
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wide text-black/60 mb-4">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-accent">Home</Link></li>
              <li><Link to="/products" className="hover:text-accent">Products</Link></li>
              <li><Link to="/industries" className="hover:text-accent">Industries Served</Link></li>
              <li><Link to="/infrastructure" className="hover:text-accent">Infrastructure</Link></li>
              <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wide text-black/60 mb-4">
              Contact
            </h4>

            <ul className="space-y-3 text-sm text-black/70">
              <li>Sushant Malhotra</li>
              <li>
                <a href="tel:+919592669887" className="hover:text-accent">
                  +91 95926 69887
                </a>
              </li>

              <li className="pt-2">Rajesh Malhotra</li>
              <li>
                <a href="tel:+919357255444" className="hover:text-accent">
                  +91 93572 55444
                </a>
              </li>

              <li className="pt-2">
                Serving businesses across North India
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div
          className="mt-16 border-t border-black/10 pt-8 flex flex-col md:flex-row
                     items-start md:items-center justify-between gap-4"
        >
          <p className="text-xs text-black/50">
            © {new Date().getFullYear()} M & M Packers. All rights reserved.
          </p>

          <p className="text-xs text-black/50">
            Designed by Chitrakala - A KSK.GOC Company
          </p>
        </div>

      </div>
    </footer>
  );
}
