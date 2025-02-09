import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage('');

    try {
      const response = await axios.post('http://localhost:5000/send-email', formData);
      setResponseMessage(response.data.message);
    } catch (error) {
      setResponseMessage('Error sending message. Please try again.');
    }

    setLoading(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div id='contact' className="bg-white text-blue-700 p-8 rounded-lg shadow-lg max-w-4xl mx-auto text-center animate-fadeIn">
      <h1 className="text-4xl font-bold text-blue-900 mb-6 animate-slideIn">Contact Us</h1>
      <p className="text-lg mb-6">
        Get in touch with <strong>Karada Construction Company</strong> for any inquiries regarding road and bridge construction projects. We are happy to assist you!
      </p>

      {/* Contact Details */}
      <div className="grid md:grid-cols-3 gap-6 text-left">
        <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fadeUp">
          <FaPhone className="text-3xl text-blue-700 mb-4 mx-auto animate-bounce" />
          <h2 className="text-2xl font-semibold text-blue-800">Phone</h2>
          <p className="text-lg mt-2">+91 98765 43210</p>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fadeUp delay-200">
          <FaEnvelope className="text-3xl text-blue-700 mb-4 mx-auto animate-bounce" />
          <h2 className="text-2xl font-semibold text-blue-800">Email</h2>
          <p className="text-lg mt-2">contact@karadaconstruction.com</p>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fadeUp delay-400">
          <FaMapMarkerAlt className="text-3xl text-blue-700 mb-4 mx-auto animate-bounce" />
          <h2 className="text-2xl font-semibold text-blue-800">Address</h2>
          <p className="text-lg mt-2">
            Karada Construction Company, <br />
            MG Road, Indore, Madhya Pradesh, India
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-8 animate-fadeIn">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="bg-blue-50 p-6 rounded-lg shadow-md max-w-2xl mx-auto">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="w-full p-3 border border-blue-300 rounded-lg mb-4"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
            className="w-full p-3 border border-blue-300 rounded-lg mb-4"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your Message"
            className="w-full p-3 border border-blue-300 rounded-lg mb-4"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800 transition duration-300"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {responseMessage && <p className="mt-4 text-blue-900">{responseMessage}</p>}
        </form>
      </div>

      {/* Embedded Google Map */}
      <div className="mt-8 animate-fadeIn">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Find Us on the Map</h2>
        <iframe
          title="Company Location"
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
