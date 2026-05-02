const JSON_SERVER_URL = "http://localhost:5000";

// Fetch all tiles
export async function getAllTiles() {
  const res = await fetch(`${JSON_SERVER_URL}/tiles`);
  if (!res.ok) throw new Error("Failed to fetch tiles");
  return res.json();
}

// Fetch only top 4 tiles (for Featured section)
export async function getFeaturedTiles() {
  const res = await fetch(`${JSON_SERVER_URL}/tiles?_page=1&_per_page=4`);
  if (!res.ok) throw new Error("Failed to fetch featured tiles");
  const result = await res.json();
  return result.data || result;
}

// Fetch a single tile by id (for Details page)
export async function getTileById(id) {
  const res = await fetch(`${JSON_SERVER_URL}/tiles/${id}`);
  if (!res.ok) throw new Error("Failed to fetch tile");
  return res.json();
}

