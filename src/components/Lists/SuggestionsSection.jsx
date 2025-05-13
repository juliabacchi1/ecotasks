import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function SuggestionsSection({ sugestoes, desafioDoDia }) {
  const [completedSuggestions, setCompletedSuggestions] = useState([]);

  const sugestoesFiltradas = sugestoes.filter(
    (sugestao) => sugestao !== desafioDoDia
  );
  const sugestoesParaExibir = sugestoesFiltradas.slice(0, 3);

  const handleCompleteSuggestion = (sugestao) => {
    if (!completedSuggestions.includes(sugestao)) {
      setCompletedSuggestions([...completedSuggestions, sugestao]);
    }
  };

  return (
    <section className="mt-8">
      <h3 className="text-lg font-semibold mb-6">Sugestões Sustentáveis</h3>

      <div className="space-y-4">
        {sugestoesParaExibir.map((sugestao, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#2A2A2A] p-4 rounded-xl shadow-md flex justify-between items-center"
          >
            <p className="text-sm text-[#1A3D36] dark:text-[#E5E5E5]">
              {sugestao}
            </p>
            <button
              onClick={() => handleCompleteSuggestion(sugestao)}
              disabled={completedSuggestions.includes(sugestao)}
              className={`flex items-center gap-2 text-sm font-medium transition duration-300 ${
                completedSuggestions.includes(sugestao)
                  ? "cursor-not-allowed text-[#6EE7B7]"
                  : "text-[#00A86B] hover:text-[#007A50]"
              }`}
            >
              <CheckCircleIcon className="h-5 w-5" />
              {completedSuggestions.includes(sugestao) ? "Feito!" : "Concluir"}
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <button
          aria-label="Ver mais sugestões sustentáveis"
          className="text-[#E58E26] text-sm cursor-pointer hover:underline bg-transparent border-none"
        >
          Ver mais sugestões
        </button>
      </div>
    </section>
  );
}
