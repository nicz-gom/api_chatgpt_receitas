import { useState } from "react"

const ChatBox = ({ onEnviarMensagens, desabilitado }) => {
    const [mensagem, setMensagens] = useState('')

    const handleSubimit = (event) => {
        event.preventDefault();

        onEnviarMensagens(mensagem)
        setMensagens('')

    }

    return (
        <div className="border-t border-gray-200 bg-gray-50/80 p-4">
            <form className="flex space-x-3" onSubmit={handleSubimit}>
                <input
                    type="text"
                    value={mensagem}
                    onChange={(e) => setMensagens(e.target.value)}
                    placeholder="Digite o alimento para obter a receita!"
                    disabled={desabilitado}
                    className="flex-1 p-5 py-3 bg-white border border-gray-300 rounded-full shadow-sm focus:ring-2 outline-none ring-purple-500" />
                <button
                    type="submit"
                    disabled={desabilitado}
                    className="px-8 py-3 bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-600 hover:to-emerald-700 cursor-pointer text-white rounded-full disabled:from-gray-400 to disabled:to-gray-200 disabled:cursor-not-allowed">Enviar</button>
            </form>
        </div>
    )

}

export default ChatBox