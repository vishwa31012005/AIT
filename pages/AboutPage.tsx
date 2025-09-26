
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-pink">
        About Adheeban Info Tech
      </h1>
      <div className="space-y-6 text-gray-300 leading-relaxed">
        <p>
          Welcome to Adheeban Info Tech, where technology meets style. Born from a passion for innovation and a deep understanding of what the digital generation needs, we're not just another tech accessory store. We are a statement. A vibe. A community.
        </p>
        <p>
          Our journey began in a small dorm room, fueled by late-night coding sessions and a simple idea: mobile accessories should be as expressive and unique as the people who use them. We were tired of the boring, one-size-fits-all products dominating the market. We knew we could do better.
        </p>
        <p>
          At Adheeban Info Tech, we meticulously curate and design products that don't just protect your devices—they elevate them. From holographic cases that shift with the light to power banks that pack a punch, every item in our collection is crafted for performance, durability, and undeniable cool-factor.
        </p>
        <p>
          We're more than a brand; we're a movement. Join us in redefining the future of mobile accessories.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
