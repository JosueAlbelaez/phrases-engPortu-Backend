const mongoose = require('mongoose');
const path = require('path');

// Define el esquema directamente en el script
const phraseSchema = new mongoose.Schema({
    language: {
        type: String,
        required: true,
        enum: ['English', 'Portuguese']
    },
    category: {
        type: String,
        required: true
    },
    targetText: String,
    translatedText: String,
    // Mantén los campos antiguos por ahora
    englishText: String,
    spanishText: String
});

const Phrase = mongoose.model('Phrase', phraseSchema);

// Asegúrate de que esta URL coincida con tu configuración de MongoDB
const MONGODB_URI = 'mongodb+srv://root:MqUvpEatcAjGsu0v@cluster0.3mkzs.mongodb.net/phrases_db';

async function updateDatabase() {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conectado a MongoDB');

        const result = await Phrase.updateMany(
            {}, // filtro vacío para actualizar todos los documentos
            {
                $rename: {
                    "englishText": "targetText",
                    "spanishText": "translatedText"
                },
                $set: {
                    "language": "English"
                }
            }
        );

        console.log(`Actualizados ${result.modifiedCount} documentos`);

        const samplePhrase = await Phrase.findOne();
        console.log('Ejemplo de documento actualizado:', samplePhrase);

    } catch (error) {
        console.error('Error durante la migración:', error);
    } finally {
        await mongoose.disconnect();
        console.log('Desconectado de MongoDB');
        process.exit(0);
    }
}

updateDatabase();