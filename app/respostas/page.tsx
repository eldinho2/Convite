'use client'

import useSWR from "swr";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { motion } from "framer-motion";
import Image from "next/image";

interface Message {
    id: string | number;
    question: string;
    message: string;
    name: string;
    picture: string;
    createdAt: string;
}

export default function Respostas() {
    const [selectedQuestion, setSelectedQuestion] = useState<string>(
        "Qual musica te faz lembrar de mim e por quê?"
    );
    const [isLoadingState, setIsLoadingState] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoadingState(false);
        }, 900);

        return () => clearTimeout(timer);
    }, []);

    const fetcher = async (url: string) => {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Falha ao carregar dados");
        return response.json();
      };


    const {
        data: messages,
        error,
    } = useSWR("/api/messages", fetcher, {
        refreshInterval: 1000,
        revalidateOnFocus: true,
        revalidateOnReconnect: true,
    });

    const questions = [
        "Qual foi o momento mais legal que vivemos juntas?",
        "Se pudesse descrever nossa amizade em uma palavra qual seria?",
        "Qual musica te faz lembrar de mim e por quê?"
    ];

    const filteredMessages = messages?.messages?.filter((message: Message) => 
        message.question === selectedQuestion
    )
    .sort((a: Message, b: Message) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    ) || [];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    if (error) return <div>Error: {error.message}</div>
    if (isLoadingState) return <Loading />

    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
            <Header />
            <main className="pt-20">
                <section className="max-w-6xl mx-auto px-4 py-16">
                    <h1 className="text-center text-7xl font-[family-name:var(--font-great-vibes)] text-pink-800 mb-12 
                        border-b-4 border-pink-300 pb-4 max-w-[600px] mx-auto">
                        Respostas
                    </h1>
                    <div className="flex sm:flex-col gap-2 mb-8 justify-center 
                        border-2 border-pink-200 rounded-xl p-4 max-w-[800px] mx-auto">
                        {questions.map((question, index) => (
                            <motion.button
                                key={index}
                                onClick={() => setSelectedQuestion(question)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-4 py-2 rounded-lg transition-all duration-300 text-center
                                    ${selectedQuestion === question 
                                        ? 'bg-pink-600 text-white shadow-lg' 
                                        : 'bg-white text-pink-600 hover:bg-pink-100'}`}
                            >
                                {question}
                            </motion.button>
                        ))}
                    </div>
                    

                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-4 sm:grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto"
                    >
                        {filteredMessages.map((message: Message) => (
                            <motion.div 
                                key={message.id}
                                variants={itemVariants}
                                whileHover={{ scale: 1.03 }}
                                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 
                                    border-2 border-pink-200 hover:border-pink-400"
                            >
                                <motion.div 
                                    className="flex items-center mb-4"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <Image
                                        src={message.picture}
                                        alt={message.name}
                                        width={50}
                                        height={50}
                                        className="w-12 h-12 rounded-full object-cover border-2 border-pink-200"
                                    />
                                    <div className="ml-3">
                                        <h3 className="font-semibold text-gray-800 border-b-2 border-pink-200">
                                            {message.name}
                                        </h3>
                                        <p className="text-xs text-gray-500">
                                            Enviado em {new Date(message.createdAt).toLocaleDateString('pt-BR', {
                                                day: '2-digit',
                                                month: '2-digit',
                                                year: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}
                                        </p>
                                    </div>
                                </motion.div>
                                <motion.p 
                                    className="text-gray-600 leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    {message.message}
                                </motion.p>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
            </main>
        </div>
    )
}