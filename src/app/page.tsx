"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* ── Data ── */

const categories = [
  {
    name: "Cookware",
    desc: "Pots, pans & kadais from top brands",
    img: "https://images.unsplash.com/photo-1556910602-38f53e68e15d?w=600&h=700&fit=crop",
  },
  {
    name: "Mixer Grinders",
    desc: "Powerful grinders for every kitchen",
    img: "https://images.unsplash.com/photo-1622818426197-d54f85b88690?w=600&h=700&fit=crop",
  },
  {
    name: "Pressure Cookers",
    desc: "Quick cooking, everyday reliability",
    img: "https://images.unsplash.com/photo-1722684766454-a70335b2d651?w=600&h=700&fit=crop",
  },
  {
    name: "Dinner Sets",
    desc: "Elegant tableware for every occasion",
    img: "https://images.unsplash.com/photo-1551807306-4bcd16b92a41?w=600&h=700&fit=crop",
  },
  {
    name: "Glassware",
    desc: "Beautiful glasses & serving bowls",
    img: "https://images.unsplash.com/photo-1602904761432-f9ad96133982?w=600&h=700&fit=crop",
  },
  {
    name: "Gas Stoves",
    desc: "Efficient stoves for Indian cooking",
    img: "https://images.unsplash.com/photo-1607324772107-8ad6740ca195?w=600&h=700&fit=crop",
  },
  {
    name: "Gift Items",
    desc: "Perfect presents for every celebration",
    img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&h=700&fit=crop",
  },
  {
    name: "Cups & Mugs",
    desc: "Charming cups for tea & coffee lovers",
    img: "https://images.unsplash.com/photo-1544421604-b50d59499cd1?w=600&h=700&fit=crop",
  },
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

const whyUs = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
    title: "Family-Run, Family-Focused",
    desc: "We've served Kochi families since 2005. Every customer is treated like our own.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: "Everything Under One Roof",
    desc: "From mixer grinders to wedding gifts — 1000+ products, no need to shop anywhere else.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
    title: "100% Genuine Products",
    desc: "Authorized dealer for every brand we carry. Full warranty on every purchase.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
    title: "Best Prices in Kochi",
    desc: "We match or beat online prices. Compare and see — no shipping wait, no risk.",
  },
];

/* ── Hooks ── */

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

/* ── Components ── */

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
          <div key={i} className="mx-6 shrink-0 md:mx-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={b.logo}
              alt={b.name}
              className="h-8 w-auto max-w-[100px] object-contain opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0 md:h-10 md:max-w-[120px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Page ── */

export default function HomePage() {
  const isOpen = useStoreOpen();

  return (
    <>
      {/* ━━ Hero ━━ */}
      <section className="relative overflow-hidden bg-warm-50 pt-16">
        {/* Decorative warm blobs */}
        <div className="pointer-events-none absolute -right-32 top-20 h-[500px] w-[500px] rounded-full bg-warm-200/40 blur-[100px]" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-brand-100/30 blur-[100px]" />

        <div className="container-site relative z-10 flex flex-col items-center pb-16 pt-20 text-center md:pt-28">
          {/* Status pill */}
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-warm-200 bg-white/80 px-5 py-2 shadow-sm backdrop-blur-sm">
            <span
              className={`h-2 w-2 rounded-full ${
                isOpen === null ? "bg-gray-300" : isOpen ? "bg-green-500" : "bg-red-400"
              }`}
            />
            <span className="text-xs font-medium tracking-wide text-warm-700">
              {isOpen === null
                ? "Thoppumpady, Kochi"
                : isOpen
                  ? "Open Now \u00b7 Thoppumpady, Kochi"
                  : "Closed \u00b7 Opens 9 AM"}
            </span>
          </div>

          {/* Logo */}
          <Image
            src="/logos/vembady-logo.png"
            alt="Vembady"
            width={600}
            height={200}
            className="mx-auto h-auto w-[180px] md:w-[260px] lg:w-[300px]"
            priority
          />

          {/* Headline */}
          <h1 className="mt-8 max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-tight text-warm-900 md:text-5xl lg:text-6xl">
            Where Every Kitchen
            <br />
            <span className="text-brand-600">Feels Like Home</span>
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-warm-600">
            Cookware, appliances, crockery, glassware &amp; gifts — everything
            your kitchen needs, all under one roof in Thoppumpady, Kochi.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/products"
              className="rounded-full bg-brand-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700 hover:shadow-xl"
            >
              Explore Products
            </Link>
            <Link
              href="/visit-us"
              className="rounded-full border-2 border-warm-300 bg-white px-8 py-3.5 text-sm font-bold text-warm-800 transition-colors hover:border-warm-400 hover:bg-warm-50"
            >
              Visit Our Store
            </Link>
          </div>

          {/* Trust stats */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {[
              { num: "20+", label: "Years" },
              { num: "1000+", label: "Products" },
              { num: "8+", label: "Brands" },
              { num: "365", label: "Days Open" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-extrabold text-warm-900 md:text-3xl">{s.num}</p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-warm-400">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Warm divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-warm-200 to-transparent" />
      </section>

      {/* ━━ Brands ━━ */}
      <section className="bg-white py-10">
        <p className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.3em] text-warm-400">
          Authorized Dealer For
        </p>
        <BrandStrip />
        <p className="mt-4 text-center text-xs text-warm-300">&amp; many more</p>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-warm-200 to-transparent" />

      {/* ━━ Featured Categories ━━ */}
      <section className="bg-warm-50 py-20">
        <div className="container-site">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
              Shop by Category
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-warm-900 md:text-4xl">
              Find What You Need
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-warm-500">
              From everyday essentials to premium gifting — handpicked from
              the brands you love.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {categories.map((cat) => (
              <Link key={cat.name} href="/products">
                <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-warm-100">
                  <Image
                    src={cat.img}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-950/80 via-warm-950/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-sm font-bold text-white md:text-base">{cat.name}</h3>
                    <p className="mt-0.5 text-[11px] text-white/60">{cat.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ━━ Why Choose Us ━━ */}
      <section className="bg-white py-20">
        <div className="container-site">
          <div className="mb-14 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
              Why Vembady
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-warm-900 md:text-4xl">
              Trusted by Kochi Families
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-warm-100 bg-warm-50/50 p-7 transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  {item.icon}
                </div>
                <h3 className="text-sm font-extrabold text-warm-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-warm-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━ Visit Us Banner ━━ */}
      <section className="relative overflow-hidden bg-warm-900 py-20">
        {/* Warm ambient glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-brand-600/20 blur-[80px]" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-warm-700/30 blur-[80px]" />

        <div className="container-site relative z-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-warm-400">
            Come Say Hello
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-white md:text-5xl">
            Visit Us Today
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-warm-300/70">
            Walk in, explore our collection, and walk out with exactly what
            your kitchen needs. Our team is always happy to help.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="tel:+919876543210"
              className="rounded-full bg-brand-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-600/25 hover:bg-brand-700"
            >
              Call +91 98765 43210
            </a>
            <a
              href="https://wa.me/919876543210"
              className="rounded-full border-2 border-warm-600 px-8 py-3.5 text-sm font-bold text-warm-200 hover:border-warm-400 hover:bg-warm-800"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Store info */}
          <div className="mt-10 inline-flex items-center gap-2 rounded-full bg-white/5 px-5 py-2 text-xs font-medium text-warm-300 backdrop-blur-sm">
            <span
              className={`h-2 w-2 rounded-full ${
                isOpen === null ? "bg-gray-400" : isOpen ? "bg-green-400" : "bg-red-400"
              }`}
            />
            {isOpen === null ? "" : isOpen ? "Open Now \u00b7 " : "Closed \u00b7 "}
            9 AM – 9 PM &middot; Every Day &middot; 365 Days
          </div>

          <p className="mt-5 text-sm text-warm-500">
            Vembady Building, Opp. Bus Stop, NH-66
            <br />
            Thoppumpady, Kochi, Kerala 682005
          </p>
        </div>
      </section>
    </>
  );
}
