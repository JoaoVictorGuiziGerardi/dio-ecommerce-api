import express, { Request, Response } from "express";
import statusRoute from "./routes/status.routes";
import messagesRoutes from "./routes/messages.routes";
import cors from 'cors';

const app = express();
app.use(cors());

// Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurações das Rotas
app.use(statusRoute);
app.use(messagesRoutes);

// Configurção dos Handlers de Erro

// Inicialização do Servidor
app.listen(5000, () => {
    console.log('Aplicação executando em http://localhost:5000');
})