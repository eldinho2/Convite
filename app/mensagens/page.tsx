'use client'
import Header from '../components/Header'
import useSWR from 'swr'
import { useEffect, useState } from 'react'
import QuestionForm from '../components/QuestionForm'
import Image from 'next/image'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Loading from '../components/Loading'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function Mensagens() {
  const [name, setName] = useState('')
  const [dialogOpen, setDialogOpen] = useState(false)
  const [respostasCompletas, setRespostasCompletas] = useState({
    pergunta1: false,
    pergunta2: false,
    pergunta3: false
  })

  const { data, error } = useSWR('/api/messages', fetcher, {
    refreshInterval: 1000
  })

  const avatarOptions = [
    '/Cachorrinhofof.jpg',
    '/chad.jpg',
    '/chococatcute.jpg',
    '/cinamonrollcute.jpg',
    '/gatinhafofa.jpg',
    '/gatinhafofa2.jpg',
    '/gatodebriga.jpg',
    '/gatodoijo.jpg',
    '/Gatogalante.jpg',
    '/gatomorango.jpg',
    '/gatopalhaço.jpg',
    '/gatosafadinho.jpg',
    '/hamsterfofa.jpg',
    '/kittycyte.jpg',
    '/kuromicute.jpg',
    '/pupurimcute.jpg'
  ]

  const getRandomAvatar = () => {
    const randomIndex = Math.floor(Math.random() * avatarOptions.length)
    return avatarOptions[randomIndex]
  }

  const [picture, setPicture] = useState(getRandomAvatar())

  const verificarRespostas = (identificador: string) => {
    const novasRespostas = { ...respostasCompletas, [identificador]: true }
    setRespostasCompletas(novasRespostas)
    
    return Object.values(novasRespostas).every(resposta => resposta === true)
  }

  const [isLoadingState, setIsLoadingState] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => {
          setIsLoadingState(false);
      }, 900);

      return () => clearTimeout(timer);
  }, []);

  if (isLoadingState) return <Loading />


  if (error) return <div>Erro ao carregar messages</div>
  if (!data) return <div>Carregando...</div>

  return (
    <div>
      <Header />
      <main className="pt-20 max-w-2xl mx-auto p-4">
        <div className='flex flex-col justify-center items-center'>
          <h1 className="text-center text-7xl sm:text-5xl font-[family-name:var(--font-great-vibes)] text-pink-800 mb-8 sm:mb-12">
            Caderno de Mensagens
          </h1>
          <div className='flex flex-col gap-2 w-full'>
            <h2 className='text-base sm:text-lg text-gray-500 font-bold'>Escolha seu Nome e foto</h2>
            <div className='flex flex-col gap-4 w-full'>
              <div className='flex items-center gap-2'>
                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                  <DialogTrigger>
                    <Image 
                      src={picture} 
                      alt="Avatar" 
                      width={50} 
                      height={50} 
                      className="cursor-pointer hover:opacity-75 rounded-full aspect-square object-cover"
                      priority
                      quality={75}
                      onError={() => {
                        console.error(`Erro ao carregar imagem: ${picture}`);
                      }}
                    />
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-80">
                    <DialogHeader>
                      <DialogTitle>Escolha seu avatar</DialogTitle>
                      <DialogDescription>
                        Selecione uma das imagens abaixo para usar como seu avatar
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-5 gap-2 p-4 sm:p-2">
                      {avatarOptions.map((avatar, index) => (
                        <Image
                          key={index}
                          src={avatar}
                          alt={`Avatar ${index + 1}`}
                          width={50}
                          height={50}
                          className="cursor-pointer hover:opacity-75 rounded-full aspect-square object-cover sm:w-12 sm:h-12"
                          onClick={() => {
                            setPicture(avatar)
                            setDialogOpen(false)
                          }}
                        />
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
                <input 
                  type="text" 
                  placeholder="Nome" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border border-pink-400 rounded-md p-2 w-full"
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4 sm:gap-8 w-full'>
            <QuestionForm 
              iconQuestion="/Anive/gatocoracao.webp" 
              userPicture={picture} 
              userName={name} 
              iconQuestionClassName='transform scale-125 sm:scale-150' 
              iconWidth={60} 
              iconHeight={60} 
              titleQuestion="Qual foi o momento mais legal que vivemos juntas?"
              identificador="pergunta1"
              verificarRespostas={verificarRespostas}
            />
            <QuestionForm 
              iconQuestion="/Anive/Gatosamigosss.png" 
              userPicture={picture} 
              userName={name} 
              iconWidth={80} 
              iconHeight={80} 
              titleQuestion="Se pudesse descrever nossa amizade em uma palavra qual seria?"
              identificador="pergunta2"
              verificarRespostas={verificarRespostas}
            />
            <QuestionForm 
              iconQuestion="/Anive/gatoguitarra.webp" 
              userPicture={picture} 
              userName={name} 
              iconWidth={80} 
              iconHeight={80} 
              titleQuestion="Qual musica te faz lembrar de mim e por quê?"
              identificador="pergunta3"
              verificarRespostas={verificarRespostas}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
