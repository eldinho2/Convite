'use client'
import Header from '../components/Header'
import useSWR from 'swr'
import { useState } from 'react'
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

interface Mensagem {
  id: number
  question: string
  name: string
  picture: string
  message: string
  createdAt: string
}

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function Mensagens() {
  const [question, setQuestion] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [dialogOpen, setDialogOpen] = useState(false)
  const [respostasCompletas, setRespostasCompletas] = useState({
    pergunta1: false,
    pergunta2: false,
    pergunta3: false
  })

  const { data, error, mutate } = useSWR('/api/messages', fetcher, {
    refreshInterval: 1000
  })

  console.log(data) 

  const avatarOptions = [
    '/iconesdivas/Cachorrinhofof.jpg',
    '/iconesdivas/chad.jpg',
    '/iconesdivas/chococatcute.jpg',
    '/iconesdivas/cinamonrollcute.jpg',
    '/iconesdivas/gatinhafofa.jpg',
    '/iconesdivas/gatinhafofa2.jpg',
    '/iconesdivas/gatodebriga.jpg',
    '/iconesdivas/gatodoijo.jpg',
    '/iconesdivas/Gatogalante.jpg',
    '/iconesdivas/gatomorango.jpg',
    '/iconesdivas/gatopalhaço.jpg',
    '/iconesdivas/gatosafadinho.jpg',
    '/iconesdivas/hamsterfofa.jpg',
    '/iconesdivas/kittycyte.jpg',
    '/iconesdivas/kuromicute.jpg',
    '/iconesdivas/pupurimcute.jpg'
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

  if (error) return <div>Erro ao carregar messages</div>
  if (!data) return <div>Carregando...</div>

  return (
    <div>
      <Header />
      <main className="pt-16 max-w-2xl mx-auto p-4">
        <div className='flex flex-col justify-center items-center'>
          <h1 className="text-2xl font-bold mb-6">Caderno de messages</h1>
          <div className='flex flex-col gap-2'>
          <h2 className='text-sm text-gray-500'>Escolha seu Nome e foto</h2>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-2'>
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger>
                  <Image 
                    src={picture} 
                    alt="Avatar" 
                    width={50} 
                    height={50} 
                    className="cursor-pointer rounded-full hover:opacity-75"
                  />
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Escolha seu avatar</DialogTitle>
                    <DialogDescription>
                      Selecione uma das imagens abaixo para usar como seu avatar
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid grid-cols-5 gap-2 p-4">
                    {avatarOptions.map((avatar, index) => (
                      <Image
                        key={index}
                        src={avatar}
                        alt={`Avatar ${index + 1}`}
                        width={50}
                        height={50}
                        className="cursor-pointer hover:opacity-75 rounded-full"
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
                className="border rounded-md p-2"
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-8'>
          <QuestionForm 
            iconQuestion="/Anive/gatocoracao.webp" 
            userPicture={picture} 
            userName={name} 
            iconQuestionClassName='transform scale-150' 
            iconWidth={80} 
            iconHeight={80} 
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
