'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link"
import Loading from "../components/Loading"

export default function Details() {
  const [isLoadingState, setIsLoadingState] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => {
          setIsLoadingState(false);
      }, 900);

      return () => clearTimeout(timer);
  }, []);

  if (isLoadingState) return <Loading />

  return (
    <div>
      <Header />
      <main className="pt-16">
        <section className="flex flex-col sm:flex-row items-center justify-between py-16 font-[family-name:var(--font-forum)] sm:py-4 md:py-4 px-4">
          <div>
            <h1 className="flex text-center justify-center text-7xl font-[family-name:var(--font-great-vibes)]">
              Detalhes da Festa
            </h1>
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl text-center italic py-4 sm:text-2xl md:text-2xl ">
                Na festa vai ter um Karaokê, então venha preparada pra soltar o
                gogó
              </span>
              <div className="flex items-center justify-center gap-4 sm:gap-2 md:gap-2 sm:flex-col md:flex-col">
                <Image
                  src={"/Anive/gatocantor.png"}
                  alt="gatocantor"
                  width={300}
                  height={300}
                  className="sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px]"
                />
                <video
                  className="w-64 h-64"
                  src="/Anive/gatorebolador.mp4"
                  autoPlay
                  loop
                  muted
                ></video>
                <Image
                  src={"/Anive/gatolindo.png"}
                  alt="gatolindo"
                  width={300}
                  height={300}
                  className="sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px]"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center gap-4 font-[family-name:var(--font-forum)]">
          <div className="flex items-center justify-center gap-8 sm:flex-col md:flex-col">
            <div className="flex flex-col max-w-[500px] gap-8">
              <div className="relative">
                <div className="flex flex-col px-4">
                  <span className="text-xl font-bold py-4">
                    🎉 Data: 18 de janeiro de 2025
                  </span>
                  <span className="text-xl font-bold my-4">
                    🏡 Local: Minha casa - Rua Dr Mario Vianna - 275, casa 39.3
                    (interfonar) - Santa Rosa, Niterói
                  </span>
                  <span className="text-xl font-bold my-4">
                    ⏰ Horário: A partir das 16h
                  </span>
                  <span className="text-xl font-bold my-4">
                    👗 Traje: venha confortável, e se estiver calor, use algo
                    fresco!
                  </span>
                </div>
                <div className="absolute top-52 left-24 flex flex-col items-center justify-center sm:hidden md:hidden">
                  <Image
                    src={"/Anive/gatoconfeti.png"}
                    alt="Mapa"
                    width={150}
                    height={150}
                    className="sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px]"
                  />
                </div>
                <div className="absolute -top-20 right-3 flex flex-col items-center justify-center sm:static md:static">
                  <Image
                    src={"/Anive/Gatoaniversariante2.png"}
                    alt="Mapa"
                    width={150}
                    height={150}
                    className="sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px]"
                  />
                </div>
                <div className="absolute top-24 right-4 flex flex-col items-center justify-center sm:hidden md:hidden">
                  <Image
                    src={"/Anive/sillycat.png"}
                    alt="Mapa"
                    width={100}
                    height={100}
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center relative">
                <div className="relative w-[300px] h-[300px]">
                  <Image
                    src={"/Anive/Molduraverde.png"}
                    alt="Molduraverde"
                    layout="fill"
                    objectFit="contain"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <Image
                      src={"/Anive/maps.png"}
                      alt="Mapa"
                      width={90}
                      height={90}
                      objectFit="contain"
                    />
                    <p className="text-sm underline hover:text-[#c94b63] font-bold">
                      <a
                        href="https://www.google.com/maps/place/R.+Dr.+Mario+Vianna,+275+-+Santa+Rosa,+Niter%C3%B3i+-+RJ,+24241-000/@-22.902217,-43.0980404,17z/data=!4m6!3m5!1s0x9983f7cc7076f7:0xa03a32dfae4f96a0!8m2!3d-22.902217!4d-43.0980404!16s%2Fg%2F11c4r9qq_r?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Abrir local no Maps
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center relative">
                <div className="relative w-[300px] h-[300px]">
                  <Image
                    src={"/Anive/Molduraverde.png"}
                    alt="Molduraverde"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Image
                    src={"/Anive/clima.png"}
                    alt="clima"
                    width={135}
                    height={135}
                  />
                  <p className="text-sm underline hover:text-[#c94b63] font-bold">
                    <a
                      href="https://www.google.com/search?q=previs%C3%A3o+do+tempo+niter%C3%B3i&oq=previs%C3%A3o+do+tempo+niter%C3%B3i&aqs=chrome.0.0l8.6954j0j7&sourceid=chrome&ie=UTF-8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver a previsão do tempo
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center gap-4 font-[family-name:var(--font-forum)] mb-12 sm:mb-0 md:mb-0">
          <div className="flex justify-center items-center sm:flex-col md:flex-col">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-3xl max-w-[700px] sm:text-2xl md:text-2xl sm:px-10 md:px-10">
                Mal posso esperar para comemorar com vocês! Será uma noite cheia
                de alegria, boas risadas e muitas memórias. Nos vemos lá divas!
              </h1>
              <video
                className="sm:w-[400px] sm:h-[400px] md:w-[400px] md:h-[400px]"
                src="/Anive/Chipichipi.mp4"
                autoPlay
                loop
                muted
              ></video>
            </div>
            <div className="relative flex flex-col items-center justify-center gap-4">
              <Link className="flex items-center justify-center gap-2 absolute left-40 -bottom-60 sm:static md:static sm:mt-4 md:mt-4" href={"https://wa.me/qr/QP3C4V2KWVXAP1" } target="_blank" rel="noopener noreferrer">
                <div className="w-28 h-28 relative sm:-left-2">
                  <Image
                    src={"/Anive/Whastapp rosa.png"}
                    alt="Whatsapp"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <p className="text-xm underline hover:bg-pink-200 sm:relative sm:right-10">
                  Confirmar presença
                </p>
              </Link>
              <span className="flex items-center justify-center gap-2 absolute -left-2 -bottom-52 sm:static md:static sm:mt-4 md:mt-4">
                <Dialog>
                  <DialogTrigger className="text-xm underline hover:bg-pink-200">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-16 h-16 relative">
                      <Image
                        src={"/Anive/presente.webp"}
                        alt="Presente"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    Sugestões de presentes
                    </div>
                  </DialogTrigger>
                  <DialogContent className="bg-pink-50 border-2 border-pink-300 rounded-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-3xl text-pink-700 font-[family-name:var(--font-forum)] text-center">
                        Sugestões de presentes
                      </DialogTitle>
                      <DialogDescription className="text-pink-500 text-center font-[family-name:var(--font-forum)] text-lg">
                        Amigas queridas, mais do que presentes, o mais especial é ter vocês comigo nesse momento! 🎉 Mas, caso queiram me mimar, preparei essa listinha com sugestões. 🌸 Prefiro não receber sapatos ou roupas (é difícil acertar o tamanho! 👟👗). Amo cheiros doces 🍭, bijuterias prateadas e maquiagens bem brilhosas 💄✨. Obrigada por fazerem parte desse dia especial e da minha vida!
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col items-center justify-center gap-4 mt-4">
                      <Link
                        href="https://www.amazon.com.br/hz/wishlist/ls/1XBAW4V6HLLO2?ref_=wl_share"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-full transition-colors duration-200 font-[family-name:var(--font-forum)]"
                      >

                        Lista Amazon
                      </Link>
                      <Link
                        href="https://happygiftlist.com/pt/lista-de-desejos/gzdsqrzl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-full transition-colors duration-200 font-[family-name:var(--font-forum)]"
                      >
                        Lista Shopee
                      </Link>
                    </div>
                  </DialogContent>
                </Dialog>
              </span>
            </div>
            <div className="relative w-[300px] h-[300px]">
                <Image
                  src="/Anive/Gatoaniversariante.png"
                  alt="gatocantor"
                  fill
                />
              </div>
          </div>
        </section>
      </main>
    </div>
  );
}
