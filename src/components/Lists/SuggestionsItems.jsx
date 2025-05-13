import {
  CheckCircleIcon as CheckFilled,
  StarIcon as StarFilled,
} from "@heroicons/react/24/solid";
import {
  CheckCircleIcon as CheckOutline,
  StarIcon as StarOutline,
} from "@heroicons/react/24/outline";

export default function SuggestionsItems({
  sugestao,
  isCompleted,
  isFavorite,
  onComplete,
  onToggleFavorite,
}) {
  return (
    <div className="bg-white dark:bg-[#2A2A2A] p-4 rounded-xl shadow-md flex justify-between items-center">
      <p className="text-sm text-[#1A3D36] dark:text-[#E5E5E5]">{sugestao}</p>
      <div className="flex gap-2 items-center">
        <button
          onClick={onToggleFavorite}
          aria-label="Favoritar sugestão"
          className="text-yellow-500 hover:text-yellow-400 transition duration-400"
        >
          {isFavorite ? (
            <StarFilled className="h-5 w-5" />
          ) : (
            <StarOutline className="h-5 w-5" />
          )}
        </button>

        <button
          onClick={() => onComplete(sugestao)}
          disabled={isCompleted}
          aria-label="Concluir sugestão"
          className="text-[#00A86B] hover:text-[#007A50] transition duration-400"
        >
          {isCompleted ? (
            <CheckFilled className="h-5 w-5" />
          ) : (
            <CheckOutline className="h-5 w-5" />
          )}
        </button>
      </div>
    </div>
  );
}
