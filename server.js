import Express from "express";
import receitasRoutes from "./src/routes/receitas.route.js";
import cors from 'cors'

const app = Express();
const PORT = 3001;

app.use(cors())

app.use(Express.json());

app.use("/api/receitas", receitasRoutes);

app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});

//JSON - JavaScript Objective Notation
