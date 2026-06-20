import {GoogleGenAI} from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
console.log(apiKey);


const genAI = new GoogleGenAI({apiKey});
const chat = genAI.chats.create({   model: "gemini-2.5-flash"   })


export const generateContent = async (prompt) => {

    const result = await chat.sendMessage({ message: prompt })

    console.log(result.text);

    return result.text;

} 