"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

export default function Header() {
  return (
    <motion.header
      className="flex justify-center items-center fixed w-full px-4 lg:px-6 h-16 bg-[#c94b63] text-black backdrop-blur-md z-50 transition-all duration-300 ease-in-out shadow-md"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeInUp}
    >
      <ul className="flex gap-4">
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/about">Caderno de Mensagens</Link>
        </li>
        <li>
          <Link href="/contact">Informações Sobre a Festa</Link>
        </li>
      </ul>
    </motion.header>
  );
}
