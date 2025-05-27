import React from 'react';

const AboutPage = () => (
  <div className="min-h-[60vh] flex flex-col justify-center items-center bg-white/90 rounded-xl shadow p-8 mt-12">
    <h2 className="text-3xl font-bold mb-4 text-teal-700">About This Project</h2>
    <p className="mb-8 text-gray-800 text-lg max-w-xl text-center">
      This is a demo project for a Communication Style Quiz. It helps users discover their preferred communication style and learn how to connect better with others. Built with React and Tailwind CSS, and designed for a modern, accessible, and responsive experience.
    </p>
    <p className="text-gray-600">Created by a passionate UX engineer. (Fake data for now.)</p>
  </div>
);

export default AboutPage;