import Link from "next/link";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-900 text-gray-300">
      <div className="container-site py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Your trusted kitchen &amp; home store in Thoppumpady, Kochi. Serving families since 2005.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-500">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "About", "Products", "Brands", "Visit Us"].map((l) => (
                <li key={l}>
                  <Link
                    href={l === "Home" ? "/" : `/${l.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-500">
              Categories
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Mixer Grinders</li>
              <li>Pressure Cookers</li>
              <li>Gas Stoves</li>
              <li>Dinner Sets</li>
              <li>Gift Items</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-500">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Opp. Bus Stop, Thoppumpady</li>
              <li>Kochi, Kerala 682005</li>
              <li className="pt-1">
                <a href="tel:+919876543210" className="hover:text-white">
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a href="https://wa.me/919876543210" className="hover:text-white">
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Vembady. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
