"use client";
import { useState } from "react";
import TileCard from "./TileCard";

export default function TilesGrid({ tiles }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTiles = tiles.filter((tile) =>
    tile.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="max-w-xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search tiles by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-3 text-stone-800 placeholder:text-stone-400 border border-stone-300 bg-white outline-none hover:border-stone-500 focus:border-stone-800 transition-colors duration-200 text-sm"
        />
      </div>

      {filteredTiles.length === 0 && (
        <div className="text-center py-20">
          <p className="text-stone-400 text-sm uppercase tracking-widest">
            No tiles found for &quot;{searchQuery}&quot;
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTiles.map((tile) => (
          <TileCard key={tile.id} tile={tile} />
        ))}
      </div>
    </div>
  );
}

