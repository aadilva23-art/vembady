"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const trust = [
  { number: "20+", label: "Years", sub: "Serving Kochi" },
  { number: "1000+", label: "Products", sub: "In Store" },
  { number: "8+", label: "Brands", sub: "Authorized" },
  { number: "365", label: "Days Open", sub: "9 AM – 9 PM" },
];

const categories = [
  { name: "Mixer Grinders", img: "https://images.unsplash.com/photo-1654064754916-e3edeb09c042?w=600&h=800&fit=crop" },
  { name: "Pressure Cookers", img: "https://images.unsplash.com/photo-1612156514704-478bcd8734a3?w=600&h=800&fit=crop" },
  { name: "Gas Stoves", img: "https://images.unsplash.com/photo-1607324772107-8ad6740ca195?w=600&h=800&fit=crop" },
  { name: "Dinner Sets", img: "https://images.unsplash.com/photo-1738005787906-11fe4d0bcdad?w=600&h=800&fit=crop" },
  { name: "Glassware", img: "https://images.unsplash.com/photo-1534616042650-80f5c9b61f09?w=600&h=800&fit=crop" },
  { name: "Cookware", img: "https://images.unsplash.com/photo-1581147036217-6f4bd9074fef?w=600&h=800&fit=crop" },
  { name: "Cups & Mugs", img: "https://images.unsplash.com/photo-1474667689933-0ff72b3d16e9?w=600&h=800&fit=crop" },
  { name: "Gifts", img: "https://images.unsplash.com/photo-1508899203029-1c9eb493c9bd?w=600&h=800&fit=crop" },
];

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

const carouselImages = [
  { img: "https://images.unsplash.com/photo-1764526624453-db32c24eca55?w=400&h=500&fit=crop", label: "Modern Kitchen" },
  { img: "https://images.unsplash.com/photo-1580929753603-10519c6e480a?w=400&h=500&fit=crop", label: "Cookware" },
  { img: "https://images.unsplash.com/photo-1471476730017-8169d050fa19?w=400&h=500&fit=crop", label: "Kitchen Essentials" },
  { img: "https://images.unsplash.com/photo-1610829151215-112a99628f6f?w=400&h=500&fit=crop", label: "Dinner Sets" },
  { img: "https://images.unsplash.com/photo-1564424494030-37b68e478668?w=400&h=500&fit=crop", label: "Glassware" },
  { img: "https://images.unsplash.com/photo-1739598752069-6806ce5d762a?w=400&h=500&fit=crop", label: "Gas Stoves" },
  { img: "https://images.unsplash.com/photo-1593819559713-743d364eb059?w=400&h=500&fit=crop", label: "Table Settings" },
  { img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=500&fit=crop", label: "Gifts" },
];

function ScrollingStrip({ speed = 0.5 }: { speed?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let pos = 0;
    let id: number;
    const run = () => {
      pos -= speed;
      if (Math.abs(pos) >= el.scrollWidth / 3) pos = 0;
      el.style.transform = `translateX(${pos}px)`;
      id = requestAnimationFrame(run);
    };
    id = requestAnimationFrame(run);
    return () => cancelAnimationFrame(id);
  }, [speed]);

  const items = [...carouselImages, ...carouselImages, ...carouselImages];
  return (
    <div className="overflow-hidden">
      <div ref={ref} className="flex w-max">
        {items.map((c, i) => (
          <div key={i} className="mx-1.5 shrink-0 md:mx-2">
            <div className="relative h-44 w-32 overflow-hidden rounded-xl md:h-56 md:w-40">
              <Image src={c.img} alt={c.label} fill className="object-cover" sizes="160px" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <span className="absolute bottom-3 left-3 text-xs font-bold text-white">{c.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BrandStrip() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let pos = 0;
    let id: number;
    const run = () => {
      pos -= 0.3;
      if (Math.abs(pos) >= el.scrollWidth / 3) pos = 0;
      el.style.transform = `translateX(${pos}px)`;
      id = requestAnimationFrame(run);
    };
    id = requestAnimationFrame(run);
    return () => cancelAnimationFrame(id);
  }, []);

  const items = [...brands, ...brands, ...brands];
  return (
    <div className="overflow-hidden">
      <div ref={ref} className="flex w-max items-center">
        {items.map((b, i) => (
          <div key={i} className="mx-4 shrink-0 md:mx-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={b.logo} alt={b.name} className="h-8 w-auto max-w-[100px] object-contain opacity-40 md:h-10 md:max-w-[120px]" />
          </div>
        ))}
      </div>
    </div>
  );
}

function useStoreOpen() {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  useEffect(() => {
    const check = () => {
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        hour12: false,
      });
      const hour = parseInt(formatter.format(new Date()), 10);
      setIsOpen(hour >= 9 && hour < 21);
    };
    check();
    const id = setInterval(check, 60_000);
    return () => clearInterval(id);
  }, []);
  return isOpen;
}

export default function HomePage() {
  const isOpen = useStoreOpen();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-16" style={{ backgroundColor: "#d93832" }}>
        {/* Ambient glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[120px]" />

        <div className="container-site relative z-10 flex flex-col items-center justify-center pb-8 pt-20 text-center md:pt-28">
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-sm">
            <span className={`h-2 w-2 rounded-full ${isOpen === null ? "bg-gray-400" : isOpen ? "bg-green-500" : "bg-red-400"}`} />
            <span className="text-xs font-medium tracking-wide text-white/70">
              {isOpen === null ? "Thoppumpady, Kochi" : isOpen ? "Open Now \u00b7 Thoppumpady, Kochi" : "Closed \u00b7 Thoppumpady, Kochi"}
            </span>
          </div>

          {/* Logo */}
          <Image
            src="/logos/vembady-logo-transparent.png"
            alt="Vembady"
            width={600}
            height={200}
            className="mx-auto h-auto w-[240px] md:w-[360px] lg:w-[420px]"
            priority
          />

          {/* Headline */}
          <h1 className="mt-8 text-3xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
            Everything for Your
            <br />
            <span className="text-yellow-300">
              Kitchen &amp; Home
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-white/70">
            Mixer grinders, pressure cookers, gas stoves, dinner sets, crockery,
            glassware &amp; gifts — all under one roof since 2005.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/products"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-brand-600 shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl"
            >
              Explore Products
            </Link>
            <Link
              href="/visit-us"
              className="rounded-full border-2 border-white/30 px-8 py-3.5 text-sm font-bold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Visit Store
            </Link>
          </div>

          {/* Trust row */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {trust.map((t) => (
              <div key={t.label} className="text-center">
                <p className="text-2xl font-extrabold text-white md:text-3xl">{t.number}</p>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-white/60">{t.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scrolling product strip */}
        <div className="relative z-10 mt-6 pb-10">
          <ScrollingStrip speed={0.5} />
        </div>
      </section>

      {/* Brand strip */}
      <section className="border-b border-gray-100 bg-white py-8">
        <div className="mb-3 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-300">
            Authorized Dealer
          </p>
        </div>
        <BrandStrip />
        <p className="mt-3 text-center text-xs text-gray-300">& many more</p>
      </section>

      {/* Categories */}
      <section className="bg-white py-20">
        <div className="container-site">
          <div className="mb-14 max-w-lg">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Shop by Category</p>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Find What You Need
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {categories.map((cat) => (
              <Link key={cat.name} href="/products">
                <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100">
                  <Image
                    src={cat.img}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-sm font-bold text-white md:text-base">{cat.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Vembady */}
      <section className="bg-gray-50 py-20">
        <div className="container-site">
          <div className="mb-14 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Why Vembady</p>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Trusted by Kochi Families
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "100% Genuine Products", desc: "Every item comes directly from authorized distributors. No fakes, no duplicates." },
              { title: "Best Prices Guaranteed", desc: "We match or beat online prices — without the shipping wait. Compare and see." },
              { title: "Expert Personal Service", desc: "Our team knows every product. We help you pick the right one for your needs and budget." },
            ].map((v) => (
              <div key={v.title} className="rounded-2xl border border-gray-100 bg-white p-8">
                <h3 className="text-base font-extrabold text-gray-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24" style={{ backgroundColor: "#d93832" }}>
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-black/10 blur-3xl" />
        <div className="container-site relative z-10 text-center">
          <h2 className="text-3xl font-extrabold text-white md:text-5xl">
            Visit Us Today
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-white/70">
            Walk in, explore our collection, and walk out with exactly what your kitchen needs.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="tel:+919876543210"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-brand-600 shadow-lg hover:bg-gray-100"
            >
              Call +91 98765 43210
            </a>
            <a
              href="https://wa.me/919876543210"
              className="rounded-full border-2 border-white/30 px-8 py-3.5 text-sm font-bold text-white hover:border-white hover:bg-white/10"
            >
              WhatsApp Us
            </a>
          </div>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-xs font-medium text-white/80 backdrop-blur-sm">
            <span className={`h-2 w-2 rounded-full ${isOpen === null ? "bg-gray-400" : isOpen ? "bg-green-400" : "bg-red-400"}`} />
            {isOpen === null ? "" : isOpen ? "Open Now \u00b7 " : "Closed \u00b7 "}9 AM – 9 PM &middot; Every Day &middot; 365 Days
          </div>
          <p className="mt-6 text-xs text-white/40">
            📍 Opp. Bus Stop, Thoppumpady, Kochi 682005
          </p>
        </div>
      </section>
    </>
  );
}
