import { Router, Response, Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import messageRepository from '../repositories//messages.repository';

const messagesRoutes = Router();
const { OK, CREATED } = StatusCodes;

// Get das mensagens
messagesRoutes.get('/messages', async (req: Request, res: Response) => {
    const messages = await messageRepository.findAllMessages();
    res.status(OK).json(messages);
})

// Post de uma mensagem
messagesRoutes.post('/messages', async (req: Request, res: Response) => {
    const newMessage = req.body;
    await messageRepository.createMessage(newMessage);
    console.log(req.body);
    res.status(CREATED).json(req.body.autor);
})

export default messagesRoutes;