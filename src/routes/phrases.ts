import express from 'express';
import { getRandomPhrase, getPhrasesByCategory } from '../controllers/phraseController';

const router = express.Router();

router.get('/random', getRandomPhrase);
router.get('/category/:category', getPhrasesByCategory);

export default router;