import React from 'react';

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for your message! We'll get back to you soon (not really, this is a demo).");
  };

  return (
    <div className="max-w-xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-pink">
          Get In Touch
        </h1>
        <p className="text-gray-400 mt-2">Have a question or just want to say hi? Drop us a line!</p>
      </div>
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
          <input 
            type="text" 
            id="name" 
            required
            className="w-full bg-gray-700 text-white rounded-md border-gray-600 focus:ring-brand-purple focus:border-brand-purple transition"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
          <input 
            type="email" 
            id="email" 
            required
            className="w-full bg-gray-700 text-white rounded-md border-gray-600 focus:ring-brand-purple focus:border-brand-purple transition"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
          <textarea 
            id="message" 
            rows={5} 
            required
            className="w-full bg-gray-700 text-white rounded-md border-gray-600 focus:ring-brand-purple focus:border-brand-purple transition"
          ></textarea>
        </div>
        <div>
          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-brand-purple to-brand-pink text-white font-bold py-3 px-4 rounded-lg hover:scale-105 transform transition-transform duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
