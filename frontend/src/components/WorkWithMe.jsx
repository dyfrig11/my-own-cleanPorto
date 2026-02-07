import React from "react";
import { Link } from "react-router-dom";

const WorkWithMe = () => {
  return (
    <section className="bg-[#00000] py-20 px-6 md:px-12 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
      <div className="max-w-5xl shad">
        {/* Label kecil */}
        <p className="font-mono text-xs tracking-widest uppercase text-gray-500 mb-4">
          Work with Dyfrig
        </p>

        {/* Headline utama */}
        <h1 className="font-serif text-4xl md:text-6xl text-gray-900 leading-tight">
          Accepting All "Lowongan Kerja" & Projects for Eternity
        </h1>

        {/* Email */}
        <a
          href="mailto:nicholasdyfrig@gmail.com"
          className="mt-6 inline-block font-serif text-3xl md:text-5xl text-gray-900 underline underline-offset-8 hover:text-gray-600 transition"
        >
          nicholasdyfrig@gmail.com
        </a>
        <p className="font-mono text-xs tracking-widest uppercase text-gray-500 mb-4">
            <Link to="/contact" className="hover:text-gray-700 transition-colors pt-1">
                Contact Me⤿
            </Link>
</p>
      </div>
    </section>
  );
};

export default WorkWithMe;
