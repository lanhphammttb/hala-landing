"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const QUESTIONS = [
  {
    question: "Bạn cảm thấy mình hợp với trang sức Vàng hay Bạc?",
    answers: [{ option: "Vàng", trait: "Warm" }, { option: "Bạc", trait: "Cool" }]
  },
  {
    question: "Mạch máu ở cổ tay bạn có màu xanh lá hay xanh dương/tím?",
    answers: [{ option: "Xanh lá", trait: "Warm" }, { option: "Xanh dương/Tím", trait: "Cool" }]
  },
  {
    question: "Bạn trông rạng rỡ nhất khi mặc màu cam đất hay màu hồng cánh sen?",
    answers: [{ option: "Cam Đất", trait: "Warm" }, { option: "Hồng Cánh Sen", trait: "Cool" }]
  }
];

export default function ColorQuiz({ onResult }: { onResult: (tone: string) => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState({ Warm: 0, Cool: 0 });
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (trait: string) => {
    const newScores = { ...scores, [trait]: scores[trait as keyof typeof scores] + 1 };
    setScores(newScores);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const finalTone = newScores.Warm > newScores.Cool ? "Warm" : "Cool";
      setResult(finalTone);
      onResult(finalTone);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setScores({ Warm: 0, Cool: 0 });
    setResult(null);
    onResult("All");
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="text-3xl font-serif text-gray-800 mb-4">Personal Color Quiz</h2>
        <p className="text-gray-600 mb-10">
          Hãy để chúng mình tư vấn màu sắc phụ kiện len phù hợp nhất với sắc độ cá nhân của bạn.
        </p>

        <div className="bg-rose-50 rounded-2xl p-8 mb-8 relative min-h-[300px] flex flex-col justify-center shadow-sm">
          <AnimatePresence mode="wait">
            {!result ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-medium text-gray-800 mb-8">
                  {QUESTIONS[currentStep].question}
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {QUESTIONS[currentStep].answers.map((answer, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(answer.trait)}
                      className="bg-white hover:bg-rose-100 border border-rose-200 text-gray-700 px-6 py-4 rounded-xl transition-all duration-200 flex-1 font-medium shadow-sm hover:shadow"
                    >
                      {answer.option}
                    </button>
                  ))}
                </div>
                <div className="mt-8 text-sm text-gray-400">
                  Câu hỏi {currentStep + 1} / {QUESTIONS.length}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h3 className="text-3xl font-serif text-gray-800 mb-4">
                  Tone da của bạn: <span className="text-rose-500 font-bold">{result} Tone</span>
                </h3>
                <p className="text-gray-600 mb-8">
                  {result === "Warm"
                    ? "Sắc da của bạn phù hợp nhất với các tông màu ấm áp như Cam Đất, Vàng Mustard, hoặc Đỏ Đất. Chúng tôi đã lọc ra các gợi ý tốt nhất cho bạn."
                    : "Sắc da của bạn tỏa sáng với các tông màu lạnh như Xanh Navy, Hồng Phấn, Xám Tro, hoặc Trắng Tinh. Cùng xem các lựa chọn sau!"}
                </p>
                <button
                  onClick={handleReset}
                  className="text-rose-500 underline text-sm hover:text-rose-600"
                >
                  Làm lại bài trắc nghiệm
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
