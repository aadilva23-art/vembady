import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Vembady — a family-run kitchen appliances, crockery, and gift store serving Thoppumpady, Kochi since 2005.",
};

const milestones = [
  { year: "2005", text: "Vembady opens its doors in Thoppumpady with a small collection of kitchen essentials." },
  { year: "2010", text: "Became an authorized dealer for Prestige, Hawkins, and Butterfly." },
  { year: "2015", text: "Expanded into crockery, glassware, and premium gift items." },
  { year: "2020", text: "Grew to stock 1000+ products from 20+ trusted brands." },
  { year: "Today", text: "A household name in Kochi — known for genuine products, fair prices, and warm service." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-50 pb-16 pt-28">
        <div className="container-site max-w-3xl">
          <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-widest text-brand-600">
            ഞങ്ങളെ കുറിച്ച്
          </span>
          <h1 className="text-3xl font-extrabold text-gray-900 md:text-5xl">
            A Family Store Built on Trust
          </h1>
          <p className="mt-6 text-base leading-relaxed text-gray-600">
            Vembady started as a small kitchen store in the heart of
            Thoppumpady, Kochi — founded with a simple belief: every family
            deserves access to genuine, quality products at honest prices.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            What began in 2005 as a modest shop has grown into one of the most
            trusted names for kitchen appliances, crockery, and gifts in
            Ernakulam district. But some things haven&apos;t changed — we still
            greet every customer like family, still stand behind every product
            we sell, and still believe that good business is about
            relationships, not just transactions.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container-site max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            What Makes Us Different
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {[
              {
                title: "Only Genuine Products",
                desc: "Every item in our store comes directly from authorized distributors. No duplicates, no fakes — guaranteed.",
              },
              {
                title: "Fair & Transparent Pricing",
                desc: "We keep our margins honest. You'll find our prices match or beat online stores — without the wait.",
              },
              {
                title: "Personal Service",
                desc: "Our team knows every product inside out. We'll help you pick the right one for your needs and budget.",
              },
              {
                title: "After-Sale Support",
                desc: "Warranty claims, service support, and exchanges — we handle it all so you don't have to chase brands.",
              },
            ].map((v) => (
              <div key={v.title} className="rounded-xl border border-gray-100 bg-gray-50 p-6">
                <h3 className="text-base font-bold text-gray-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50 py-20">
        <div className="container-site max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Our Journey
          </h2>
          <div className="mt-10 space-y-0">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
                    {m.year.slice(0, 4)}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-brand-200" />
                  )}
                </div>
                <p className="pb-10 pt-2 text-sm leading-relaxed text-gray-600">
                  {m.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-site text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Come Say Hello 👋
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-gray-500">
            We&apos;d love to welcome you to our store. Drop by anytime — no
            appointment needed, just friendly faces and great products.
          </p>
          <a
            href="/visit-us"
            className="mt-6 inline-block rounded-lg bg-brand-600 px-8 py-3.5 text-sm font-bold text-white hover:bg-brand-700"
          >
            Get Directions
          </a>
        </div>
      </section>
    </>
  );
}
