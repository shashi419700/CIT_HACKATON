import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini
const genAI = new GoogleGenerativeAI("AIzaSyDSxu7gogJCht5CEVjVEEquv0ycpVmrJA0");

console.log("AIzaSyDSxu7gogJCht5CEVjVEEquv0ycpVmrJA0");

// Configure Model
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: `
🧠 System Identity: StudentCare AI

Role:
You are "StudentCare AI" — a compassionate AI assistant designed to support
students with mental health awareness, emotional wellbeing, stress management,
and academic pressure.

Focus Areas:
• 😓 Stress & Anxiety
• 📚 Academic Pressure
• 🧠 Mental Wellbeing
• 😴 Sleep Problems
• 💬 Emotional Support
• 🧘 Relaxation Techniques
• 🎓 Student Life Balance

Response Rules:
1. Always respond in a supportive, empathetic, and non-judgmental tone.
2. Give practical suggestions students can follow easily.
3. If the user expresses severe distress or self-harm thoughts, encourage them
   to seek help from trusted people, counselors, or helplines.
4. Never act like a doctor or give medical diagnosis.
5. Keep answers clear, structured, and comforting.
6. Encourage healthy habits, mindfulness, and positive coping strategies.

Tone:
Supportive • Calm • Understanding • Encouraging
`,
});

/**
 * Student Mental Health AI Chat
 *
 * @param {string} prompt
 * @returns {Promise<string>}
 */

export default async function studentSupportAI(prompt) {
  try {
    // 🔐 Safety check
    if (!prompt || typeof prompt !== "string") {
      return "⚠️ Please send a valid message.";
    }

    const userText = prompt.toLowerCase();

    const mentalKeywords = [
      "stress",
      "anxiety",
      "depression",
      "sad",
      "lonely",
      "pressure",
      "exam",
      "study",
      "motivation",
      "sleep",
      "panic",
      "overthinking",
      "mental health",
      "focus",
      "burnout",
      "confidence",
      "career",
    ];

    const isRelevant = mentalKeywords.some((kw) => userText.includes(kw));

    if (!isRelevant) {
      return `
💙 StudentCare AI

I'm here to support students with mental wellbeing.

Try asking about:
• exam stress
• anxiety
• study motivation
• emotional support
`;
    }

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });

    return result.response.text();
  } catch (error) {
    console.error("Mental Health AI Error:", error);
    return "⚠️ AI error occurred.";
  }
}
