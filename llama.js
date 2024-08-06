import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function getChatbotResponse(userMessage) {
    const response = await groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content: userMessage,
            },
        ],
        model: "llama3-8b-8192",
    });
    return response.choices[0]?.message?.content || "";
}
