export default function HomePage() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-2xl mx-auto text-center">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 mb-4">
          Next.js Workshop
        </h1>
        <p className="text-xl font-medium text-gray-700 leading-relaxed mb-6">
          Master Next.js with hands-on learning. Presented by <strong>Julian Köser</strong> and <strong>Kenan Sen</strong>.
        </p>
        <div className="mb-8 text-gray-600">
          <p className="font-semibold">Module: ESD</p>
          <p className="font-semibold">Fontys Venlo</p>
          <p className="font-semibold">9 December 2024</p>
        </div>
        <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-bold rounded-lg shadow-lg hover:shadow-2xl hover:from-purple-600 hover:to-blue-700 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
}
