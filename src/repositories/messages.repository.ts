import Message from "../models/message.model";
import db from "../db";

class MessageRepository {
    async findAllMessages(): Promise<Message[]> {
        const query = `
            SELECT *
            FROM mensagens
        `;
    
        const { rows } = await db.query<Message>(query);

        return rows || [];
    }

    async createMessage(message: Message): Promise<string>{
        const script = `
            INSERT INTO mensagens (
                autor,
                mensagem
            )
            VALUES ($1, $2);
            RETURNING uuid
        `;

        const values = [message.autor, message.mensagem];

        const { rows } = await db.query<{ uuid: string }>(script, values);
        const [ newMessage ] = rows;
        return newMessage.uuid;
    }
}

export default new MessageRepository();