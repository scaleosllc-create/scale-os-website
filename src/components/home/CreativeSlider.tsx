"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/shared/FadeIn";

const creatives = [
  { id: 1, image: "/images/creatives/creative-01-weekender.jpg", product: "Leather Weekender", overlay: null },
  { id: 2, image: "/images/creatives/creative-02-serum.jpg", product: "Vitamin C Serum", overlay: "Your skin, upgraded." },
  { id: 3, image: "/images/creatives/creative-03-earbuds.jpg", product: "Wireless Earbuds", overlay: null },
  { id: 4, image: "/images/creatives/creative-04-matcha.jpg", product: "Organic Matcha Set", overlay: "Ritual, refined." },
  { id: 5, image: "/images/creatives/creative-05-shoes.jpg", product: "Running Shoes", overlay: null },
  { id: 6, image: "/images/creatives/creative-06-candles.jpg", product: "Scented Candle Trio", overlay: "Set the mood." },
  { id: 7, image: "/images/creatives/creative-07-protein.jpg", product: "Protein Powder", overlay: "Fuel the grind." },
  { id: 8, image: "/images/creatives/creative-08-bedding.jpg", product: "Linen Bedding Set", overlay: null },
  { id: 9, image: "/images/creatives/creative-09-bottle.jpg", product: "Smart Water Bottle", overlay: "Stay ahead." },
  { id: 10, image: "/images/creatives/creative-10-moisturizer.jpg", product: "Face Moisturizer", overlay: "48hr hydration." },
];

// Duplicate for seamless loop
const loopedCreatives = [...creatives, ...creatives];

export default function CreativeSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const animRef = useRef<number>(0);

  // Auto-scroll loop
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let lastTime = 0;
    const speed = 0.5; // pixels per frame (~30px/sec at 60fps)

    const animate = (time: number) => {
      if (lastTime && !isPaused && !isDragging) {
        el.scrollLeft += speed;

        // When we've scrolled past the first set, jump back seamlessly
        const halfWidth = el.scrollWidth / 2;
        if (el.scrollLeft >= halfWidth) {
          el.scrollLeft -= halfWidth;
        }
      }
      lastTime = time;
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [isPaused, isDragging]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    setIsDragging(true);
    setStartX(e.pageX - el.offsetLeft);
    setScrollLeft(el.scrollLeft);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging || !scrollRef.current) return;
      e.preventDefault();
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 1.5;
      scrollRef.current.scrollLeft = scrollLeft - walk;
    },
    [isDragging, startX, scrollLeft]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <section id="work" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-container px-6 md:px-8 lg:px-12 mb-10 md:mb-14">
        <FadeIn>
          <Eyebrow>Creative Examples</Eyebrow>
          <h2 className="font-display tracking-tighter text-display-md md:text-display-lg text-white">
            Ad creatives. Built with AI.
          </h2>
          <p className="mt-4 text-base md:text-lg text-on-surface-variant max-w-xl">
            A selection of product creatives generated using our AI creative
            pipeline.
          </p>
        </FadeIn>
      </div>

      <div
        ref={scrollRef}
        className={`flex gap-5 overflow-x-auto hide-scrollbar select-none ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{
          paddingLeft: "max(1.5rem, calc((100vw - 1280px) / 2 + 3rem))",
          paddingRight: "max(1.5rem, calc((100vw - 1280px) / 2 + 3rem))",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseEnter={() => setIsPaused(true)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {loopedCreatives.map((creative, index) => (
          <div
            key={`${creative.id}-${index}`}
            className="shrink-0 w-[280px] md:w-[320px]"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-surface-card">
              <Image
                src={creative.image}
                alt={`${creative.product} ad creative`}
                fill
                sizes="320px"
                className="object-cover pointer-events-none"
                draggable={false}
              />
              {creative.overlay && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5 pointer-events-none">
                  <span className="font-display text-lg tracking-tight text-white">
                    {creative.overlay}
                  </span>
                </div>
              )}
            </div>
            <p className="text-sm text-white/70 mt-3">{creative.product}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
