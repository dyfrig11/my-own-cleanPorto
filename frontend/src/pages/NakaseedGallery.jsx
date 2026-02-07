import React from 'react';
import NakaseedGrid from '../components/NakaseedGrid';
import images from '../assets/images/imagesProjects/web1.png';

const NakaseedGallery = () => {
  return (
    <main className="bg-white font-sans">

        {/* INTRO */}
      <section className="container mx-auto px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-sans text-gray-900">
          Nakaseed
        </h1>
        <p className="font-mono mt-4 max-w-2xl text-gray-600">
          Nakaseed adalah marketplace digital untuk produk pertanian yang menghubungkan petani, distributor, dan pembeli. Dengan chatbot AI 24/7, integrasi mudah ke Shopee,
        </p>
      </section>

      {/* HERO IMAGE */}
      <section className="w-full">
        <img
          src={images}
          alt="Project Hero"
          className="w-full h-[70vh] object-cover"
        />
      </section>

      {/* GALLERY GRID */}
      <div className="h-16"></div>
      <NakaseedGrid />

    </main>
  );
};

export default NakaseedGallery;
