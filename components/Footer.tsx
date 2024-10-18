import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Zen Leaf Teas</h3>
            <p className="text-sm">Discover the art of tea with our carefully curated collection of premium teas from around the world.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/shop" className="hover:underline">Shop</Link></li>
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm">123 Tea Lane, Leaf City, TC 12345</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
            <p className="text-sm">Email: info@zenleafteas.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-300"><Facebook /></a>
              <a href="#" className="hover:text-green-300"><Twitter /></a>
              <a href="#" className="hover:text-green-300"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-green-700 text-center text-sm">
          &copy; {new Date().getFullYear()} Zen Leaf Teas. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;