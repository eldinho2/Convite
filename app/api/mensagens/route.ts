import { NextResponse } from 'next/server'

const API_URL = 'https://convitejuju.vercel.app/mensagens'

export async function GET() {
  try {
    const response = await fetch(API_URL)
    const data = await response.json()
    return NextResponse.json({ mensagens: data })
  } catch {
    return NextResponse.json(
      { erro: 'Erro ao processar a requisição' },
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