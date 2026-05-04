import { getFeaturedTiles } from "@/lib/jsonServer";
import FeaturedTilesClient from "./FeaturedTilesClient";

export default async function FeaturedTiles() {
  const featuredTiles = await getFeaturedTiles();

  return <FeaturedTilesClient tiles={featuredTiles} />;
}


