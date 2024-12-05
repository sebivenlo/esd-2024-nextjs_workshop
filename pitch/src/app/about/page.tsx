// src/app/about/page.tsx

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-8">
      <div className="bg-white/90 rounded-lg shadow-lg p-10 max-w-4xl w-full">
        <h1 className="text-5xl font-bold text-center mb-6 text-blue-800">
          About Us
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Welcome to the Enterprise Software Development course! We are a team
          of passionate developers and educators dedicated to equipping students
          with the skills needed to thrive in the tech industry. Our program
          covers a wide range of technologies and development practices,
          focusing on real-world applications and best practices.
        </p>
        <div className="bg-gradient-to-r from-blue-400 to-purple-500 text-white p-6 rounded-lg mb-8">
          <h2 className="text-3xl font-semibold mb-4">Meet the Students</h2>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-lg">Julian KÖSER</li>
            <li className="text-lg">Kenan SEN</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
