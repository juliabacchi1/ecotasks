import { useState, useEffect } from "react";
import ChallengeCard from "../../components/Challenge/ChallengeCard";
import SuggestionsSection from "../../components/Lists/SuggestionsSection";
import ImpactStats from "../../components/Stats/ImpactStats";
import suggestions from "../../data/SuggestionsList";

export default function AppShell() {
  const [completed, setCompleted] = useState(29);
  const [co2, setCo2] = useState(48);
  const [challengeDone, setChallengeDone] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const sugestoes = suggestions;

  function getSugestaoDoDia(lista) {
    const hoje = new Date();
    const seed = hoje.getFullYear() + hoje.getMonth() + hoje.getDate();
    const index = seed % lista.length;
    return lista[index];
  }

  const desafioDoDia = getSugestaoDoDia(sugestoes);

  const handleCompleteChallenge = () => {
    if (!challengeDone) {
      setCompleted((prev) => prev + 1);
      setCo2((prev) => prev + 2);
      setChallengeDone(true);
    }
  };

  useEffect(() => {
    const userPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(userPrefersDark);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-[#F5F9F7] dark:bg-[#1E1E1E] text-[#1A3D36] dark:text-[#E5E5E5] transition-colors duration-300 font-sans px-4 py-6 max-w-md mx-auto">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold tracking-tight mb-1 mt-2">
          🌱 EcoTasks
        </h1>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="px-3 py-1.5 rounded-full bg-[#00A86B] text-white text-sm hover:bg-[#007A50] transition"
          aria-label={isDarkMode ? "Ativar modo claro" : "Ativar modo escuro"}
        >
          {isDarkMode ? "☀️ Claro" : "🌙 Escuro"}
        </button>
      </div>

      <header className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Desafio do Dia</h2>
      </header>

      <ChallengeCard
        challenge={desafioDoDia}
        done={challengeDone}
        onComplete={handleCompleteChallenge}
      />

      <SuggestionsSection sugestoes={sugestoes} desafioDoDia={desafioDoDia} />

      <div className="mt-5">
        <ImpactStats completed={completed} co2={co2} />
      </div>
    </div>
  );
}
