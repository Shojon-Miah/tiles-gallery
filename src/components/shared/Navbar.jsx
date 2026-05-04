"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useSession, signOut } from "@/lib/auth-client";
import toast, { Toaster } from "react-hot-toast";

// Always-visible public links (centre nav)
const publicNavLinks = [
  { label: "Home", href: "/" },
  { label: "All Tiles", href: "/all-tiles" },
];

// Private link shown only when the user is logged in
const privateNavLink = { label: "My Profile", href: "/my-profile" };

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const { data: session } = useSession();
  const user = session?.user ?? null;

  // Build the full nav list based on auth state
  const navLinks = user
    ? [...publicNavLinks, privateNavLink]
    : publicNavLinks;

  const handleLogout = async () => {
    await signOut();
    toast.success("Logged out successfully");
    router.push("/");
  };

  const linkClass = (href) =>
    `relative text-sm font-medium transition-colors pb-1
     ${
       pathname === href
         ? "text-stone-900 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-stone-700"
         : "text-stone-500 hover:text-stone-800 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-stone-400 hover:after:w-full after:transition-all after:duration-300"
     }`;

  const mobileLinkClass = (href) =>
    `block px-3 py-2 rounded text-sm font-medium transition-colors
     ${
       pathname === href
         ? "bg-stone-100 text-stone-900"
         : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
     }`;

  return (
    <>
      <Toaster position="top-center" />
      <nav className="sticky top-0 z-50 w-full bg-white border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* ── Left: Logo ── */}
            <Link
              href="/"
              className="flex items-center gap-2 text-stone-800 hover:text-stone-600 transition-colors"
            >
              <span className="flex gap-0.5">
                <span className="flex flex-col gap-0.5">
                  <span className="w-3 h-3 bg-stone-700 rounded-sm"></span>
                  <span className="w-3 h-3 bg-stone-400 rounded-sm"></span>
                </span>
                <span className="flex flex-col gap-0.5">
                  <span className="w-3 h-3 bg-stone-400 rounded-sm"></span>
                  <span className="w-3 h-3 bg-stone-700 rounded-sm"></span>
                </span>
              </span>
              <span className="text-xl font-semibold tracking-tight text-stone-800">
                Tiles<span className="text-stone-400 font-light">Gallery</span>
              </span>
            </Link>

            {/* ── Centre: Nav Links (desktop) ── */}
            {/* Requirement: Home | All Tiles | My Profile (when logged in) */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className={linkClass(href)}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* ── Right: Auth (desktop) ── */}
            {/* Logged out → Login button | Logged in → Avatar + Logout */}
            <div className="hidden md:flex items-center gap-3">
              {user ? (
                <>
                  <Link href="/my-profile" className="flex items-center gap-2">
                    <img
                      src={user.image ?? "/default-avatar.png"}
                      alt={user.name ?? "User"}
                      className="w-8 h-8 rounded-full object-cover border-2 border-stone-200 hover:border-stone-400 transition-colors"
                    />
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-sm font-medium text-stone-600 border border-stone-300 px-4 py-1.5 rounded hover:bg-stone-100 hover:border-stone-400 transition-all"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  href="/login"
                  className="text-sm font-medium text-white bg-stone-800 px-5 py-2 rounded hover:bg-stone-700 transition-colors"
                >
                  Login
                </Link>
              )}
            </div>

            {/* ── Mobile: Hamburger ── */}
            <button
              className="md:hidden p-2 text-stone-600 hover:text-stone-900"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

          </div>
        </div>

        {/* ── Mobile Menu ── */}
        {menuOpen && (
          <div className="md:hidden border-t border-stone-100 bg-white px-4 pb-4 pt-2">
            <ul className="flex flex-col gap-1">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={mobileLinkClass(href)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-3 pt-3 border-t border-stone-100">
              {user ? (
                <div className="flex items-center gap-3">
                  <img
                    src={user.image ?? "/default-avatar.png"}
                    alt={user.name ?? "User"}
                    className="w-8 h-8 rounded-full object-cover border-2 border-stone-200"
                  />
                  <span className="text-sm text-stone-700 flex-1">{user.name}</span>
                  <button
                    onClick={handleLogout}
                    className="text-sm font-medium text-stone-600 border border-stone-300 px-3 py-1.5 rounded hover:bg-stone-100 transition-all"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setMenuOpen(false)}
                  className="block text-center text-sm font-medium text-white bg-stone-800 px-5 py-2 rounded hover:bg-stone-700 transition-colors"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
