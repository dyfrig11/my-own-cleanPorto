import React from 'react';
import BIDTikGrid from '../components/BIDTIKGrid';
import image from '../assets/images/imagesProjects/web555.jpg';

const BIDTikGallery = () => {
  return (
    <main className="bg-white font-sans">
        {/* INTRO */}
      <section className="container mx-auto px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-sans text-gray-900">
          Bid.TIK - Kepolisian Republik Indonesia
        </h1>
        <p className="font-mono mt-4 max-w-2xl text-gray-600">
          BID TIK Polri merupakan unit yang mengelola sistem teknologi informasi internal Polri. Dalam proyek ini, dikembangkan sistem web internal menggunakan Laravel dan MySQL yang dilengkapi admin dashboard, fitur manajemen berita (news), dan akses khusus internal untuk mendukung penyampaian informasi serta pengelolaan data secara terpusat, aman, dan efisien.
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
      <BIDTikGrid />

    </main>
  );
};

export default BIDTikGallery;
