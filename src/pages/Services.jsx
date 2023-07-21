import React from 'react';

const Services = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-800 text-white min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">
          <a href="#git" className="flex items-center">
            <img src="../img/stone.jpeg" alt="Logo" className="w-8 h-8 mr-2" />
            <span className="text-4xl text-blue-500 font-bold"></span>
          </a>
          <ul className="flex space-x-4">
            <li>
              <a href="http://127.0.0.1:5500/src/index.html" className="hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="http://127.0.0.1:5500/src/about.html" className="hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 font-bold">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Service Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8">Our Services</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Item 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-32 mb-4 bg-blue-500 rounded-lg"></div>
              <h2 className="text-2xl font-bold mb-2">Music Production</h2>
              <p className="text-lg">We offer professional music production services with top-notch quality.</p>
              <a href="#" className="block mt-4 text-blue-500 font-bold hover:underline">
                Learn More
              </a>
            </div>

            {/* Service Item 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-32 mb-4 bg-blue-500 rounded-lg"></div>
              <h2 className="text-2xl font-bold mb-2">Song Distribution</h2>
              <p className="text-lg">Distribute your music to various platforms and reach a broader audience.</p>
              <a href="#" className="block mt-4 text-blue-500 font-bold hover:underline">
                Learn More
              </a>
            </div>

            {/* Service Item 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-32 mb-4 bg-blue-500 rounded-lg"></div>
              <h2 className="text-2xl font-bold mb-2">Artist Management</h2>
              <p className="text-lg">Our experienced team provides artist management services to help you grow in the industry.</p>
              <a href="#" className="block mt-4 text-blue-500 font-bold hover:underline">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
