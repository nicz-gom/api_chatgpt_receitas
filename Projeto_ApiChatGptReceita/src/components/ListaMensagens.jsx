const ListaMensagens = ({ mensagem }) => {

    return (
        <div>

            {mensagem.map(mensagens => (
                <Mensagem key={mensagens.id}>{mensagens.text}</Mensagem>
            ))}

        </div>
    )
}

export default ListaMensagens