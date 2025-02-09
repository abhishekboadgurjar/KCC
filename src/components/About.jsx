import React from 'react';

export default function About() {
  return (
    <div id='about' className="bg-white text-blue-700 p-8 rounded-lg shadow-lg max-w-2xl mx-auto text-center animate-fadeIn">
      <h1 className="text-3xl font-bold text-blue-900 mb-4 animate-slideIn">About Karada Construction Company</h1>
      <p className="text-lg mb-4 animate-fadeUp">
        Karada Construction Company is a leading road construction company based in Indore. 
        With years of experience in the industry, we specialize in building high-quality roads 
        and bridges that ensure smooth and safe transportation.
      </p>
      <p className="text-lg mb-4 animate-fadeUp delay-200">
        Our company has successfully completed over 100 road and bridge projects, 
        contributing to infrastructure development across various regions. 
        We are committed to excellence, innovation, and sustainability in every project we undertake.
      </p>
      <p className="text-lg animate-fadeUp delay-400">
        At Karada Construction Company, our mission is to build strong and durable roads that 
        enhance connectivity and drive economic growth. We prioritize quality, safety, and 
        customer satisfaction in all our projects.
      </p>
    </div>
  );
}
