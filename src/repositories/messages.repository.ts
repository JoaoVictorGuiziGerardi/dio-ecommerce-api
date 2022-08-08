import Message from "../models/message.model";
import db from "../db";

class MessageRepository {
    async findAllMessages(): Promise<Message[]> {
        const query = `
            SELECT *
            FROM mensagens
            ORDER BY dataMensagem DESC
        `;
    
        const { rows } = await db.query<Message>(query);

        return rows || [];
    }

    async createMessage(message: Message): Promise<void>{
        const script = `
            INSERT INTO mensagens (
                autor,
                mensagem
            )
            VALUES ($1, $2);
        `;

        const values = [message.autor, message.mensagem];
        await db.query<{ uuid: string }>(script, values);
        
    }
}

export default new MessageRepository();