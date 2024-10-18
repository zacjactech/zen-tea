import Image from 'next/image';
import { Button } from '@/components/ui/button';

const seasonalTeas = [
  {
    name: 'Summer Breeze Green Tea',
    description: 'A refreshing blend with hints of citrus and mint.',
    image: 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    price: '$12.99',
  },
  {
    name: 'Autumn Spice Chai',
    description: 'Warm spices perfect for cozy fall evenings.',
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    price: '$14.99',
  },
];

const SeasonalSpecials = () => {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-800">Seasonal Specials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {seasonalTeas.map((tea, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={tea.image}
                  alt={tea.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{tea.name}</h3>
                <p className="text-gray-600 mb-4">{tea.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-green-600">{tea.price}</span>
                  <Button>Add to Cart</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeasonalSpecials;