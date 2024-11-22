import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const messages = await prisma.message.findMany()
    return NextResponse.json({ messages })
  } catch (error) {
    console.error('Erro ao buscar mensagens:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  const { question, name, picture, message: messageContent } = await request.json()
  const message = await prisma.message.create({ 
    data: { 
      question, 
      name, 
      picture, 
      message: messageContent 
    } 
  })
  return NextResponse.json({ message })
}
