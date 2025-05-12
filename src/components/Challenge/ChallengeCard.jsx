export default function ChallengeCard({ challenge, done, onComplete }) {
  return (
    <div className="bg-white dark:bg-[#2A2A2A] rounded-2xl shadow-lg p-6 flex flex-col gap-6 transition-all">
      <div className="flex items-center gap-3">
        <span className="text-3xl">💡</span>
        <p className="text-lg font-semibold">{challenge}</p>
      </div>

      <button
        onClick={onComplete}
        disabled={done}
        aria-label={
          done ? "Desafio já concluído" : "Marcar desafio como concluído"
        }
        className={`w-full py-3 rounded-full text-white font-semibold transition-all duration-300 ${
          done
            ? "bg-[#6EE7B7] cursor-not-allowed"
            : "bg-[#00A86B] hover:bg-[#007A50] hover:scale-105"
        }`}
      >
        {done ? "✅ Feito!" : "✔️ Marcar como feito"}
      </button>
    </div>
  );
}
