import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from './_db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { body: note } = req;
    try {
        const addedNote = await prisma.note.create({
            data: note
        });
        console.log('Note added to DB: ', addedNote);
        res.status(200).json(addedNote);
    } catch (e) {
        console.log('ERROR:', e);
        res.send(e);
    }
}

