import obterRespostaReceita from "../services/openai.service.js";

//express trabalha com requisição e resposota
export const perguntaReceita = async (req, res) => {
  try {
    const { pergunta } = req.body;

    if (!pergunta) {
      return res.status(400).json({
        errro: "É obrigatório enviar uma pergunta",
      });
    }

    const resposta = await obterRespostaReceita(pergunta);

    res.json({ resposta });
  } catch (e) {
    res.status(500).json({
        errro: "Erro ao processar sua pergunta. Tente novamente!"
    })
  }
};
