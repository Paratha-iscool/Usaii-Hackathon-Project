import {GoogleGenAI} from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
console.log(apiKey);


const genAI = new GoogleGenAI({apiKey});



export const generateContent = async (prompt) => {

    const result = await genAI.models.generateContent(
        {model: "gemini-2.5-flash",
        contents: prompt});

    console.log(result.text);

    return result.text;

} 