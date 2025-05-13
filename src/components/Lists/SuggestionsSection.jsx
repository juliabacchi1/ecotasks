import { useState } from "react";
import SuggestionsSortable from "./SuggestionsSortable";

export default function SuggestionsSection({ sugestoes, desafioDoDia }) {
  const [completedSuggestions, setCompletedSuggestions] = useState([]);
  const [favoriteSuggestions, setFavoriteSuggestions] = useState([]);
  const [quantidadeSugestoes, setQuantidadeSugestoes] = useState(3);

  const sugestoesFiltradas = sugestoes.filter(
    (sugestao) => sugestao !== desafioDoDia
  );
  const sugestoesParaExibir = sugestoesFiltradas.slice(0, quantidadeSugestoes);

  const sugestoesOrdenadas = [...sugestoesParaExibir].sort((a, b) => {
    const aConcluida = completedSuggestions.includes(a);
    const bConcluida = completedSuggestions.includes(b);
    return aConcluida - bConcluida;
  });

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

  const handleToggleVerMais = () => {
    if (quantidadeSugestoes >= sugestoesFiltradas.length) {
      setQuantidadeSugestoes(3);
    } else {
      setQuantidadeSugestoes(quantidadeSugestoes + 3);
    }
  };

  const mostrarBotao = sugestoesFiltradas.length > 3;

  return (
    <section className="mt-8">
      <h3 className="text-lg font-semibold mb-6">Sugestões Sustentáveis</h3>

      <SuggestionsSortable
        sugestoes={sugestoesOrdenadas}
        completedSuggestions={completedSuggestions}
        favoriteSuggestions={favoriteSuggestions}
        onComplete={handleCompleteSuggestion}
        onToggleFavorite={toggleFavorite}
      />

      {mostrarBotao && (
        <div className="text-center mt-4">
          <button
            onClick={handleToggleVerMais}
            aria-label="Alternar sugestões"
            className="text-[#E58E26] text-sm cursor-pointer hover:underline bg-transparent border-none"
          >
            {quantidadeSugestoes >= sugestoesFiltradas.length
              ? "Ver menos"
              : "Ver mais sugestões"}
          </button>
        </div>
      )}
    </section>
  );
}
