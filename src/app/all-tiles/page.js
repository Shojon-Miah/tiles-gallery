import { getAllTiles } from "@/lib/jsonServer";
import TilesGrid from "@/components/tiles/TilesGrid";

export const metadata = {
  title: "All Tiles | Tiles Gallery",
  description: "Browse our complete collection of premium tiles",
};

export default async function AllTilesPage() {
  const tiles = await getAllTiles();

  return (
    <main className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-stone-50 border-b border-stone-200 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-stone-400 mb-3">
            Our Collection
          </p>
          <h1
            className="text-3xl md:text-4xl font-bold text-stone-800"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            All Tiles
          </h1>
        </div>
      </div>

      {/* Tiles Grid with Search */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <TilesGrid tiles={tiles} />
      </div>
    </main>
  );
}

