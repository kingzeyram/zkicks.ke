import Image from "next/image";
import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Carousel } from "@/components/carousel";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  const heroImage = products.data[0]?.images[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-100">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.04),transparent_60%)] pointer-events-none" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:px-12">

          {/* Text Content */}
          <div className="space-y-6">
            <span className="inline-block rounded-full bg-black/5 px-4 py-1 text-sm font-medium text-neutral-700">
              New Collection 2026
            </span>

            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
              Discover Modern <span className="text-black">Essentials</span>
            </h1>

            <p className="text-lg text-neutral-600 leading-relaxed">
              Premium curated products designed for quality, simplicity, and style.
              Shop confidently with secure checkout.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <Button
                asChild
                className="rounded-full px-8 py-6 text-base shadow-md transition hover:scale-105"
              >
                <Link href="/products">Browse Products</Link>
              </Button>

              <Link
                href="/products"
                className="text-sm font-medium text-neutral-600 hover:text-black transition"
              >
                View featured →
              </Link>
            </div>
          </div>

          {/* Image */}
          {heroImage && (
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-black/5 blur-2xl" />
              <Image
                src={heroImage}
                alt="Featured product"
                width={500}
                height={500}
                className="relative rounded-3xl object-cover shadow-xl"
                unoptimized
              />
            </div>
          )}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-12">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
            Featured Products
          </h2>
          <Link
            href="/products"
            className="text-sm font-medium text-neutral-600 hover:text-black transition"
          >
            View all →
          </Link>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-200">
          <Carousel products={products.data} />
        </div>
      </section>

    </div>
  );
}
