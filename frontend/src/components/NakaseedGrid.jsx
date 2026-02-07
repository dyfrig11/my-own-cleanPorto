import React from 'react';

// import mobile1 from '../assets/images/imagesProjects/mobile1.png';
import web2 from '../assets/images/imagesProjects/web2.png';
import web3 from '../assets/images/imagesProjects/web3.png';
import web4 from '../assets/images/imagesProjects/web4.png';
import video from '../assets/videos/nakaseed.mp4';

// const images = [
//   'https://picsum.photos/1200/800?random=10', // Hero
//   'https://picsum.photos/800/1000?random=11', // Tilted 1
//   'https://picsum.photos/800/1000?random=12', // Tilted 2
//   'https://picsum.photos/800/1000?random=13', // Tilted 3
//   mobile1,  // Small 1
//   'https://picsum.photos/600/400?random=15',  // Small 2
//   'https://picsum.photos/600/400?random=16',  // Small 3
//   'https://picsum.photos/1200/600?random=17', // Full Width Section
// ];

const NakaseedGrid = () => {
  return (
    <section className="w-full pb-32 space-y-24">
      
      {/* 1. HERO SECTION (Full Width Layout) */}
      <div className="container mx-auto px-6 lg:px-8">
        <div className="overflow-hidden rounded-sm bg-gray-100">
          <img 
            src={web2} 
            alt="Main Showcase" 
            className="w-full h-[500px] md:h-[700px] object-cover"
          />
        </div>
      </div>

      {/* 2. TILTED/FLOATING GRID (Seperti bagian tengah gambar) */}
      {/* <div className="bg-[#1a1a1a] py-32 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 transform md:rotate-[-3deg] scale-105">
            {images.slice(1, 4).map((img, i) => (
              <div key={i} className="shadow-2xl border-[12px] border-white bg-white">
                <img 
                  src={img} 
                  alt="Tilted project" 
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* 3. SMALL THUMBNAIL ROW (Tiga gambar kecil sejajar)
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.slice(4, 7).map((img, i) => (
            <div key={i} className="aspect-[4/3] overflow-hidden bg-gray-100">
              <img 
                src={img} 
                alt="Detail view" 
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div> */}

      {/* 4. EDITORIAL SECTION (Gambar besar di bawah dengan teks/padding) */}
      <div className="bg-[#222] py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto overflow-hidden rounded-sm shadow-xl">
            <img 
              src={web4} 
              alt="Deep dive" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        <div className="overflow-hidden rounded-sm bg-gray-100">
          <img 
            src={web3} 
            alt="Main Showcase" 
            className="w-full h-[500px] md:h-[700px] object-cover"
          />
        </div>
      </div>
      
      {/* 5. SINGLE VIDEO SECTION */}
    <div className="container mx-auto px-6 lg:px-8">
    <div className="max-w-4xl mx-auto space-y-6">
        
        <h2 className="text-2xl md:text-3xl font-sans">
        Overview
        </h2>

        <div className="overflow-hidden rounded-sm shadow-xl bg-black">
        <div className="relative aspect-video">
            <iframe
            src={video}
            title="Project Demo Video"
            className="absolute inset-0 w-full h-full"
            allowFullScreen
            />
        </div>
        </div>

        {/* <p className="text-sm text-gray-600">
        Smart Health App — Flutter · UI/UX · System Design
        </p> */}

    </div>
    </div>

    </section>
  );
};

export default NakaseedGrid;