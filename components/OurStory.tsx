import Image from 'next/image';

const OurStory = () => {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="https://images.unsplash.com/photo-1531970227416-f0cddeb1f748?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Tea plantation"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-4 text-green-800">Our Story</h2>
            <p className="text-gray-700 mb-4">
              At Zen Leaf Teas, our journey began with a simple passion for exceptional tea. Founded by tea enthusiasts, we've dedicated ourselves to sourcing the finest leaves from around the world, ensuring each cup tells a story of tradition, quality, and craftsmanship.
            </p>
            <p className="text-gray-700 mb-4">
              From misty mountain slopes to lush valleys, we travel the globe to bring you authentic flavors and aromas. Our commitment to sustainability and ethical sourcing means you can enjoy your tea knowing it's been responsibly cultivated and harvested.
            </p>
            <p className="text-gray-700">
              Join us in our mission to elevate the art of tea drinking, one cup at a time. Experience the Zen Leaf difference – where every sip is a journey to tranquility and flavor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;