"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function FeaturedTilesClient({ tiles }) {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.35em] text-stone-400 mb-3">
            Our Selection
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-stone-800"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Featured Tiles
          </h2>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-16 bg-stone-200" />
            <div className="w-1.5 h-1.5 rounded-full bg-stone-400" />
            <div className="h-px w-16 bg-stone-200" />
          </div>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {tiles.map((tile) => (
            <TileCard key={tile.id} tile={tile} />
          ))}
        </div>

        {/* Mobile: Swiper */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            spaceBetween={16}
            slidesPerView={1}
            className="pb-10"
          >
            {tiles.map((tile) => (
              <SwiperSlide key={tile.id}>
                <TileCard tile={tile} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* View All Button */}
        <div className="text-center mt-14">
          <Link
            href="/all-tiles"
            id="featured-view-all-btn"
            className="inline-block border border-stone-800 text-stone-800 px-12 py-3.5 text-sm font-medium uppercase tracking-widest hover:bg-stone-800 hover:text-white transition-all duration-300"
          >
            View All Tiles
          </Link>
        </div>

      </div>
    </section>
  );
}

function TileCard({ tile }) {
  return (
    <article className="group flex flex-col" id={`featured-tile-${tile.id}`}>
      <div className="relative overflow-hidden bg-stone-50 aspect-square mb-4">
        <Image
          src={tile.image}
          alt={tile.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {tile.tags?.[0] && (
          <span className="absolute top-3 left-3 bg-white text-stone-700 text-[10px] uppercase tracking-widest px-2 py-1 font-semibold shadow-sm">
            {tile.tags[0]}
          </span>
        )}
      </div>
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
            id={`view-details-${tile.id}`}
            className="text-xs font-medium text-stone-600 border border-stone-300 px-3 py-1.5 hover:bg-stone-800 hover:text-white hover:border-stone-800 transition-all duration-200"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}

