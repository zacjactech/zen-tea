import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative h-[600px]">
      <Image
        src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
        alt="Tea leaves"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Discover the Art of Tea</h1>
        <p className="text-xl mb-8 max-w-2xl">Immerse yourself in the world of premium teas, carefully curated for the perfect brew.</p>
        <Button size="lg" className="bg-green-600 hover:bg-green-700">
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default Hero;