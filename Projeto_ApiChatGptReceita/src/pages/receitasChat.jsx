import { useState } from "react"
import ListaMensagens from "../components/ListaMensagens"
import ChatBox from "../components/chatBox"
import { api } from "../services/app"

const chatReceitas = () => {
    const [loading, setLoading] = useState(false)
    const [mensagens, setMensagens] = useState([
        {
            id: 1,
            texto: 'Olá, sou sua assistente de receitas, como eu posso lhe ajudar?',
            remetente: 'bot'
        }
    ])

    const onEnviarMensagens = (mensagem) => {
        try {
            const resposta = await api(mensagem)

            console.log(resposta)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-200 via-gray-50 to-emerald-50 p-4">
            <div className="container mx-auto max-w-4xl">
                <header className="text-center mb-8">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-emerald-600 text-transparent bg-clip-text mb-2">🍽️ Api Receitas</h1>
                    <p className="text-gray-600 text-lg">Seu assistente pessoal para receitas deliciosas!</p>
                </header>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl h-[400px] border-gray-50 flex flex-col">
                    <ListaMensagens mensagens={mensagens} />
                    <ChatBox onEnviarMensagens={onEnviarMensagens} desabilitado={loading} />
                </div>
            </div>
        </div>
    )

}

export default chatReceitas