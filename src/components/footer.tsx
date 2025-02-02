const Footer = () => {
  return (
    <footer id="footer" className="bg-zinc-900 text-white py-8 text-center">
      <div className="container  mx-auto px-6">
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <form className="mt-4 space-y-4 max-w-md mx-auto">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 " 
            />
            <input
              type="email"
              placeholder="Your Email" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600" 
            />
            <textarea 
              placeholder="Your Message" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600" 
              rows={4}
            />
            <button 
              type="submit" 
              className="w-full py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
        <p className="text-lg font-semibold mt-6">&copy; {new Date().getFullYear()} Turki Al-Saar. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="hover:text-gray-400 duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400 duration-300">Terms of Service</a>
          <a href="#" className="hover:text-gray-400 duration-300">Back To Home</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;