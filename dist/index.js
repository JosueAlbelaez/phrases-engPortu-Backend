"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const colors_1 = __importDefault(require("colors"));
const db_1 = __importDefault(require("./config/db"));
const phrases_1 = __importDefault(require("./routes/phrases"));

dotenv_1.default.config();

const app = (0, express_1.default)();

// Configurar CORS para permitir solo solicitudes desde tu frontend en Vercel
const allowedOrigins = ['https://phrases-engportu-frontend.vercel.app'];  

app.use((0, cors_1.default)({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

// Middleware
app.use(express_1.default.json());

// Routes
app.use('/api/phrases', phrases_1.default);

const PORT = process.env.PORT || 5000;

// Conectar a la base de datos
(0, db_1.default)().then(() => {
    app.listen(PORT, () => {
        console.log(colors_1.default.yellow.bold(`Server running on port ${PORT}`));
    });
});
