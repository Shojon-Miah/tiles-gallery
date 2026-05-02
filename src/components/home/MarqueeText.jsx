"use client";
import Marquee from "react-fast-marquee";

const marqueeItems = [
  "New Arrivals: Ceramic Blue Tile",
  "Weekly Feature: Modern Geometric Patterns",
  "Join the Community",
  "Premium Porcelain from Italy",
  "Free Samples Available",
  "Shop By Room, Colour & Style",
  "Exclusive Designer Collections",
  "Rated ★★★★★ by 10,000+ customers",
];

export default function MarqueeText() {
  return (
    <div
      className="py-3 overflow-hidden border-y border-[#2d5240]"
      style={{ backgroundColor: "#1a3a2a" }}
    >
      <Marquee speed={45} gradient={false} pauseOnHover>
        {marqueeItems.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="text-stone-200 text-sm font-light tracking-wide mx-6">
              {item}
            </span>
            <span className="text-[#2d5240] text-lg mx-2 select-none">◆</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
