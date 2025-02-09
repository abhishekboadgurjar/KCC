import React from 'react';

export default function Clients() {
  return (
    <div id='clients' className="bg-white text-blue-700 p-8 rounded-lg shadow-lg max-w-4xl mx-auto text-center animate-fadeIn">
      <h1 className="text-4xl font-bold text-blue-900 mb-6 animate-slideIn">Our Clients</h1>
      <p className="text-lg mb-6">
        We are proud to collaborate with the **Madhya Pradesh Government** on various infrastructure 
        projects, contributing to the development of roads, highways, and bridges across the state.
      </p>

      {/* Clients Section */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* MP Government */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fadeUp">
          <img 
            src="https://www.developmentaid.org/files/organizationLogos/madhya-pradesh-road-development-corporation-limited-144722.jpg" 
            alt="MP Government Logo" 
            className="w-20 mx-auto mb-4 animate-scaleIn"
          />
          <h2 className="text-2xl font-semibold text-blue-800">MP Government</h2>
          <p className="text-lg mt-2">
            We work on **government-funded projects**, improving the road infrastructure of Madhya Pradesh.
          </p>
        </div>

        {/* Other Public Sector Collaborations */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fadeUp delay-200">
          <img 
            src="https://vajiram-prod.s3.ap-south-1.amazonaws.com/National_Highways_Authority_of_India_NHAI_2b16a244df.jpg" 
            alt="NHAI Logo" 
            className="w-24 mx-auto mb-4 animate-scaleIn"
          />
          <h2 className="text-2xl font-semibold text-blue-800">NHAI</h2>
          <p className="text-lg mt-2">
            We partner with the **National Highways Authority of India (NHAI)** for highway construction projects.
          </p>
        </div>
      </div>
    </div>
  );
}
