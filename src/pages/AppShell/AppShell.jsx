import { useState, useEffect } from "react";
import ChallengeCard from "../../components/Challenge/ChallengeCard";
import SuggestionsList from "../../components/Lists/SuggestionsList";
import ImpactStats from "../../components/Stats/ImpactStats";

export default function AppShell() {
  const [completed, setCompleted] = useState(29);
  const [co2, setCo2] = useState(48);
  const [challengeDone, setChallengeDone] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const desafioDoDia = "Fazer uma refeição vegetariana";
  const sugestoes = [
    "Tomar banho de 5 minutos no máximo",
    "Utilizar energia renovável",
  ];

  const handleCompleteChallenge = () => {
    if (!challengeDone) {
      setCompleted((prev) => prev + 1);
      setCo2((prev) => prev + 2); // exemplo: cada desafio = 2kg CO2
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
    <div className="min-h-screen bg-green-50 p-6 text-green-900 font-sans max-w-md mx-auto">
      
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="mb-6 p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
      >
        {isDarkMode ? "Modo Claro" : "Modo Escuro"}
      </button>

      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-1">🌱 EcoTasks</h1>
        <h2 className="text-xl font-semibold text-green-700">Desafio do Dia</h2>
      </header>

      <ChallengeCard
        challenge={desafioDoDia}
        done={challengeDone}
        onComplete={handleCompleteChallenge}
      />

      <section className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Sugestões</h3>
        <SuggestionsList suggestions={sugestoes} />
        <p className="text-orange-500 text-center mt-2 text-sm cursor-pointer hover:underline">
          Ver mais sugestões
        </p>
      </section>

      <ImpactStats completed={completed} co2={co2} />
    </div>
  );
}
