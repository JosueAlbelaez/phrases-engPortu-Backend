import mongoose from 'mongoose';

export interface IPhrase {
    language: string;
    category: string;
    targetText: string;
    translatedText: string;
}

const phraseSchema = new mongoose.Schema<IPhrase>({
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

export default mongoose.model<IPhrase>('Phrase', phraseSchema);