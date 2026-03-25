"use client";

import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/shared/FadeIn";

const creatives = [
  { id: 1, image: "/images/creatives/creative-01-weekender.jpg", brand: "DRIFT CO.", product: "Leather Weekender", overlay: null },
  { id: 2, image: "/images/creatives/creative-02-serum.jpg", brand: "AURORA SKINCARE", product: "Vitamin C Serum", overlay: "Your skin, upgraded." },
  { id: 3, image: "/images/creatives/creative-03-earbuds.jpg", brand: "KINETIC AUDIO", product: "Wireless Earbuds", overlay: null },
  { id: 4, image: "/images/creatives/creative-04-matcha.jpg", brand: "SOLACE LIVING", product: "Organic Matcha Set", overlay: "Ritual, refined." },
  { id: 5, image: "/images/creatives/creative-05-shoes.jpg", brand: "VELTA FITNESS", product: "Running Shoes", overlay: null },
  { id: 6, image: "/images/creatives/creative-06-candles.jpg", brand: "MAISON HOME", product: "Scented Candle Trio", overlay: "Set the mood." },
  { id: 7, image: "/images/creatives/creative-07-protein.jpg", brand: "NOVA NUTRITION", product: "Protein Powder", overlay: "Fuel the grind." },
  { id: 8, image: "/images/creatives/creative-08-bedding.jpg", brand: "MERIDIAN GOODS", product: "Linen Bedding Set", overlay: null },
  { id: 9, image: "/images/creatives/creative-09-bottle.jpg", brand: "DRIFT CO.", product: "Smart Water Bottle", overlay: "Stay ahead." },
  { id: 10, image: "/images/creatives/creative-10-moisturizer.jpg", brand: "AURORA SKINCARE", product: "Face Moisturizer", overlay: "48hr hydration." },
];

export default function CreativeSlider() {
  return (
    <section id="work" className="py-16 md:py-24 lg:py-32 bg-background overflow-hidden">
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

      <div className="relative">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar px-6 md:px-8 lg:px-12">
          {creatives.map((creative) => (
            <div
              key={creative.id}
              className="snap-start shrink-0 w-64 md:w-72 lg:w-80"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-surface-card">
                <Image
                  src={creative.image}
                  alt={`${creative.brand} ${creative.product} ad creative`}
                  fill
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                  className="object-cover"
                />
                {creative.overlay && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
                    <span className="font-display text-lg tracking-tight text-white">
                      {creative.overlay}
                    </span>
                  </div>
                )}
              </div>
              <p className="text-[10px] uppercase tracking-wider text-on-surface-muted mt-3">
                {creative.brand}
              </p>
              <p className="text-sm text-white/70">{creative.product}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
