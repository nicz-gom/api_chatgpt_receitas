import { useState } from "react"

const chatReceitas = () => {

    const [mensagem, setMensagemns] = useState([
        {
            id: 1,
            text: 'Olá, sou sua assistente de receitas, como eu posso lhe ajudar?',
            remetente: 'bot'
        },
        {
            id: 2,
            text: 'Frango assado!',
            remetente: 'usuario'
        }
    ])

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-500 via-gray-50 to-emerald-50 p-4">
            <div className="container mx-auto max-w-4xl">
                <header className="text-center mb-8">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-emerald-600 text-transparent bg-clip-text mb-2">🍽️ Api Receitas</h1>
                    <p className="text-gray-600 text-lg">Seu assistente pessoal para receitas deliciosas!</p>
                </header>

                <div className="bg-white/70 backdrop-blur-sm rounded-2xl">
                    <ListaMensagens mensagens={mensagens} />
                </div>
            </div>
        </div>
    )

}

export default chatReceitas