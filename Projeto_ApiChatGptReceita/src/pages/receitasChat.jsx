import { useState } from "react"
import ListaMensagens from "../components/ListaMensagens"

const chatReceitas = () => {

    const [mensagem, setMensagens] = useState([
        {
            id: 1,
            text: 'Olá, sou sua assistente de receitas, como eu posso lhe ajudar?',
            remetente: 'bot'
        },
        {
            id: 2,
            text: 'Frango assado!',
            remetente: 'usuario'
        },
        {
            id: 3,
            text: "### Frango Assado Simples e Delicioso\n\nEssa receita de frango assado é fácil e perfeita para iniciantes! Vamos lá!\n\n#### Ingredientes\n\n- 1 frango inteiro (aproximadamente 1,5 kg)\n- 4 dentes de alho picados\n- 1 limão (suco)\n- 3 colheres de sopa de azeite de oliva\n- Sal a gosto\n- Pimenta-do-reino a gosto\n- 1 colher de sopa de ervas (como alecrim ou tomilho)\n- 2 cenouras cortadas em rodelas\n- 2 batatas cortadas em cubos\n- 1 cebola em pedaços grandes\n\n#### Modo de Preparo\n\n1. **Preaquecer o forno**: Ligue o forno a 200 graus Celsius para aquecer enquanto você prepara o frango.\n\n2. **Tempero do frango**: Em uma tigela, misture o alho picado, o suco de limão, o azeite de oliva, sal, pimenta e as ervas. \n\n3. **Temperar o frango**: Com essa mistura, esfregue bem o tempero em todo o frango, por dentro e por fora, para garantir que fique bem saboroso.\n\n4. **Preparar os acompanhamentos**: Em uma forma, coloque as cenouras, batatas e cebola. Tempere com um pouco de sal, pimenta e um fio de azeite.\n\n5. **Montar a assadeira**: Coloque o frango por cima dos legumes na assadeira.\n\n6. **Levar ao forno**: Coloque a assadeira no forno e asse por aproximadamente 1 hora e 30 minutos, ou até que o frango esteja bem dourado e cozido.\n\n7. **Servir**: Retire o frango do forno, deixe descansar por uns 10 minutos antes de cortar e sirva com os legumes.\n\n#### Dicas\n\n- Para saber se o frango está pronto, você pode furar a parte mais grossa da coxa com um garfo; se o líquido que sair for claro, está pronto.\n  \n- Sirva com arroz ou uma salada verde para complementar a refeição.\n\nAgora é só seguir os passos e arrasar no seu frango assado! Bom apetite! 🍗",
            remetente: 'bot'
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
                    <ListaMensagens mensagem={mensagem} />
                </div>
            </div>
        </div>
    )

}

export default chatReceitas