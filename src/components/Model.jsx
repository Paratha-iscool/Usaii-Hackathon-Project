import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenAI({ apiKey });

const chat = genAI.chats.create({
  model: "gemini-2.5-flash"
});

const CRISIS_KEYWORDS = [
  "suicide",
  "kill myself",
  "die",
  "end my life",
  "self-harm",
  "self harm",
  "SH",
  "drown",
  "hurt myself",
  "overdose",
  "can't go on"
];

export const generateContent = async (
  prompt,
  userLocation = "Unknown"
) => {

  const lowerPrompt = prompt.toLowerCase();

  const crisisDetected =
    CRISIS_KEYWORDS.some(keyword =>
      lowerPrompt.includes(keyword)
    );

  if (crisisDetected) {
    return JSON.stringify({
      hitlTriggered: true,
      triggerType: "SAFETY_CRISIS",
      detectedLocation: userLocation
    });
  }

  const result = await chat.sendMessage({
    message: prompt
  });

  return result.text;
};