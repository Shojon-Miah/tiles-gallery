import Link from "next/link";
import { FaYoutube, FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const socialLinks = [
  { label: "YouTube", href: "#", icon: <FaYoutube /> },
  { label: "Facebook", href: "#", icon: <FaFacebookF /> },
  { label: "X", href: "#", icon: <FaXTwitter /> },
  { label: "LinkedIn", href: "#", icon: <FaLinkedinIn /> },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1a3a2a" }} className="text-stone-300">

      {/* ── Main Footer ── */}
      <div className="max-w-5xl mx-auto px-6 py-5 flex flex-col items-center gap-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="flex gap-0.5">
            <span className="flex flex-col gap-0.5">
              <span className="w-3 h-3 bg-stone-300 rounded-sm"></span>
              <span className="w-3 h-3 bg-stone-500 rounded-sm"></span>
            </span>
            <span className="flex flex-col gap-0.5">
              <span className="w-3 h-3 bg-stone-500 rounded-sm"></span>
              <span className="w-3 h-3 bg-stone-300 rounded-sm"></span>
            </span>
          </span>
          <span className="text-2xl font-bold text-white tracking-tight">
            Tiles<span className="font-light text-stone-400">Gallery</span>
          </span>
        </Link>

        {/* Tagline */}
        <p className="text-sm text-stone-400 text-center max-w-md leading-relaxed">
          Premium porcelain & ceramic tiles for every space. Quality you can feel underfoot.
        </p>

        {/* Contact + Social row */}
        <div className="w-full flex flex-col sm:flex-row items-start justify-between gap-6 pt-5 border-t border-green-900 max-w-2xl">

          {/* Contact Us */}
          <div className="flex flex-col gap-1.5">
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-1">
              Contact Us
            </h3>
            <p className="text-stone-400 text-sm">+8801761357184</p>
            <p className="text-stone-500 text-xs">Saturday to Thursday — 10:00am to 8:30pm</p>
            <a
              href="mailto:help@tilesgellary.co.bd"
              className="text-stone-400 hover:text-white text-sm transition-colors"
            >
              help@tilesgallery.co.bd
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-start sm:items-end gap-2">
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-1">
              Social Links
            </h3>
            <div className="flex gap-3">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-green-900 hover:bg-stone-200 transition-colors text-base"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div style={{ borderTopColor: "#2d5240" }} className="border-t">
        <div className="max-w-5xl mx-auto px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-stone-500">
            © {new Date().getFullYear()} TilesGallery. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-xs text-stone-500 hover:text-stone-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-stone-500 hover:text-stone-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-xs text-stone-500 hover:text-stone-300 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
