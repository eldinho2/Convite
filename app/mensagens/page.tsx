'use client'
import Header from '../components/Header'
import useSWR from 'swr'
import { useState } from 'react'

interface Mensagem {
  id: number
  autor: string
  texto: string
  data: string
}

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function Mensagens() {
  const [autor, setAutor] = useState('')
  const [texto, setTexto] = useState('')
  
  const { data, error, mutate } = useSWR('/api/messages', fetcher, {
    refreshInterval: 1000
  })

  const enviarMensagem = async (e: React.FormEvent) => {
    e.preventDefault()
    
    await fetch('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ autor, texto }),
    })
    
    setTexto('')
    mutate()
  }

  if (error) return <div>Erro ao carregar messages</div>
  if (!data) return <div>Carregando...</div>

  return (
    <div>
      <Header />
      <main className="pt-16 max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Caderno de messages</h1>
        
        <form onSubmit={enviarMensagem} className="mb-8">
          <input
            type="text"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
            placeholder="Seu nome"
            className="border p-2 mr-2"
            required
          />
          <input
            type="text"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Sua mensagem"
            className="border p-2 mr-2"
            required
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Enviar
          </button>
        </form>

        <div className="space-y-4">
          {data.messages.map((msg: Mensagem) => (
            <div key={msg.id} className="border p-4 rounded">
              <p className="font-bold">{msg.autor}</p>
              <p>{msg.texto}</p>
              <p className="text-sm text-gray-500">
                {new Date(msg.data).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
