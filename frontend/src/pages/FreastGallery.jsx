import React from 'react';
import FreastGrid from '../components/FreastGrid.jsx';
import image from '../assets/images/imagesProjects/web44.png';

const FreastGallery = () => {
  return (
    <main className="bg-white font-sans">
        {/* INTRO */}
      <section className="container mx-auto px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-sans text-gray-900">
          Freast
        </h1>
        <p className="font-mono mt-4 max-w-2xl text-gray-600">
          Freast website was built using HTML and CSS, with a carousel component to present products in an interactive and visually engaging way. The final result is a shopping marketplace website that provides a simple, responsive, and intuitive browsing experience for users.
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
      <FreastGrid />

    </main>
  );
};

export default FreastGallery;
