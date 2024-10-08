"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const phraseSchema = new mongoose_1.default.Schema({
    language: {
        type: String,
        required: true,
        enum: ['English', 'Portuguese']
    },
    category: {
        type: String,
        required: true,
        enum: [
            // English categories
            'Greeting and Introducing', 'Health and Wellness', 'Shopping and Business',
            'Travel and Tourism', 'Family and Personal Relationships', 'Work and Professions',
            'Education and Learning', 'Food and Restaurants', 'Emergencies and Safety',
            'Entertainment and Leisure', 'Technology and Communication', 'Culture and Society',
            'Opinions and Debates',
            // Portuguese categories
            'Cumprimentos e Apresentações', 'Diretrizes Básicas', 'Procedimentos em Escritórios',
            'Família e Casa', 'Saúde e Bem-Estar', 'Compras e Negócios',
            'Viagem e Turismo', 'Família e Relacionamentos Pessoais', 'Trabalho e Profissões',
            'Educação e Aprendizagem', 'Comida e Restaurantes', 'Emergências e Segurança',
            'Entretenimento e Lazer', 'Tecnologia e Comunicação', 'Cultura e Sociedade',
            'Opiniões e Debates'
        ]
    },
    targetText: {
        type: String,
        required: true
    },
    translatedText: {
        type: String,
        required: true
    }
});
exports.default = mongoose_1.default.model('Phrase', phraseSchema);
