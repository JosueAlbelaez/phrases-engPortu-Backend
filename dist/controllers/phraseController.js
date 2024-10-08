"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPhrasesByCategory = exports.getRandomPhrase = void 0;
const Phrase_1 = __importDefault(require("../models/Phrase"));
const getRandomPhrase = async (req, res) => {
    try {
        const { language, category, count = 10 } = req.query;
        let query = {};
        if (language)
            query.language = language;
        if (category)
            query.category = category;
        let phrases;
        if (count === '1') {
            const count = await Phrase_1.default.countDocuments(query);
            const random = Math.floor(Math.random() * count);
            phrases = [await Phrase_1.default.findOne(query).skip(random)];
        }
        else {
            phrases = await Phrase_1.default.aggregate([
                { $match: query },
                { $sample: { size: parseInt(count) || 10 } }
            ]);
        }
        res.json(phrases);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getRandomPhrase = getRandomPhrase;
const getPhrasesByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const { language } = req.query;
        const query = { category };
        if (language)
            query.language = language;
        const phrases = await Phrase_1.default.find(query).sort('targetText');
        res.json(phrases);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getPhrasesByCategory = getPhrasesByCategory;
