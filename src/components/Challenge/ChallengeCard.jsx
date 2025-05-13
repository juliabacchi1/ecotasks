import { useState } from "react";
import { LightBulbIcon } from "@heroicons/react/24/outline";

export default function ChallengeCard({ challenge, done, onComplete }) {
  const [successMessage, setSuccessMessage] = useState("");

  const successMessages = [
    "✅ Desafio concluído! Boa!",
    "🌱 Feito com consciência!",
    "💚 Você fez a diferença hoje!",
    "♻️ Sustentabilidade em ação!",
    "🌎 Mais um passo pelo planeta!",
    "👏 Missão cumprida!",
    "💪 Você mandou bem!",
  ];

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * successMessages.length);
    setSuccessMessage(successMessages[randomIndex]);
    onComplete();
  };

  return (
    <div className="bg-white dark:bg-[#2A2A2A] rounded-2xl shadow-lg p-6 flex flex-col gap-6 transition-all">
      <div className="flex items-center gap-3">
        <LightBulbIcon className="h-6 w-6 text-[#efbe42]" aria-hidden="true" />
        <p className="text-lg font-semibold">{challenge}</p>
      </div>

      <button
        onClick={handleClick}
        disabled={done}
        className={`w-full py-3 rounded-full text-white font-semibold transition-all duration-300 ${
          done
            ? "bg-[#6EE7B7] cursor-not-allowed"
            : "bg-[#00A86B] hover:bg-[#007A50] hover:scale-105"
        }`}
        aria-label={done ? "Desafio concluído" : "Marcar desafio como feito"}
      >
        {done ? successMessage || "Desafio feito!" : "Marcar como feito"}
      </button>
    </div>
  );
}