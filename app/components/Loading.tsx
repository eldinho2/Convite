import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "./Header";

const loadingGifs = [
  "/loadingAssets/load1.gif",
  "/loadingAssets/load2.gif",
  "/loadingAssets/load3.gif",
  "/loadingAssets/load4.gif",
  "/loadingAssets/load5.gif",
];

const randomGif = () => {
  const randomIndex = Math.floor(Math.random() * loadingGifs.length);
  return loadingGifs[randomIndex];
};

export default function Loading() {
  const [selectedGif, setSelectedGif] = useState("");

  useEffect(() => {
    setSelectedGif(randomGif());
  }, []);

  if (!selectedGif) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Header />
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4">
        <div className="w-full max-w-[500px]">
          <Image src={selectedGif} alt="Loading" width={500} height={500} className="w-full" />
        </div>
        <div className="w-full max-w-[500px] mb-4">
          <div className="text-pink-600 mb-2 text-center font-medium">Carregando...</div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-pink-500 h-2.5 rounded-full animate-[loading_900ms_ease-in-out]"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
