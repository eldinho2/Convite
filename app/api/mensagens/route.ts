import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

const arquivoJson = path.join(process.cwd(), 'data/mensagens.json')

export async function GET() {
  try {
    try {
      await fs.access(arquivoJson)
    } catch {
      await fs.writeFile(arquivoJson, JSON.stringify({ mensagens: [] }, null, 2))
    }

    const fileContents = await fs.readFile(arquivoJson, 'utf8')
    const data = JSON.parse(fileContents)
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { erro: 'Erro ao processar a requisição' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  const body = await request.json()
  const fileContents = await fs.readFile(arquivoJson, 'utf8')
  const data = JSON.parse(fileContents)
  
  const novaMensagem = {
    id: Date.now(),
    autor: body.autor,
    texto: body.texto,
    data: new Date().toISOString()
  }
  
  data.mensagens.push(novaMensagem)
  await fs.writeFile(arquivoJson, JSON.stringify(data, null, 2))
  
  return NextResponse.json(novaMensagem)
}