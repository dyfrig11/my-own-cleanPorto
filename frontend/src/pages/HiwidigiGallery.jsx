import React from 'react';
import HiwidigiGrid from '../components/HiwidigiGrid.jsx';
import image from '../assets/images/imagesProjects/web300.png';

const HiwidigiGallery = () => {
  return (
    <main className="bg-white font-sans">
        {/* INTRO */}
      <section className="container mx-auto px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-sans text-gray-900">
          Hiwidigi
        </h1>
        <p className="font-mono mt-4 max-w-2xl text-gray-600">
          As a result, the final website delivers a fast, clean, and professional company profile that effectively presents services, strengthens brand identity, and improves overall user experience.
        </p>
      </section>

      {/* HERO IMAGE */}
      <section className="w-full">
        <img
          src={image}
          alt="Project Hero"
          className="w-full h-[70vh] object-cover"
        />
      </section>

      {/* GALLERY GRID */}
      <div className="h-16"></div>
      <HiwidigiGrid />

    </main>
  );
};

export default HiwidigiGallery;
