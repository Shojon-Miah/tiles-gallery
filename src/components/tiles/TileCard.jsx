import Image from "next/image";
import Link from "next/link";

export default function TileCard({ tile }) {
  return (
    <article
      className="group flex flex-col"
      id={`tile-card-${tile.id}`}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-stone-50 aspect-square mb-4">
        <Image
          src={tile.image}
          alt={tile.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* inStock Badge */}
        <span
          className={`absolute top-3 right-3 text-[10px] uppercase tracking-widest px-2 py-1 font-semibold shadow-sm
            ${tile.inStock
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-600"
            }`}
        >
          {tile.inStock ? "In Stock" : "Out of Stock"}
        </span>
      </div>

      {/* Card Info */}
      <div className="flex flex-col flex-1 px-1">
        <p className="text-[11px] text-stone-400 uppercase tracking-wider mb-1">
          {tile.category} · {tile.dimensions}
        </p>
        <h3 className="text-sm font-semibold text-stone-800 mb-3 leading-snug">
          {tile.title}
        </h3>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-stone-800 font-medium text-sm">
            ${tile.price.toFixed(2)}
            <span className="text-xs text-stone-400 ml-1">/ sq m</span>
          </span>
          <Link
            href={`/tile/${tile.id}`}
            id={`details-btn-${tile.id}`}
            className="text-xs font-medium text-stone-600 border border-stone-300 px-3 py-1.5 hover:bg-stone-800 hover:text-white hover:border-stone-800 transition-all duration-200"
          >
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}

