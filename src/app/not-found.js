import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-stone-50 px-4">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-stone-400 mb-4">
          Error 404
        </p>
        <h1
          className="text-5xl md:text-7xl font-bold text-stone-800 mb-6"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Page Not Found
        </h1>
        <p className="text-stone-500 max-w-md mx-auto mb-10 leading-relaxed font-light">
          The aesthetic you&apos;re looking for seems to have moved or doesn&apos;t exist. 
          Let&apos;s get you back to our curated collection.
        </p>
        <Link
          href="/"
          className="inline-block bg-stone-800 text-white px-10 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-stone-700 transition-all duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}


