import { useState } from "react";
import SuggestionsSortable from "./SuggestionsSortable";

export default function SuggestionsSection({
  sugestoes,
  desafioDoDia,
  onCompleteSuggestion,
}) {
  const [completedSuggestions, setCompletedSuggestions] = useState([]);
  const [favoriteSuggestions, setFavoriteSuggestions] = useState([]);
  const [showCount, setShowCount] = useState(3);
  const [isShowMore, setIsShowMore] = useState(true);

  const sugestoesFiltradas = sugestoes.filter(
    (sugestao) => sugestao.title !== desafioDoDia.title
  );

  const organizarSugestoes = (lista) => {
    const completadas = lista.filter((s) => s.completed);
    const pendentes = lista.filter((s) => !s.completed);

    return [...pendentes, ...completadas];
  };

  const sugestoesParaExibir = organizarSugestoes(sugestoesFiltradas).slice(
    0,
    showCount
  );

  const handleCompleteSuggestion = (sugestao) => {
    if (!completedSuggestions.includes(sugestao.title)) {
      setCompletedSuggestions([...completedSuggestions, sugestao.title]);
      onCompleteSuggestion(sugestao);
    }
  };

  const toggleFavorite = (sugestao) => {
    if (favoriteSuggestions.includes(sugestao.title)) {
      setFavoriteSuggestions(
        favoriteSuggestions.filter((fav) => fav !== sugestao.title)
      );
    } else {
      setFavoriteSuggestions([...favoriteSuggestions, sugestao.title]);
    }
  };

  const handleLoadMore = () => {
    if (isShowMore) {
      setShowCount((prev) => prev + 3);
      if (showCount + 3 >= sugestoesFiltradas.length) {
        setIsShowMore(false);
      }
    } else {
      setShowCount(3);
      setIsShowMore(true);
    }
  };

  return (
    <section className="mt-8">
      <h3 className="text-lg font-semibold mb-6">Sugestões Sustentáveis</h3>

      <SuggestionsSortable
        sugestoes={sugestoesParaExibir}
        completedSuggestions={completedSuggestions}
        favoriteSuggestions={favoriteSuggestions}
        onComplete={handleCompleteSuggestion}
        onToggleFavorite={toggleFavorite}
      />

      <div className="text-center mt-4">
        <button
          onClick={handleLoadMore}
          aria-label={
            isShowMore
              ? "Ver mais sugestões sustentáveis"
              : "Ver menos sugestões"
          }
          className="text-[#E58E26] text-sm cursor-pointer hover:underline bg-transparent border-none"
        >
          {isShowMore ? "Ver mais sugestões" : "Ver menos"}
        </button>
      </div>
    </section>
  );
}