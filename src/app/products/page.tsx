import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse kitchen appliances, crockery, glassware, utensils, and gift items at Vembady, Thoppumpady, Kochi.",
};

const categories = [
  { name: "Mixer Grinders", mal: "മിക്സർ ഗ്രൈൻഡർ", img: "https://images.unsplash.com/photo-1622818426197-d54f85b88690?w=600&h=600&fit=crop" },
  { name: "Pressure Cookers", mal: "പ്രഷർ കുക്കർ", img: "https://images.unsplash.com/flagged/photo-1571902241554-82ec31087fe3?w=600&h=600&fit=crop" },
  { name: "Gas Stoves", mal: "ഗ്യാസ് സ്റ്റൗ", img: "https://images.unsplash.com/photo-1629234358103-5b5ee53ece9c?w=600&h=600&fit=crop" },
  { name: "Dinner Sets", mal: "ഡിന്നർ സെറ്റ്", img: "https://images.unsplash.com/photo-1614548540093-6f7dfceed46b?w=600&h=600&fit=crop" },
  { name: "Glassware", mal: "ഗ്ലാസ്‌വെയർ", img: "https://images.unsplash.com/photo-1534616042650-80f5c9b61f09?w=600&h=600&fit=crop" },
  { name: "Utensils", mal: "പാത്രങ്ങൾ", img: "https://images.unsplash.com/photo-1598305420414-f1b90cd687b4?w=600&h=600&fit=crop" },
  { name: "Non-Stick Cookware", mal: "നോൺ-സ്റ്റിക്ക്", img: "https://images.unsplash.com/photo-1512058533999-106ee01bf777?w=600&h=600&fit=crop" },
  { name: "Flasks & Bottles", mal: "ഫ്ലാസ്ക്", img: "https://images.unsplash.com/photo-1649867219867-3faeab653df9?w=600&h=600&fit=crop" },
  { name: "Crockery", mal: "ക്രോക്കറി", img: "https://images.unsplash.com/photo-1532360434733-5692eda564a1?w=600&h=600&fit=crop" },
  { name: "Home Appliances", mal: "ഹോം അപ്ലയൻസസ്", img: "https://images.unsplash.com/photo-1748408082799-94daff13e792?w=600&h=600&fit=crop" },
  { name: "Gift Items", mal: "സമ്മാനങ്ങൾ", img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&h=600&fit=crop" },
  { name: "Wedding Gifts", mal: "വിവാഹ സമ്മാനങ്ങൾ", img: "https://images.unsplash.com/photo-1635874714425-c342060a4c58?w=600&h=600&fit=crop" },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-50 pb-12 pt-28">
        <div className="container-site">
          <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-widest text-brand-600">
            ഞങ്ങളുടെ ഉൽപ്പന്നങ്ങൾ
          </span>
          <h1 className="text-3xl font-extrabold text-gray-900 md:text-5xl">
            Our Products
          </h1>
          <p className="mt-3 max-w-xl text-base text-gray-500">
            Everything your kitchen and home needs — from everyday essentials to
            premium gifts. All genuine, all at great prices.
          </p>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-16">
        <div className="container-site">
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <Image
                    src={cat.img}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 text-center">
                  <h2 className="text-sm font-bold text-gray-900">
                    {cat.name}
                  </h2>
                  <p className="mt-0.5 text-xs text-gray-400">{cat.mal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "#d93832" }}>
        <div className="container-site text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Want to See These Products?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-white/70">
            Visit our store to see the full range, compare products side by
            side, and get expert advice from our team.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="tel:+919876543210"
              className="rounded-lg bg-white px-8 py-3 text-sm font-bold text-brand-600 hover:bg-gray-100"
            >
              Call to Check Stock
            </a>
            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20know%20about%20your%20products"
              className="rounded-lg border-2 border-white/40 px-8 py-3 text-sm font-bold text-white hover:border-white"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
