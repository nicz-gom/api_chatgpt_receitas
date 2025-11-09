import Express from "express";
import { perguntaReceita } from "../controllers/receitas.controller.js";

const router = Express.Router();

router.post("/perguntar", perguntaReceita);

export default router;
