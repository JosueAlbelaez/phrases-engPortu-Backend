import { Request, Response } from 'express';
import Phrase from '../models/Phrase';

export const getRandomPhrase = async (req: Request, res: Response) => {
    try {
        const { language, category, count = 10 } = req.query;
        let query: any = {};
        
        if (language) query.language = language;
        if (category) query.category = category;
        
        let phrases;
        if (count === '1') {
            const count = await Phrase.countDocuments(query);
            const random = Math.floor(Math.random() * count);
            phrases = [await Phrase.findOne(query).skip(random)];
        } else {
            phrases = await Phrase.aggregate([
                { $match: query },
                { $sample: { size: parseInt(count as string) || 10 } }
            ]);
        }
        
        res.json(phrases);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getPhrasesByCategory = async (req: Request, res: Response) => {
    try {
        const { category } = req.params;
        const { language } = req.query;
        const query: any = { category };
        
        if (language) query.language = language;
        
        const phrases = await Phrase.find(query).sort('targetText');
        res.json(phrases);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};