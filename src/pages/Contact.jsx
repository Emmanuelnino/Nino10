import React from 'react';

const Contact = () => {
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
              <a href="http://127.0.0.1:5500/src/services.html" className="hover:text-blue-500">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 font-bold">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-lg">Name</label>
              <input type="text" className="py-2 px-4 bg-white rounded-lg shadow-md" />
            </div>
            <div className="flex flex-col">
              <label className="text-lg">Email</label>
              <input type="email" className="py-2 px-4 bg-white rounded-lg shadow-md" />
            </div>
            <div className="col-span-2">
              <label className="text-lg">Message</label>
              <textarea rows="6" className="py-2 px-4 bg-white rounded-lg shadow-md"></textarea>
            </div>
            <button
              type="submit"
              className="col-span-2 bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
