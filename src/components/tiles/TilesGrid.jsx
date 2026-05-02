"use client";
import { useState } from "react";
import { Input } from "@heroui/react";
import TileCard from "./TileCard";

export default function TilesGrid({ tiles }) {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredTiles = tiles.filter((tile) =>
        tile.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            {/* Search Bar */}
            <div className="max-w-xl mx-auto mb-10">
                <Input
                    type="text"
                    placeholder="Search tiles by title..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    size="lg"
                    radius="none"
                    classNames={{
                        input: "text-stone-800 placeholder:text-stone-500",
                        inputWrapper: "border-2 border-stone-500 bg-white shadow-none hover:border-stone-900 focus-within:border-stone-900",
                    }}
                />
            </div>

            {/* No Result */}
            {filteredTiles.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-stone-400 text-sm uppercase tracking-widest">
                        No tiles found for &quot;{searchQuery}&quot;
                    </p>
                </div>
            )}

            {/* Tiles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTiles.map((tile) => (
                    <TileCard key={tile.id} tile={tile} />
                ))}
            </div>
        </div>
    );
}