import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from './_db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { body: note } = req;
    const { id } = note;
    try {
        const deletedNote = await prisma.note.delete({
            where: { id: id }
        });
        res.status(200).json(deletedNote);
    } catch (e) {
        res.status(500).json(e);
    }
}