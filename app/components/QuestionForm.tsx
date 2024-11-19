import Image from 'next/image'
import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'

interface QuestionFormProps {
    titleQuestion: string
    iconQuestion: string
    userPicture: string
    userName: string
    iconWidth: number
    iconHeight: number
    iconQuestionClassName?: string
    identificador: string
    verificarRespostas: (identificador: string) => boolean
}

export default function QuestionForm({
    titleQuestion, 
    iconQuestion, 
    userPicture, 
    userName, 
    iconWidth, 
    iconHeight, 
    iconQuestionClassName,
    identificador,
    verificarRespostas
}: QuestionFormProps) {
    const [answer, setAnswer] = useState('')
    const [isAnswered, setIsAnswered] = useState(false)
    const router = useRouter()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        
        if (answer.trim() !== '') {
            setIsAnswered(true)
            console.log({
                question: titleQuestion,
                answer: answer,
                status: 'respondida'
            })

            const todasPerguntasRespondidas = verificarRespostas(identificador)
            
            if (todasPerguntasRespondidas) {
                router.push('/respostas')
            }
        }
    }

    return (
        <div className={`flex flex-col gap-4 p-6 rounded-lg transition-all ${
            isAnswered ? 'bg-green-50 border-2 border-green-200' : ''
        }`}>
            <div className='flex items-center gap-4 relative'>
                <Image 
                    className={iconQuestionClassName} 
                    src={iconQuestion} 
                    alt="Avatar" 
                    width={iconWidth} 
                    height={iconHeight} 
                />
                <h1 className='text-2xl font-bold'>{titleQuestion}</h1>
                {isAnswered && (
                    <div className="absolute right-0 flex items-center text-green-600 gap-2">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-6 w-6" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M5 13l4 4L19 7" 
                            />
                        </svg>
                        <span className="text-sm font-medium">Respondida</span>
                    </div>
                )}
            </div>        
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="flex items-start gap-8"> 
                    <div className='flex flex-col items-center'>
                        <Image 
                            className='rounded-full' 
                            src={userPicture} 
                            alt="Avatar" 
                            width={50} 
                            height={50} 
                        />
                        <h1 className='text-lg text-center break-words max-w-[90px] mt-2'>
                            {userName}
                        </h1>
                    </div>
                    <div className="bubble grow left h-32 relative">
                        <textarea 
                            placeholder="Responda aqui..." 
                            className="w-full h-full bg-transparent outline-none resize-none p-2"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            disabled={isAnswered}
                        />
                    </div>
                </div>
                <div className="flex justify-end mt-2">
                    <button 
                        type="submit" 
                        className={`px-4 py-2 rounded-md transition-colors ${
                            isAnswered 
                                ? 'bg-green-500 cursor-not-allowed' 
                                : 'bg-pink-400 hover:bg-pink-500'
                        } text-white`}
                        disabled={isAnswered}
                    >
                        {isAnswered ? 'Enviado' : 'Enviar'}
                    </button>
                </div>
            </form>
        </div>
    )
}