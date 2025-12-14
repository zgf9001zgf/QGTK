import { GoogleGenAI, Type } from "@google/genai";
import { Question } from "../types";

// Helper to generate a unique ID
const generateId = () => Math.random().toString(36).substr(2, 9);

export const generateQuestions = async (topic: string, count: number = 5, difficulty: string = "medium"): Promise<Question[]> => {
  if (!process.env.API_KEY) {
    throw new Error("API Key is missing.");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    // Explicitly request Chinese output
    contents: `生成 ${count} 道关于 "${topic}" 的单项选择题。难度: ${difficulty}。请务必使用中文（简体）输出。`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            text: { type: Type.STRING, description: "题目内容 (Question text in Chinese)" },
            options: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "4个选项的数组 (Array of 4 possible answers in Chinese)"
            },
            correctAnswerIndex: { type: Type.INTEGER, description: "正确选项的索引 (0-3)" },
            explanation: { type: Type.STRING, description: "简短的解析，解释为什么该选项是正确的 (Explanation in Chinese)" },
          },
          required: ["text", "options", "correctAnswerIndex", "explanation"],
        },
      },
    },
  });

  const rawData = JSON.parse(response.text || "[]");

  return rawData.map((q: any) => ({
    id: generateId(),
    text: q.text,
    options: q.options,
    correctAnswerIndex: q.correctAnswerIndex,
    explanation: q.explanation,
    category: topic,
    created: Date.now(),
  }));
};

export const explainQuestion = async (question: Question): Promise<string> => {
  if (!process.env.API_KEY) {
    return "请配置 API Key 以获取 AI 解析。";
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    题目: ${question.text}
    选项: ${question.options.join(", ")}
    正确答案: ${question.options[question.correctAnswerIndex]}
    
    请用中文（简体）清晰简洁地解释为什么这个答案是正确的，以及为什么其他选项可能是错误的。
  `;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text || "暂无解析。";
};