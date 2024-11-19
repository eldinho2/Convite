import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  const messages = await prisma.message.findMany()
  return NextResponse.json({ messages })
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
