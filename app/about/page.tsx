import { BadgeCheck, Truck, ShieldCheck, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { stripe } from "@/lib/stripe";




export default async function AboutPage() {
    const products = await stripe.products.list({
        expand: ["data.default_price"],
        limit: 5,
    });

    const heroImage = products.data[0]?.images[0];
    return (
        <div className="bg-white text-gray-900">
            {/* HERO SECTION */}
            <section className="relative bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-24 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        About <span className="text-yellow-400">ZKicks</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-gray-300">
                        Premium sneakers. Timeless style. Built for comfort, crafted for
                        confidence.
                    </p>
                </div>
            </section>

            {/* STORY SECTION */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <Image
                            src={heroImage}
                            alt="ZKicks Store"
                            width={600}
                            height={500}
                            className="rounded-2xl shadow-lg object-cover"
                        />
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Founded in 2026, ZKicks started with one goal — to make premium
                            footwear accessible without compromising on quality. What began
                            as a small sneaker passion project quickly grew into a trusted
                            destination for trendsetters and comfort lovers alike.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Today, we curate the finest collection of sneakers and streetwear
                            footwear designed for everyday wear, performance, and bold
                            expression.
                        </p>
                    </div>
                </div>
            </section>

            {/* STATS SECTION */}
            <section className="bg-gray-50 py-16 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <h3 className="text-3xl font-bold text-black">5,000+</h3>
                        <p className="text-gray-600 mt-2">Happy Customers</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-black">200+</h3>
                        <p className="text-gray-600 mt-2">Sneaker Models</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-black">20+</h3>
                        <p className="text-gray-600 mt-2">Global Brands</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-black">2026</h3>
                        <p className="text-gray-600 mt-2">Year Founded</p>
                    </div>
                </div>
            </section>

            {/* MISSION & VISION */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
                    <div className="p-8 rounded-2xl shadow-md border">
                        <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                        <p className="text-gray-600">
                            To deliver high-quality sneakers that combine style, comfort,
                            and durability — empowering our customers to walk confidently
                            every day.
                        </p>
                    </div>

                    <div className="p-8 rounded-2xl shadow-md border">
                        <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                        <p className="text-gray-600">
                            To become the leading sneaker destination known for authenticity,
                            innovation, and customer-first service worldwide.
                        </p>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="bg-gray-50 py-20 px-6">
                <div className="max-w-6xl mx-auto text-center mb-14">
                    <h2 className="text-3xl font-bold">Why Choose ZKicks?</h2>
                    <p className="text-gray-600 mt-4">
                        We combine quality, style, and service to give you the ultimate
                        shopping experience.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
                    <div className="p-6 bg-white rounded-2xl shadow-sm">
                        <BadgeCheck className="mx-auto mb-4 text-black" size={40} />
                        <h4 className="font-semibold mb-2">Authentic Products</h4>
                        <p className="text-gray-600 text-sm">
                            100% genuine sneakers sourced directly from trusted brands.
                        </p>
                    </div>

                    <div className="p-6 bg-white rounded-2xl shadow-sm">
                        <Truck className="mx-auto mb-4 text-black" size={40} />
                        <h4 className="font-semibold mb-2">Fast Delivery</h4>
                        <p className="text-gray-600 text-sm">
                            Quick and secure shipping right to your doorstep.
                        </p>
                    </div>

                    <div className="p-6 bg-white rounded-2xl shadow-sm">
                        <ShieldCheck className="mx-auto mb-4 text-black" size={40} />
                        <h4 className="font-semibold mb-2">Secure Payments</h4>
                        <p className="text-gray-600 text-sm">
                            Safe and encrypted checkout experience.
                        </p>
                    </div>

                    <div className="p-6 bg-white rounded-2xl shadow-sm">
                        <Sparkles className="mx-auto mb-4 text-black" size={40} />
                        <h4 className="font-semibold mb-2">Premium Quality</h4>
                        <p className="text-gray-600 text-sm">
                            Carefully curated collections for style and comfort.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="bg-black text-white py-20 px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Step Into Style with ZKicks
                </h2>
                <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                    Discover your next favorite pair and elevate your sneaker game today.
                </p>
                <Link
                    href="/products"
                    className="inline-block bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full hover:bg-yellow-300 transition"
                >
                    Shop Now
                </Link>
            </section>
        </div>
    );
}
