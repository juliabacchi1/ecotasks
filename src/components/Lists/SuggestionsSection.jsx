import { useState } from "react";
import SuggestionsItems from "./SuggestionsItems";

export default function SuggestionsSection({ sugestoes, desafioDoDia }) {
  const [completedSuggestions, setCompletedSuggestions] = useState([]);
  const [favoriteSuggestions, setFavoriteSuggestions] = useState([]);

  const sugestoesFiltradas = sugestoes.filter(
    (sugestao) => sugestao !== desafioDoDia
  );
  const sugestoesParaExibir = sugestoesFiltradas.slice(0, 3);

  const handleCompleteSuggestion = (sugestao) => {
    if (!completedSuggestions.includes(sugestao)) {
      setCompletedSuggestions([...completedSuggestions, sugestao]);
    }
  };

  const toggleFavorite = (sugestao) => {
    if (favoriteSuggestions.includes(sugestao)) {
      setFavoriteSuggestions(
        favoriteSuggestions.filter((fav) => fav !== sugestao)
      );
    } else {
      setFavoriteSuggestions([...favoriteSuggestions, sugestao]);
    }
  };

  return (
    <section className="mt-8">
      <h3 className="text-lg font-semibold mb-6">Sugestões Sustentáveis</h3>

      <div className="space-y-4">
        {sugestoesParaExibir.map((sugestao, index) => (
          <SuggestionsItems
            key={index}
            sugestao={sugestao}
            isCompleted={completedSuggestions.includes(sugestao)}
            isFavorite={favoriteSuggestions.includes(sugestao)}
            onComplete={handleCompleteSuggestion}
            onToggleFavorite={() => toggleFavorite(sugestao)}
          />
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
