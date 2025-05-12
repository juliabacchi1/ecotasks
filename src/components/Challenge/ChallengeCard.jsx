export default function ChallengeCard({ challenge, done, onComplete }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="text-2xl">🥕</span>
        <p className="text-lg font-medium text-gray-900 dark:text-gray-100">{challenge}</p>
      </div>
      <button
        onClick={onComplete}
        disabled={done}
        className={`w-full py-2 rounded-full text-white font-semibold transition ${
          done
            ? "bg-green-300 cursor-not-allowed"
            : "bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
        }`}
      >
        {done ? "✅ Feito!" : "✔️ Marcar como feito"}
      </button>
    </div>
  );
}
