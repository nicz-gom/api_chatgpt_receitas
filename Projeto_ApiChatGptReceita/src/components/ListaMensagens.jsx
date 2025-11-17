import MensagemConstrutor from "./MensagemConstrutor"
import Mensagem from "./MensagemConstrutor"

const ListaMensagens = ({ mensagens }) => {

    return (
        <div className="flex-1 overflow-y-auto p-4 space-y-4">

            {mensagens.map(mensagem => (
                <MensagemConstrutor key={mensagem.id} mensagem={mensagem} />
            ))}

        </div>
    )
}

export default ListaMensagens