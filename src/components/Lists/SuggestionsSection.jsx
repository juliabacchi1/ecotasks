import { useState } from "react";
import SuggestionsSortable from "./SuggestionsSortable";

export default function SuggestionsSection({ sugestoes, desafioDoDia }) {
  const [completedSuggestions, setCompletedSuggestions] = useState([]);
  const [favoriteSuggestions, setFavoriteSuggestions] = useState([]);
  const [showCount, setShowCount] = useState(3); // Estado para controlar quantas sugestões mostrar
  const [isShowMore, setIsShowMore] = useState(true); // Estado para controlar "Ver mais" ou "Ver menos"

  // Filtra as sugestões para excluir o desafio do dia
  const sugestoesFiltradas = sugestoes.filter(
    (sugestao) => sugestao !== desafioDoDia
  );

  // Organiza a lista com as concluídas no final
  const sugestoesParaExibir = [
    ...sugestoesFiltradas.filter(
      (sugestao) => !completedSuggestions.includes(sugestao)
    ),
    ...sugestoesFiltradas.filter((sugestao) =>
      completedSuggestions.includes(sugestao)
    ),
  ].slice(0, showCount); // Limita a quantidade de sugestões com base no showCount

  // Lida com a conclusão de uma sugestão
  const handleCompleteSuggestion = (sugestao) => {
    if (!completedSuggestions.includes(sugestao)) {
      setCompletedSuggestions([...completedSuggestions, sugestao]);
    }
  };

  // Lida com a mudança de favorito de uma sugestão
  const toggleFavorite = (sugestao) => {
    if (favoriteSuggestions.includes(sugestao)) {
      setFavoriteSuggestions(
        favoriteSuggestions.filter((fav) => fav !== sugestao)
      );
    } else {
      setFavoriteSuggestions([...favoriteSuggestions, sugestao]);
    }
  };

const handleLoadMore = () => {
  if (isShowMore) {
    // Quando em "Ver mais", adiciona 3 sugestões
    setShowCount((prev) => prev + 3);
    if (showCount + 3 >= sugestoesFiltradas.length) {
      setIsShowMore(false); // Muda para "Ver menos" se não houver mais sugestões
    }
  } else {
    // Quando em "Ver menos", volta para o início (apenas 3 sugestões)
    setShowCount(3);
    setIsShowMore(true); // Muda para "Ver mais" após voltar para o início
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
