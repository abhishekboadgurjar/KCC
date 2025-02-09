import React from 'react';

export default function Projects() {
  return (
    <div id='projects' className="bg-white text-blue-700 p-8 rounded-lg shadow-lg max-w-4xl mx-auto text-center animate-fadeIn">
      <h1 className="text-4xl font-bold text-blue-900 mb-6 animate-slideIn">Our Projects</h1>
      <p className="text-lg mb-6">
        At Karada Construction Company, we take pride in delivering high-quality road and bridge projects.
        Our work enhances transportation networks, improves connectivity, and ensures safe travel for all.
      </p>

      {/* Project Showcase */}
      <div className="space-y-6">
        {/* Road Projects */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fadeUp">
          <h2 className="text-2xl font-semibold text-blue-800">Road Construction Projects</h2>
          <p className="text-lg mt-2">
            We have successfully completed the construction of highways, urban roads, and rural roads,
            ensuring durability and smooth transportation.
          </p>
        </div>

        {/* Bridge Projects */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fadeUp delay-200">
          <h2 className="text-2xl font-semibold text-blue-800">Bridge Construction Projects</h2>
          <p className="text-lg mt-2">
            Our bridges are built to the highest standards, providing strong and safe connections 
            over rivers, highways, and railway tracks.
          </p>
        </div>
      </div>

      {/* Embedded Map */}
      <div className="mt-8 animate-fadeIn">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Road & Bridge Locations</h2>
        <iframe 
          title="Road and Bridge Map"
          className="w-full h-80 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.1348206246836!2d75.85772587487254!3d22.709568528076692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcf3c41ffb7d%3A0x32f9e2e9c11f7e6e!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1692765123456!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
