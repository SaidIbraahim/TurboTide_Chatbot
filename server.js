import express from 'express';
import { getChatbotResponse } from './llama.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

app.post('/getChatbotResponse', async (req, res) => {
    const { userMessage } = req.body;
    const chatbotResponse = await getChatbotResponse(userMessage);
    res.json({ chatbotResponse });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
