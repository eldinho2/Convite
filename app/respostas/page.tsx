'use client'

import Header from "../components/Header";
import { useEffect, useState } from "react";

interface Message {
    id: string | number;
    question: string;
    message: string;
    name: string;
    picture: string;
}

export default function Respostas() {

    const [messages, setMessages] = useState<Message[]>([])

    useEffect(() => {
        fetch('/api/messages')
            .then(response => response.json())
            .then(data => {
                const messageArray = Array.isArray(data) ? data : data.messages || [];
                setMessages(messageArray);
            })
            .catch(error => {
                console.error('Erro ao buscar mensagens:', error);
                setMessages([]);
            });
    }, [])

    console.log(messages);
    

    return (
        <div>
            <Header />
            <main className="pt-16">
                <section className="flex flex-col sm:flex-row items-center justify-between py-16 font-[family-name:var(--font-forum)] sm:py-4 md:py-4 px-4">
                    <h1 className="flex text-center justify-center text-7xl font-[family-name:var(--font-great-vibes)]">Respostas</h1>
                    <div>
                        {Array.isArray(messages) && messages.map((message: Message) => (
                            <div key={message.id}>
                                <h2>{message.question}</h2>
                                <p>{message.message}</p>
                                <p>{message.name}</p>
                                <p>{message.picture}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}