import Image from "next/image";
import Link from "next/link";

export default function TileDetails({ tile }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Back Button */}
      <Link
        href="/all-tiles"
        className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-800 transition-colors mb-10"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to All Tiles
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Left: Large Image */}
        <div className="relative aspect-square bg-stone-50 overflow-hidden">
          <Image
            src={tile.image}
            alt={tile.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          {/* inStock Badge */}
          <span
            className={`absolute top-4 left-4 text-[10px] uppercase tracking-widest px-3 py-1.5 font-semibold shadow-sm
              ${tile.inStock
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-600"
              }`}
          >
            {tile.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        {/* Right: Tile Info */}
        <div className="flex flex-col justify-center">

          {/* Category */}
          <p className="text-xs uppercase tracking-[0.35em] text-stone-400 mb-3">
            {tile.category} · {tile.material}
          </p>

          {/* Title */}
          <h1
            className="text-3xl md:text-4xl font-bold text-stone-800 mb-4 leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            {tile.title}
          </h1>

          {/* Price */}
          <p className="text-2xl font-semibold text-stone-800 mb-6">
            ${tile.price.toFixed(2)}
            <span className="text-sm text-stone-400 font-normal ml-2">/ sq m ({tile.currency})</span>
          </p>

          {/* Divider */}
          <div className="h-px bg-stone-200 mb-6" />

          {/* Description */}
          <p className="text-stone-600 leading-relaxed mb-8">
            {tile.description}
          </p>

          {/* Details Table */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-stone-50 px-4 py-3">
              <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-1">Dimensions</p>
              <p className="text-sm font-medium text-stone-800">{tile.dimensions}</p>
            </div>
            <div className="bg-stone-50 px-4 py-3">
              <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-1">Material</p>
              <p className="text-sm font-medium text-stone-800">{tile.material}</p>
            </div>
            <div className="bg-stone-50 px-4 py-3">
              <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-1">Category</p>
              <p className="text-sm font-medium text-stone-800 capitalize">{tile.category}</p>
            </div>
            <div className="bg-stone-50 px-4 py-3">
              <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-1">Availability</p>
              <p className={`text-sm font-medium ${tile.inStock ? "text-green-700" : "text-red-600"}`}>
                {tile.inStock ? "In Stock" : "Out of Stock"}
              </p>
            </div>
          </div>

          {/* Tags */}
          {tile.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tile.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] uppercase tracking-widest text-stone-600 border border-stone-300 px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}


