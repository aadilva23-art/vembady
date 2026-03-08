import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visit Us",
  description:
    "Find Vembady kitchen store at Thoppumpady, Kochi. Store hours, phone, WhatsApp, and directions.",
};

const hours = [
  { day: "Monday – Saturday", time: "9:00 AM – 9:00 PM" },
  { day: "Sunday", time: "9:00 AM – 9:00 PM" },
  { day: "Public Holidays", time: "9:00 AM – 9:00 PM" },
];

export default function VisitUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-50 pb-12 pt-28">
        <div className="container-site">
          <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-widest text-brand-600">
            ഞങ്ങളെ സന്ദർശിക്കൂ
          </span>
          <h1 className="text-3xl font-extrabold text-gray-900 md:text-5xl">
            Visit Our Store
          </h1>
          <p className="mt-3 max-w-xl text-base text-gray-500">
            We&apos;re located in the heart of Thoppumpady, Kochi. Drop in
            anytime during store hours — we&apos;d love to help you find what
            you need.
          </p>
        </div>
      </section>

      {/* Info Grid */}
      <section className="py-16">
        <div className="container-site">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Address */}
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-100 text-sm">
                  📍
                </span>
                Store Address
              </h2>
              <div className="mt-4 text-sm leading-relaxed text-gray-600">
                <p className="font-semibold text-gray-800">Vembady Gift &amp; Crockeries</p>
                <p>Vembady Building, Opp. Bus Stop</p>
                <p>NH-66, Aroor–Thoppumpady Rd</p>
                <p>Thoppumpady, Kochi, Kerala 682005</p>
              </div>
              <a
                href="https://www.google.com/maps/search/Vembady+Gift+and+Crockeries+Thoppumpady+Kochi"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
              >
                Open in Google Maps
              </a>
            </div>

            {/* Hours */}
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-100 text-sm">
                  🕐
                </span>
                Opening Hours
              </h2>
              <div className="mt-4 space-y-3">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex items-center justify-between border-b border-gray-50 pb-3 last:border-0"
                  >
                    <span className="text-sm text-gray-600">{h.day}</span>
                    <span className="text-sm font-semibold text-gray-900">
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone */}
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-100 text-sm">
                  📞
                </span>
                Phone
              </h2>
              <p className="mt-4 text-sm text-gray-500">
                Call us to check product availability, prices, or to place an
                order for pickup.
              </p>
              <a
                href="tel:+919876543210"
                className="mt-4 inline-block text-xl font-bold text-brand-600 hover:text-brand-700"
              >
                +91 98765 43210
              </a>
            </div>

            {/* WhatsApp */}
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100 text-sm">
                  💬
                </span>
                WhatsApp
              </h2>
              <p className="mt-4 text-sm text-gray-500">
                Send us a message anytime. Share a photo of what you&apos;re
                looking for and we&apos;ll find it for you.
              </p>
              <a
                href="https://wa.me/919876543210?text=Hi%20Vembady%2C%20I%20have%20a%20query"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-lg bg-green-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-green-700"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-16">
        <div className="container-site">
          <div className="overflow-hidden rounded-2xl border border-gray-200">
            <iframe
              src="https://maps.google.com/maps?q=Vembady+Gifts+and+Crockeries+Thoppumpady+Kochi&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vembady Gift &amp; Crockeries - Thoppumpady, Kochi"
              className="w-full"
            />
          </div>
          <p className="mt-3 text-center text-xs text-gray-400">
            Vembady Gift &amp; Crockeries — Opp. Bus Stop, Thoppumpady Junction, NH-66
          </p>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="bg-brand-600 py-14">
        <div className="container-site text-center">
          <h2 className="text-2xl font-bold text-white">
            We&apos;re Waiting to Welcome You
          </h2>
          <p className="mt-2 text-sm text-white/70">
            Drop by anytime — no appointment needed. Our team is always happy
            to help.
          </p>
          <a
            href="tel:+919876543210"
            className="mt-6 inline-block rounded-lg bg-white px-8 py-3 text-sm font-bold text-brand-600 hover:bg-gray-100"
          >
            Call Before You Visit
          </a>
        </div>
      </section>
    </>
  );
}
