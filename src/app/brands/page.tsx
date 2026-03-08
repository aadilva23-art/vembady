"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const brands = [
  { name: "Prestige", logo: "https://ttkprestige.com/wp-content/themes/ttk/images/logo_ttk.png?ver=2" },
  { name: "Butterfly", logo: "https://butterflyindia.com/wp-content/uploads/2026/02/logo-butterfly-new.png" },
  { name: "Preethi", logo: "https://www.shop.preethi.in/cdn/shop/files/303-1724178600-116-2021_06_28-235_2021_06_28_img_logo.png?v=1742633044" },
  { name: "Hawkins", logo: "https://www.hawkinscookers.com/homepix/logo.jpg" },
  { name: "Pigeon", logo: "https://images.seeklogo.com/logo-png/35/1/pigeon-kitchen-appliances-logo-png_seeklogo-353711.png" },
  { name: "Nolta", logo: "https://nolta.in/wp-content/uploads/2024/11/nolta_logo-removebg-preview.png" },
  { name: "La Opala", logo: "https://www.laopala.in/img/logo.png" },
  { name: "Luminarc", logo: "https://cdn.freebiesupply.com/logos/large/2x/luminarc-logo-png-transparent.png" },
];

// Triple the array for seamless infinite scroll
const tripled = [...brands, ...brands, ...brands];

function InfiniteCarousel({ direction, speed }: { direction: "left" | "right"; speed: number }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number;
    let position = direction === "left" ? 0 : -(track.scrollWidth / 3);

    const animate = () => {
      if (!paused) {
        if (direction === "left") {
          position -= speed;
          if (Math.abs(position) >= track.scrollWidth / 3) {
            position = 0;
          }
        } else {
          position += speed;
          if (position >= 0) {
            position = -(track.scrollWidth / 3);
          }
        }
        track.style.transform = `translateX(${position}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [direction, speed, paused]);

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div ref={trackRef} className="flex w-max">
        {tripled.map((brand, i) => (
          <div
            key={`${brand.name}-${i}`}
            className="mx-4 flex h-28 w-52 shrink-0 items-center justify-center rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg md:mx-6 md:h-32 md:w-60"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-10 w-auto max-w-[130px] object-contain md:h-12"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BrandsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 pb-10 pt-32">
        <div className="container-site text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-brand-400">
            Authorized Dealer
          </span>
          <h1 className="text-4xl font-extrabold text-white md:text-6xl">
            Brands You Trust
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-base text-gray-400">
            We stock only the brands that millions of Indian families rely on — with
            full warranty and our personal guarantee on every product.
          </p>
        </div>
      </section>

      {/* Carousel Row 1 — moves left */}
      <section className="bg-gray-800 py-8">
        <InfiniteCarousel direction="left" speed={0.5} />
      </section>

      {/* Carousel Row 2 — moves right */}
      <section className="bg-gray-800 pb-10 pt-2">
        <InfiniteCarousel direction="right" speed={0.35} />
      </section>

      {/* And More */}
      <section className="bg-gray-800 pb-20">
        <div className="container-site text-center">
          <p className="text-lg font-semibold text-white/60">
            ...and many more
          </p>
          <p className="mt-2 text-sm text-gray-500">
            We regularly add new brands based on customer demand. If you&apos;re
            looking for a specific brand, just ask.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "#d93832" }}>
        <div className="container-site text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            All Brands Under One Roof
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-white/70">
            Visit our store to explore the complete range — with expert advice
            and the best prices in Kochi.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="tel:+919876543210"
              className="rounded-lg bg-white px-8 py-3.5 text-sm font-bold text-brand-600 hover:bg-gray-100"
            >
              Call Us Now
            </a>
            <Link
              href="/visit-us"
              className="rounded-lg border-2 border-white/40 px-8 py-3.5 text-sm font-bold text-white hover:border-white hover:bg-white/10"
            >
              Visit Our Store
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
