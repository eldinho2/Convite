"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const fadeInDown = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      className="flex justify-between items-center fixed w-full px-4 lg:px-6 h-16 bg-[#c94b63] text-black font-bold backdrop-blur-md z-50 transition-all duration-300 ease-in-out shadow-md"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeInDown}
    >
      <button 
        className="hidden sm:block"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

      <ul className="sm:hidden flex justify-center items-center mx-auto gap-4">
      <li className="hover:text-white">
      <Link href="/">Inicio</Link>
        </li>
        <li className="hover:text-white">
          <Link href="/mensagens">Caderno de Mensagens</Link>
        </li>
        <li className="hover:text-white">
          <Link href="/respostas">Respostas</Link>
        </li>
        <li className="hover:text-white">
        <Link href="/detalhes">Informações Sobre a Festa</Link>
        </li>
      </ul>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#c94b63]">
          <ul className="flex flex-col items-center py-4 gap-4">
            <li className="hover:text-white">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
            </li>
            <li className="hover:text-white">
              <Link href="/mensagens" onClick={() => setIsMenuOpen(false)}>Caderno de Mensagens</Link>
            </li>
            <li className="hover:text-white">
              <Link href="/respostas" onClick={() => setIsMenuOpen(false)}>Respostas</Link>
            </li>
            <li className="hover:text-white">
              <Link href="/detalhes" onClick={() => setIsMenuOpen(false)}>Informações Sobre a Festa</Link>
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  );
}
