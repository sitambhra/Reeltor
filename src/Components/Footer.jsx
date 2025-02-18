import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Reeltor</h2>
          <p className="text-gray-400">Your go-to platform for movie lovers and creators to discover, share, and review the latest films.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#about" className="text-gray-300 hover:text-white">About Us</a></li>
            <li><a href="#contact" className="text-gray-300 hover:text-white">Contact Us</a></li>
            <li><a href="#blog" className="text-gray-300 hover:text-white">Blog</a></li>
            <li><a href="#privacy" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-gray-400 mb-4">Get the latest movie updates and reviews straight to your inbox.</p>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} Reeltor. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
