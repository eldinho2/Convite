import CarouselAlbum from "./components/CarouselAlbum";
import Header from "./components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="pt-16">
        <section>
          <div className="flex items-center justify-center">
            <h1 className="text-7xl max-w-96 font-[family-name:var(--font-great-vibes)]">
              Bem-vindas ao meu aniversário!
            </h1>
            <Image
            src="/Anive/lacoCereja.webp"
            alt="Festa"
            width={400}
              height={400}
            />
          </div>
        </section>
        <section className="flex flex-col items-center justify-center gap-4 py-16 font-[family-name:var(--font-forum)]">
          <div className="flex flex-col items-center text-center text-2xl gap-4 max-w-[700px]">
            <h2 className="">Este espaço foi criado com muito carinho para compartilhar momentos especiais, guardar memórias e celebrar nossa amizade! Aqui vocês vão encontrar fotos incríveis que marcaram nossa história, além de um espaço para responder algumas perguntas e deixar sua mensagem, como nos tradicionais cadernos de aniversário.</h2>
            <h2 className="">
            Ah, e não se esqueçam de conferir os detalhes da festa — mal posso esperar para celebrar com vocês!
            </h2>
            <h2 className="">
              Aproveitem o site e obrigada por fazerem parte da minha vida!
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center max-w-[700px]">
            <Image className="bounce-and-rotate" src="/Anive/setafofarosa.png" alt="Festa" width={100} height={100} />
          </div>
        </section>
        <section>
          <CarouselAlbum /> 
        </section>
      </main>
    </div>
  );
}
