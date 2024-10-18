import Link from 'next/link';
import { ShoppingCart, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-800">Zen Leaf Teas</Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-green-800">Home</Link>
          <Link href="/shop" className="text-gray-600 hover:text-green-800">Shop</Link>
          <Link href="/about" className="text-gray-600 hover:text-green-800">About</Link>
          <Link href="/contact" className="text-gray-600 hover:text-green-800">Contact</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-6 w-6 text-gray-600" />
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;