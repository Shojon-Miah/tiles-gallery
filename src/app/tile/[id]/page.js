import { getTileById } from "@/lib/jsonServer";
import TileDetails from "@/components/tiles/TileDetails";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const tile = await getTileById(id);
  
  if (!tile) return { title: "Tile Not Found | Tiles Gallery" };
  
  return {
    title: `${tile.title} | Tiles Gallery`,
    description: tile.description,
  };
}

export default async function TileDetailsPage({ params }) {
  const { id } = await params;
  const tile = await getTileById(id);

  if (!tile) return notFound();

  return (
    <main className="min-h-screen bg-white">
      <TileDetails tile={tile} />
    </main>
  );
}

