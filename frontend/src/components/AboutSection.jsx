import React from 'react';
import { motion } from "framer-motion";
// import haskelImage from '../assets/images/haskel.jpg';
import dyfrigImage from '../assets/images/dyfrig.jpg';
// import dhilahImage from '../assets/images/dhilah.jpg';
// import althafImage from '../assets/images/althaf.jpg';

// Data untuk tim agar mudah dikelola
const teamMembers = {
  leader: {
    name: 'Dyfrig Nicholas',
    title: '-the Artist itself\nFull Stack Developer & Visual Designer\nActivities and societies: Softball Riverside Club, Humanitarian Volunteer – Social & Community Service',
    imageUrl: dyfrigImage, // Ganti dengan path gambar Anda
  },
  // staff: [
  //   { 
  //     name: 'Dyfrig Nicholas', 
  //     title: 'Chief Design Officer',
  //     imageUrl: dyfrigImage, // Ganti dengan path gambar Anda
  //   },
  //   // { 
  //   //   name: 'Yusila Husni Fadhilah', 
  //   //   title: 'Chief Marketing Officer',
  //   //   imageUrl: dhilahImage // Ganti dengan path gambar Anda
  //   // },
  //   // { 
  //   //   name: 'Althaf Ardhiea Regita', 
  //   //   title: 'Chief Administrative Officer',
  //   //   imageUrl: althafImage // Ganti dengan path gambar Anda
  //   // },
  //   // { 
  //   //   name: 'Dyfrig Nicholas', 
  //   //   title: 'Chief Design Officer',
  //   //   imageUrl: dyfrigImage, // Ganti dengan path gambar Anda
  //   // },
  //   // { 
  //   //   name: 'Dhillah', 
  //   //   title: 'Chief Marketing Officer',
  //   //   imageUrl: 'https://picsum.photos/id/238/200' // Ganti dengan path gambar Anda
  //   // },
  //   // { 
  //   //   name: 'Althaf', 
  //   //   title: 'Chief Administrative Officer',
  //   //   imageUrl: 'https://picsum.photos/id/239/200' // Ganti dengan path gambar Anda
  //   // },
  // ],
};

function AboutSection() {
  return (
    <section className="bg-white py-20 md:py-32 font-mono">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* === BAGIAN 1: ABOUT US === */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">About Me</h2>
          <p className="mt-8 text-base md:text-lg text-gray-600 leading-relaxed">
            I build digital spaces where <strong className="text-gray-800">logic meets aesthetics</strong>. As an Informatics student with a focus on
            <strong className="text-gray-800"> Full Stack development</strong>, i believe that a great system shouldn't just work perfectly--<strong className="text-gray-800">it should feel effortless.</strong> From leading cross-functional teams to crafting responsive interfaces with <strong className="text-gray-800">React</strong>, <strong className="text-gray-800">Tailwind CSS</strong>, and <strong className="text-gray-800">Laravel</strong> as its skeleton. I bring a blend of technical skill and design sensibility to every project. <strong className="text-gray-800">My goals are to simplify processes, enhance productivity, and empower organizations with the tools they need to succeed.</strong> Also, i’m into house music :D.
          </p>
        </div>

        {/* === BAGIAN 2: OUR VALUES === */}
        <div className="mt-24 md:mt-32">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center">My Values</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            {/* Kolom Visi */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Vision</h3>
              <p className="mt-4 text-gray-600">
                To be a reliable Full Stack Developer who builds functional, stable, and user-friendly web applications that improve organizational operational efficiency.
              </p>
            </div>
            {/* Kolom Misi (mengambil 2 slot grid) */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold text-gray-800">Mission</h3>
              <ul className="mt-4 list-disc pl-5 space-y-3 text-gray-600">
                <li>Building seamless web applications by combining front-end interfaces with React and Tailwind CSS; Robust back-end logic using Laravel and MySQL.</li>
                <li>Managing software projects through clear team coordination, task allocation, and the Scrum methodology to ensure on-time delivery.</li>
                <li>Translating UI/UX designs into clean, maintainable, and responsive code.</li>
                <li>Committing to finding the most effective technical solutions and maintaining honesty throughout the development process to meet project goals.</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* === BAGIAN 3: OUR TEAM === */}
        <div className="mt-24 md:mt-32">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Visual Aid</h2>
            <p className="mt-4 text-lg text-gray-600">Connect with the person behind the art</p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Profil Utama */}
            <div className="md:col-span-1 perspective">
              <motion.img
                src={teamMembers.leader.imageUrl}
                alt={teamMembers.leader.name}
                className="w-full h-auto object-cover rounded-xl shadow-lg"
                animate={{ rotateY: [0, 90, 180, 270, 360] }}
                transition={{
                repeat: Infinity,
                duration: 18,
                ease: "easeInOut",
                }}
              />
             <div className="mt-6 flex items-center gap-2">
    <h3 className="text-2xl font-bold text-gray-900">
      {teamMembers.leader.name}
    </h3>
    
    <a 
      href="https://dyfrig-resume.edgeone.app" 
      className="p-1 text-gray-400 hover:text-gray-900 transition-colors"
      title="Download Resume/CV"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={2} 
        stroke="currentColor" 
        className="w-5 h-5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    </a>
  </div>
              {/* whitespace-pre-line digunakan agar '\n' di string title berfungsi sebagai line break */}
              <p className="mt-1 text-gray-500 whitespace-pre-line">{teamMembers.leader.title}</p>
            </div>

            {/* === TEKS (KANAN) === */}
  <div className="space-y-10">

    {/* Skill Section */}
    <div className="space-y-6">
      <div>
        <h4 className="font-bold text-gray-900">Programming Languages</h4>
        <p className="text-gray-600">
          Javascript, Python, PHP, C++, GO
        </p>
      </div>

      <div>
        <h4 className="font-bold text-gray-900">FrontEnd Development</h4>
        <p className="text-gray-600">
          React, HTML5, TailwindCSS, Bootstrap, Vite
        </p>
      </div>

      <div>
        <h4 className="font-bold text-gray-900">Backend & Database</h4>
        <p className="text-gray-600">
          Laravel, MySQL, PostgreSQL
        </p>
      </div>

      <div>
        <h4 className="font-bold text-gray-900">Mobile Development</h4>
        <p className="text-gray-600">
          Flutter, Dart
        </p>
      </div>

      <div>
        <h4 className="font-bold text-gray-900">Tools & Design</h4>
        <p className="text-gray-600">
          GitHub, Figma, Adobe Illustrator
        </p>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t pt-1" />

    {/* Work Experience */}
    <div>
      <h4 className="font-bold text-gray-900 mb-3">Work & Organization Experiences</h4>
      <ul className="space-y-2 text-gray-600">
        <li>[Full Stack Developer Internship] – [Kepolisian Negara Republik Indonesia]</li>
        <li>[FrontEnd Developer Internship] – [Hiwidigi]</li>
        <li>[Project Manager Freelance] – [CV. Tiga Permata Lestari]</li>
        <li>[FrontEnd Developer Freelance] – [Cv. Tiga Permata Lestari]</li>
        <li>[Part of Medkominfo e-Sport] – [Federation of Informatics Athlete]</li>
      </ul>
    </div>

  </div>
            {/* Daftar Tim Lainnya
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mt-8 md:mt-0">
            {teamMembers.staff.map((member) => (
                // ✅ Gunakan flexbox untuk menata gambar dan teks
                <div key={member.name} className="flex items-center gap-x-5">
                <img 
                    src={member.imageUrl} 
                    alt={member.name}
                    className="w-24 h-24 md:w-28 md:h-28 rounded-xl object-cover shadow-sm"
                />
                <div>
                    <h4 className="text-xl font-semibold text-gray-800">{member.name}</h4>
                    <p className="text-gray-600">{member.title}</p>
                </div>
                </div>
            ))}
            </div> */}
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutSection;