import Image from "next/image"
import Header from "./Header";

export default function Loading() {
    const selectedGif = "/loadingAssets/load1.gif";

    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
            <Header />
            <main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4">
                <div className="w-full max-w-[500px]">
                    <Image 
                        src={selectedGif} 
                        alt="Loading" 
                        width={500} 
                        height={500} 
                        className="w-full"
                        priority
                    />
                </div>
                <div className="w-full max-w-[500px] mb-4">
                    <div className="text-pink-600 mb-2 text-center font-medium">Carregando...</div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-pink-500 h-2.5 rounded-full animate-[loading_900ms_ease-in-out]"></div>
                    </div>
                </div>
            </main>
        </div>
    )
}

