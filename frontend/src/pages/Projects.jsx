import React from 'react';
// import Footer from '../components/Footer';
import images1 from '../assets/images/coverNaka.png';
import images2 from '../assets/images/freastCover.png';
import images3 from '../assets/images/bidTikCover.png';
import images4 from '../assets/images/hiwiCover.png';


// 1. Definisikan data klien di dalam sebuah array agar mudah dikelola
const clientData = [
  {
    name: 'Nakaseed',
    description: 'Connecting farmers, distributors, and buyers with a 24/7 AI chatbot and Shopee integration. Built with React + Vite, TailwindCSS, and PostgreSQL.',
    url: '/NakaseedGallery',
    isInternal: true,
    image: images1,
  },
  {
    name: 'BID TIK - Kepolisian Republik Indonesia',
    description: 'With Laravel & MySQL, this website provides an admin dashboard, news, API Google Maps, and internal access for Indonesian National Police staff, making internal data and information management fast, efficient, and modern.',
    url: '/BIDTikGallery',
    isInternal: true,
    image: images3,
  },
  {
    name: 'Hiwidigi',
    description: 'Built with React for a scalable, component-based UI and TailwindCSS for fast, responsive styling.',
    isInternal: true,
    url: '/HiwidigiGallery',
    image: images4,
  },
  {
    name: 'Freast',
    description: 'Built with HTML and CSS, featuring a responsive carousel for intuitive and interactive product browsing.',
    url: '/FreastGallery',
    isInternal: true,
    image: images2,
  },
];

function Projects() {
  return (
    <main className="font-sans bg-white">
      <div className="container mx-auto px-6 lg:px-8 py-20 md:py-32">
        
        {/* === BAGIAN JUDUL === */}
        <div className="max-w-4xl">
          <h1 className="font-sans text-5xl md:text-6xl font-bold text-gray-900">
            Projects I've Worked On,
          </h1>
          <p className="font-mono text-5xl md:text-6xl text-gray-400">
            Some of them.
          </p>
        </div>

        {/* === BAGIAN GRID KLIEN === */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {/* 2. Gunakan .map() untuk merender setiap klien dari array data */}
          {clientData.map((client) => (
  <div key={client.name} className="font-sans space-y-4">

    {/* Project Name */}
    <h3 className="text-xl font-bold text-gray-800">
      {client.url ? (
        <a
          href={client.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline transition-colors"
        >
          {client.name}
        </a>
      ) : (
        client.name
      )}
    </h3>

    {/* Project Image */}
    {client.image && (
      <div className="w-full overflow-hidden  shadow-sm">
        <img
          src={client.image}
          alt={client.name}
          className="w-full object-cover"
        />
      </div>
    )}

    {/* Description */}
    <p className="font-mono text-base text-gray-600 leading-relaxed">
      {client.description}
    </p>

  </div>
))}

        </div>
      </div>
      {/* <Footer /> */}
    </main>
  );
}

export default Projects;