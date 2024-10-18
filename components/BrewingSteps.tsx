import { Coffee, Thermometer, Clock, Droplet } from 'lucide-react';

const steps = [
  {
    icon: <Coffee className="h-8 w-8 text-green-600" />,
    title: 'Choose Your Tea',
    description: 'Select from our premium collection of loose leaf teas.',
  },
  {
    icon: <Thermometer className="h-8 w-8 text-green-600" />,
    title: 'Heat Water',
    description: 'Bring fresh water to the ideal temperature for your chosen tea.',
  },
  {
    icon: <Clock className="h-8 w-8 text-green-600" />,
    title: 'Steep',
    description: 'Allow the tea to steep for the recommended time to extract optimal flavor.',
  },
  {
    icon: <Droplet className="h-8 w-8 text-green-600" />,
    title: 'Enjoy',
    description: 'Savor the aroma and taste of your perfectly brewed cup of tea.',
  },
];

const BrewingSteps = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-800">The Art of Brewing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 p-4 bg-green-100 rounded-full">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrewingSteps;