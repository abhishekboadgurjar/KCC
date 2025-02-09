import React from 'react';

export default function Services() {
  return (
    <div id='services' className="bg-white text-blue-700 p-8 rounded-lg shadow-lg max-w-3xl mx-auto text-center animate-fadeIn">
      <h1 className="text-4xl font-bold text-blue-900 mb-6 animate-slideIn">Our Services</h1>

      <div className="space-y-6">
        {/* Road Construction Service */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fadeUp">
          <h2 className="text-2xl font-semibold text-blue-800">Road Construction</h2>
          <p className="text-lg mt-2">
            We specialize in constructing high-quality, durable roads using advanced 
            materials and technology to ensure smooth and long-lasting infrastructure.
          </p>
        </div>

        {/* Bridge Construction Service */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fadeUp delay-200">
          <h2 className="text-2xl font-semibold text-blue-800">Bridge Construction</h2>
          <p className="text-lg mt-2">
            Our expertise in bridge construction helps connect communities with safe, 
            strong, and well-designed structures that stand the test of time.
          </p>
        </div>
      </div>
    </div>
  );
}
