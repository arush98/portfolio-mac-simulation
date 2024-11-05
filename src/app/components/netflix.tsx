import React, { useState } from 'react';

export default function Netflix() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const features = [
    {
      title: "Enjoy on your TV.",
      description: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      imgSrc: "/png/feature-1.png",
      reverse: false,
    },
    {
      title: "Download your shows to watch offline",
      description: "Save your favourites easily and always have something to watch.",
      imgSrc: "/png/feature-2.png",
      reverse: true,
    },
    {
      title: "Watch Everywhere.",
      description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      imgSrc: "/png/feature-3.png",
      reverse: false,
    },
    {
      title: "Create profiles for children.",
      description: "Send children on adventures with their favourite characters in a space made just for them - free with your membership.",
      imgSrc: "/png/feature-4.png",
      reverse: true,
    },
  ];

  const questions = [
    { question: "What is Netflix?", answer: "Netflix is a popular subscription-based streaming service that offers a wide variety of movies, TV shows, documentaries, and other entertainment content over the internet." },
    { question: "How much does it cost?", answer: "Netflix provides its subscribers with a vast library of content that can be streamed on various devices." },
    { question: "Where can I watch?", answer: "Netflix is accessible on many devices, including smartphones, tablets, and smart TVs." },
    { question: "How do I cancel?", answer: "You can cancel your subscription anytime directly through your account settings on Netflix." },
  ];

  return (
    <div className="bg-black text-white">
      {/* Header Section with darker overlay */}
      <header className="w-full h-screen relative">
        {/* Background image with darker overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/png/header-image.png")' }}
        />
        <div className="absolute inset-0 bg-black/80" /> {/* Darker overlay */}
        
        <nav className="relative z-10 flex items-center justify-between px-8 py-4">
          <img src="/png/logo.png" className="w-36 cursor-pointer" alt="Netflix Logo" />
          <div>
            <button className="inline-flex items-center border border-white px-4 py-2 rounded text-white text-xs hover:bg-white/20 transition-colors">
              English <img src="/png/down-icon.png" className="w-4 ml-2" alt="Down icon" />
            </button>
            <button className="ml-4 bg-red-600 hover:bg-red-700 transition-colors text-white px-5 py-2 rounded text-xs">Sign In</button>
          </div>
        </nav>

        <div className="relative z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center mt-24">
          <h1 className="text-4xl md:text-6xl font-bold max-w-2xl mx-auto">Unlimited movies, TV shows and more.</h1>
          <h3 className="mt-4 text-xl">Watch anywhere. Cancel anytime.</h3>
          <p className="mt-6 text-lg">Ready to watch? Enter your email to create or restart your membership</p>
          <form className="flex mt-6 bg-white rounded-lg overflow-hidden max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Email address" 
              required 
              className="flex-grow px-4 py-4 border-0 outline-none text-black" 
            />
            <button type="submit" className="bg-red-600 hover:bg-red-700 transition-colors text-white px-8 py-4 text-lg font-semibold">
              Get Started
            </button>
          </form>
        </div>
      </header>

      {/* Features Section */}
      <section className="px-12 py-20 text-lg">
        {features.map((feature, index) => (
          <div 
            className={`flex flex-wrap items-center ${feature.reverse ? 'flex-row-reverse' : ''} mb-24`} 
            key={index}
          >
            <div className="flex-1 mb-4 px-8">
              <h2 className="text-4xl font-bold mb-6">{feature.title}</h2>
              <p className="text-xl">{feature.description}</p>
            </div>
            <div className="flex-1">
              <img src={feature.imgSrc} className="w-full mx-auto" alt={feature.title} />
            </div>
          </div>
        ))}
      </section>

      {/* Improved FAQ Section with controlled accordion */}
      <section className="px-12 py-16 text-center">
        <h2 className="text-4xl font-bold mb-12">Frequently Asked Questions</h2>
        <div className="w-full max-w-3xl mx-auto space-y-4">
          {questions.map((item, index) => (
            <div key={index} className="text-left">
              <button
                onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                className="w-full p-6 bg-gray-800 hover:bg-gray-700 transition-colors flex justify-between items-center cursor-pointer rounded-lg"
              >
                <span className="text-xl">{item.question}</span>
                <span className={`transform transition-transform duration-300 text-2xl ${openQuestion === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openQuestion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 bg-gray-700 mt-1 rounded-lg">
                  <p className="text-lg">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <small className="block text-lg mb-4">Ready to watch? Enter your email to create or restart your membership.</small>
          <form className="flex mt-4 bg-white rounded-lg overflow-hidden max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Email address" 
              required 
              className="flex-grow px-4 py-4 border-0 outline-none text-black" 
            />
            <button type="submit" className="bg-red-600 hover:bg-red-700 transition-colors text-white px-8 py-4 text-lg font-semibold">
              Get Started
            </button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="px-12 py-16 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-lg mb-8">Questions? Call 000-000-000</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {["FAQ", "Investor Relations", "Privacy", "Speed Test", "Help Center", "Jobs", "Cookie Preferences", "Legal Notice"].map((link, index) => (
              <a 
                href="#" 
                key={index} 
                className="text-gray-400 hover:text-gray-300 transition-colors text-sm"
              >
                {link}
              </a>
            ))}
          </div>
          <button className="inline-flex items-center border border-gray-600 hover:border-gray-400 transition-colors px-4 py-2 rounded-lg">
            English <img src="/png/down-icon.png" className="w-4 ml-2" alt="Language toggle" />
          </button>
          <p className="text-gray-500 mt-8 text-sm">Netflix Clone by Arush</p>
        </div>
      </footer>
    </div>
  );
}