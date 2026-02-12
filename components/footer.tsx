import Link from "next/link";
import { Instagram, Twitter, Facebook, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* BRAND */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">
                            Z<span className="text-yellow-400">Kicks.ke</span>
                        </h2>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Premium sneakers crafted for comfort, confidence, and everyday
                            style. Elevate your step with ZKicks.
                        </p>

                        {/* SOCIALS */}
                        <div className="flex gap-4 mt-6">
                            <Link href="#" className="hover:text-yellow-400 transition">
                                <Instagram size={20} />
                            </Link>
                            <Link href="#" className="hover:text-yellow-400 transition">
                                <Twitter size={20} />
                            </Link>
                            <Link href="#" className="hover:text-yellow-400 transition">
                                <Facebook size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* SHOP LINKS */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Shop</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/products" className="hover:text-yellow-400 transition">
                                    All Sneakers
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="hover:text-yellow-400 transition">
                                    New Arrivals
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="hover:text-yellow-400 transition">
                                    Best Sellers
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="hover:text-yellow-400 transition">
                                    On Sale
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* COMPANY */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/about" className="hover:text-yellow-400 transition">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-yellow-400 transition">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-yellow-400 transition">
                                    FAQs
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-yellow-400 transition">
                                    Returns Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* NEWSLETTER */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">
                            Join Our Newsletter
                        </h3>
                        <p className="text-sm text-gray-400 mb-4">
                            Get exclusive drops, updates, and special offers.
                        </p>

                        <form className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 rounded-md bg-gray-900 border border-gray-700 text-sm focus:outline-none focus:border-yellow-400"
                            />
                            <button
                                type="submit"
                                className="bg-yellow-400 text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-300 transition"
                            >
                                Subscribe
                            </button>
                        </form>

                        <div className="flex items-center gap-2 mt-6 text-sm text-gray-400">
                            <Mail size={16} />
                            zkicks642@gmail.com
                        </div>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} ZKicks.ke. All rights reserved.</p>

                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/about" className="hover:text-yellow-400 transition">
                            Privacy Policy
                        </Link>
                        <Link href="/about" className="hover:text-yellow-400 transition">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
