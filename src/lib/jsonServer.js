const JSON_SERVER_URL = "http://localhost:5000";

// সব tiles fetch করে
export async function getAllTiles() {
  const res = await fetch(`${JSON_SERVER_URL}/tiles`);
  if (!res.ok) throw new Error("Failed to fetch tiles");
  return res.json();
}

// শুধু top 4 tiles fetch করে (Featured section এর জন্য)
export async function getFeaturedTiles() {
  const res = await fetch(`${JSON_SERVER_URL}/tiles?_page=1&_per_page=4`);
  if (!res.ok) throw new Error("Failed to fetch featured tiles");
  const result = await res.json();
  return result.data || result;
}

// id দিয়ে একটা tile fetch করে (Details page এর জন্য)
export async function getTileById(id) {
  const res = await fetch(`${JSON_SERVER_URL}/tiles/${id}`);
  if (!res.ok) throw new Error("Failed to fetch tile");
  return res.json();
}

