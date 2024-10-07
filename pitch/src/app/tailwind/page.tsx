// src/app/tailwind-example/page.tsx

export default function TailwindExample() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col items-center justify-start text-white p-10">
      <h1 className="text-5xl font-extrabold mb-8 drop-shadow-lg">
        Tailwind CSS Showcase
      </h1>
      <p className="text-lg mb-10 text-center max-w-3xl leading-relaxed">
        Explore the power of Tailwind CSS with this showcase, featuring
        gradients, animations, shadows, responsive grids, and interactive
        elements—all built with utility-first classes.
      </p>

      {/* Showcase Section */}
      <div className="w-full max-w-6xl">
        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Card 1 */}
          <div className="bg-white text-gray-800 rounded-xl shadow-lg p-6 transition transform hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold mb-3">Responsive Grid</h3>
            <p className="text-base leading-relaxed">
              This card showcases how Tailwind’s responsive grid system works,
              adjusting from one column to three based on screen size.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white text-gray-800 rounded-xl shadow-lg p-6 transition transform hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold mb-3">Hover Effects</h3>
            <p className="text-base leading-relaxed">
              Hover over this card to see a subtle shadow and elevation effect,
              demonstrating Tailwind’s transform utilities.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white text-gray-800 rounded-xl shadow-lg p-6 transition transform hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold mb-3">Custom Buttons</h3>
            <p className="text-base leading-relaxed">
              Tailwind allows for custom button designs with hover and focus
              states for interactive and accessible UI elements.
            </p>
          </div>
        </div>

        {/* Interactive Button Section */}
        <div className="flex flex-col items-center mb-12">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-full transition transform hover:scale-105 shadow-lg hover:shadow-xl mb-6">
            Hover Me!
          </button>
          <button className="bg-white text-green-500 border-2 border-green-500 font-semibold py-3 px-6 rounded-full hover:bg-green-500 hover:text-white transition duration-300 mb-6">
            Another Button
          </button>
        </div>

        {/* Image and Animation Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
          <div className="flex-shrink-0 mb-6 lg:mb-0">
            <div className="relative w-64 h-64 bg-gradient-to-br from-yellow-400 to-red-500 rounded-full overflow-hidden shadow-lg animate-pulse">
              <img
                src="/images/photo1.jpg"
                alt="Animated Sample Image"
                className="object-cover w-full h-full rounded-full"
              />
            </div>
          </div>
          <div className="text-center lg:text-left max-w-lg ml-0 lg:ml-10">
            <h2 className="text-3xl font-bold mb-3">Animated Elements</h2>
            <p className="text-lg leading-relaxed">
              With Tailwind’s built-in animations, you can easily create
              eye-catching effects like this pulsing image animation.
            </p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center mb-12">
          <h3 className="text-3xl font-bold mb-4">
            Get Started with Tailwind CSS
          </h3>
          <p className="text-lg text-center max-w-md mb-6">
            Tailwind CSS is a powerful tool for building responsive, modern UIs.
            With its utility-first approach, you can quickly style components
            with ease.
          </p>
          <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
