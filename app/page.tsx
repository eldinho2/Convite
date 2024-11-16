import CarouselAlbum from "./components/CarouselAlbum";
import Header from "./components/Header";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Header />
      <main className="pt-16">
        <section>
          <div className="flex items-center justify-center">
            <h1 className="text-7xl max-w-96 font-[family-name:var(--font-great-vibes)] sm:text-4xl sm:px-4 sm:pt-4 md:text-5xl md:px-4 md:pt-4">
              Bem-vindas ao meu aniversário!
            </h1>
            <Image
              className="sm:w-32 md:w-48"
              src="/Anive/lacoCereja.webp"
              alt="Festa"
              width={400}
              height={400}
            />
          </div>
        </section>
        <section className="flex flex-col items-center justify-center gap-4 py-16 font-[family-name:var(--font-forum)] sm:py-4 md:py-4">
          <div className="flex flex-col items-center text-center text-2xl gap-4 max-w-[700px]">
            <h2 className="">
              Este espaço foi criado com muito carinho para compartilhar
              momentos especiais, guardar memórias e celebrar nossa amizade!
              Aqui vocês vão encontrar fotos incríveis que marcaram nossa
              história, além de um espaço para responder algumas perguntas e
              deixar sua mensagem, como nos tradicionais cadernos de
              aniversário.
            </h2>
            <h2 className="">
              Ah, e não se esqueçam de conferir os detalhes da festa — mal posso
              esperar para celebrar com vocês!
            </h2>
            <h2 className="">
              Aproveitem o site e obrigada por fazerem parte da minha vida!
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center max-w-[700px]">
            <Image
              className="bounce-and-rotate"
              src="/Anive/setafofarosa.png"
              alt="Festa"
              width={100}
              height={100}
            />
          </div>
        </section>
        <section>
          <CarouselAlbum />
        </section>
        <section className="flex flex-col sm:flex-row items-center justify-between py-16 font-[family-name:var(--font-forum)] sm:py-4 md:py-4">
          <div className="flex flex-col items-center text-center text-2xl gap-4 max-w-[700px] sm:max-w-[60%]">
            <h1 className="text-7xl font-[family-name:var(--font-great-vibes)]">
              Caderno de mensagens
            </h1>
            <h3>
              O caderno de mensagens tem como objetivo ser um espaço especial
              onde vocês, minhas amigas, podem deixar recados, compartilhar
              lembranças e responder a algumas perguntas que vão ajudar a
              eternizar nossa amizade. Assim como os cadernos de aniversário de
              15 anos, esse é um cantinho dedicado às nossas memórias, para que,
              no futuro, a gente possa olhar para trás e lembrar dos momentos
              marcantes que vivemos juntas. Cada mensagem vai ser uma forma
              única de guardar o carinho de cada uma de vocês!
            </h3>
          </div>
          <Link className="flex flex-col items-center cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out" href="/mensagens">
            <div className="flex flex-col items-center" >
              <Image
                src="/Anive/setafofarosa.png"
                alt="Festa"
                width={100}
                height={100}
              />
              <span className="text-xl font-bold text-center max-w-[200px]">Ir para o caderno de mensagens</span>
            </div>
          </Link>
        </section>
      </main>
    </div>
  );
}
