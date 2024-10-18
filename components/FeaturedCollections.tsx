import Image from 'next/image';
import { Button } from '@/components/ui/button';

const collections = [
  {
    name: 'Green Tea Collection',
    image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
  {
    name: 'Herbal Infusions',
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
  {
    name: 'Black Tea Classics',
    image: 'https://images.unsplash.com/photo-1610137312679-8cfc4227e106?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
];

const FeaturedCollections = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-800">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src={collection.image}
                alt={collection.name}
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center">
                  <h3 className="text-white text-2xl font-bold mb-4">{collection.name}</h3>
                  <Button variant="secondary">Explore</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;