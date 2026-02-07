import React from 'react';
import TravelCard from '../components/TravelCard';
import Projects from '../components/ProjectsDyfrigDid';
import AboutSection from '../components/AboutSection';
import WorkWithMe from '../components/WorkWithMe';
import ProjectsShowcase from '../components/ProjectsShowcase';

const HomePage = () => {
  return (
    <main>
      
      {/* BAGIAN 1: Kontainer untuk Teks dan TravelCard */}
      {/* Kontainer ini berisi dua kolom dan tingginya satu layar penuh */}
      <section className="flex flex-col lg:flex-row min-h-screen bg-white">
        
        {/* Kolom Kiri (untuk Teks) */}
        <div className="flex-1 flex flex-col justify-center p-8 lg:p-24">
          <div className="text-5xl md:text-6xl text-gray-900 text-left">
            <p>
              "It's <span className="font-bold">simple</span>, it's
            </p>
            <p>
              <span className="font-bold">efficient</span>, it's
            </p>
            <p>
              <span className="font-bold">professional</span>."
            </p>
            {/* <p className="font-bold">
              professional,
            </p>              */}
            <p>
              <span className="font-bold">- Dyfrig Nicholas</span>
            </p>
          </div>
        </div>

        {/* Kolom Kanan (untuk TravelCard) */}
        <div className="flex-1">
          <TravelCard />
        </div>
      
      </section>
      <Projects />
      <ProjectsShowcase />
      <AboutSection />
      <WorkWithMe />
      {/* <ClientLogos />
      <FeatureShowcase />
      <AboutSection />
      <Certificates />
      <Footer /> */}
    </main> 
  );
};

export default HomePage;