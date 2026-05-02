import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative w-full min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-banner.png"
        alt="Luxury tiled living room"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Subtle bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p className="text-xs uppercase tracking-[0.4em] text-stone-300 mb-5 font-light">
          Premium Porcelain &amp; Ceramic
        </p>

        {/* Heading */}
        <h1
          className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Discover Your
          <br />
          <span className="italic font-light text-stone-200">
            Perfect Aesthetic
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-lg text-stone-300 max-w-xl mx-auto mb-10 leading-relaxed font-light">
          Explore our curated collection of premium tiles crafted for every
          space and style — from sleek modern to timeless classic.
        </p>

        {/* CTA */}
        <Link
          href="/all-tiles"
          id="banner-browse-btn"
          className="inline-block bg-white text-stone-900 px-10 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-stone-100 transition-all duration-300 hover:scale-105 active:scale-95"
        >
          Browse Now
        </Link>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/50">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-white/30 animate-pulse" />
      </div>
    </section>
  );
}
