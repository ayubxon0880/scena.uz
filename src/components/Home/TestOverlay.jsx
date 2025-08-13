import { useState } from "react";

export default function TestOverlay({ onClose }) {
    const tests = [
        {
            title: "Тест 1: Эмоциональное состояние",
            questions: [
                "Чувствуете ли вы тревогу чаще, чем обычно?",
                "Часто ли у вас бывают перепады настроения?",
                "Трудно ли вам расслабиться?",
                "Чувствуете ли вы усталость большую часть времени?"
            ]
        },
        {
            title: "Тест 2: Уровень стресса",
            questions: [
                "Часто ли вы раздражаетесь по мелочам?",
                "Сложно ли вам концентрироваться?",
                "Бывает ли у вас бессонница?",
                "Чувствуете ли вы напряжение в теле?"
            ]
        },
        {
            title: "Тест 3: Самооценка",
            questions: [
                "Вы довольны собой?",
                "Часто ли вы сравниваете себя с другими?",
                "Считаете ли вы себя успешным человеком?",
                "Принимаете ли вы комплименты?"
            ]
        },
        {
            title: "Тест 4: Отношения",
            questions: [
                "Чувствуете ли вы поддержку от близких?",
                "Легко ли вам говорить о своих чувствах?",
                "Часто ли у вас бывают конфликты?",
                "Чувствуете ли вы себя одиноким?"
            ]
        }
    ];

    const [currentTest, setCurrentTest] = useState(0);
    const [answers, setAnswers] = useState({});

    const handleAnswer = (qIndex, value) => {
        setAnswers((prev) => ({
            ...prev,
            [`${currentTest}-${qIndex}`]: value
        }));
    };

    const nextTest = () => {
        if (currentTest < tests.length - 1) {
            setCurrentTest(currentTest + 1);
        } else {
            alert("Тест завершен! Спасибо за участие.");
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-8 max-w-lg w-full text-center shadow-xl">
                <h2 className="text-2xl font-bold mb-4">{tests[currentTest].title}</h2>
                <div className="space-y-4 text-left">
                    {tests[currentTest].questions.map((q, i) => (
                        <div key={i}>
                            <p className="mb-2">{q}</p>
                            <div className="flex gap-2">
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <button
                                        key={num}
                                        className={`px-3 py-1 rounded-lg border transition ${
                                            answers[`${currentTest}-${i}`] === num
                                                ? "bg-[#d5beb0] text-white"
                                                : "bg-gray-100 hover:bg-gray-200"
                                        }`}
                                        onClick={() => handleAnswer(i, num)}
                                    >
                                        {num}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-6 flex justify-between">
                    <button
                        className="px-6 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
                        onClick={onClose}
                    >
                        Закрыть
                    </button>
                    <button
                        className="px-6 py-2 bg-[#d5beb0] text-white rounded-lg hover:bg-[#7A5240] transition"
                        onClick={nextTest}
                    >
                        {currentTest < tests.length - 1 ? "Далее" : "Завершить"}
                    </button>
                </div>
            </div>
        </div>
    );
}
