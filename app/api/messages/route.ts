import { NextResponse } from 'next/server'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/messages'

console.log('API_URL:', API_URL)

export async function GET() {
  try {
    const response = await fetch(API_URL)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    return NextResponse.json({ messages: Array.isArray(data) ? data : [] })
  } catch (error) {
    console.error('Erro na requisição GET:', error)
    return NextResponse.json(
      { messages: [], erro: 'Erro ao processar a requisição' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    const novaMensagem = {
      id: Date.now(),
      autor: body.autor,
      texto: body.texto,
      data: new Date().toISOString()
    }
    
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novaMensagem)
    })
    
    const mensagemSalva = await response.json()
    return NextResponse.json(mensagemSalva)
  } catch {
    return NextResponse.json(
      { erro: 'Erro ao processar a requisição' },
      { status: 500 }
    )
  }
}