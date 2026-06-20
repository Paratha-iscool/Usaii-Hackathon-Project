const {GoogleGenerativeAi} = require("@google/generative-ai");

const genAI = new GoogleGenerativeAi(process.env.REACT_APP_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const generateContent = async (prompt) => {
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    return result.response.text;
} 