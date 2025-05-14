import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import ChallengeCard from "../../components/Challenge/ChallengeCard";
import SuggestionsSection from "../../components/Lists/SuggestionsSection";
import ImpactStats from "../../components/Stats/ImpactStats";
import suggestions from "../../data/SuggestionsList";

export default function AppShell() {
  const [co2, setCo2] = useState(0);
  const [challengeDone, setChallengeDone] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [sugestoes, setSugestoes] = useState(suggestions);

  function getSugestaoDoDia(lista) {
    const hoje = new Date();
    const seed = hoje.getFullYear() + hoje.getMonth() + hoje.getDate();
    const index = seed % lista.length;
    return lista[index];
  }

  const desafioDoDia = getSugestaoDoDia(sugestoes);

  const handleCompleteChallenge = () => {
    if (!challengeDone) {
      setCo2((prev) => prev + desafioDoDia.co2);
      setSugestoes((prev) => {
        const jaExiste = prev.find((item) => item.title === desafioDoDia.title);

        if (jaExiste) {
          return prev.map((item) =>
            item.title === desafioDoDia.title
              ? { ...item, completed: true }
              : item
          );
        }

        return [...prev, { ...desafioDoDia, completed: true }];
      });
      setChallengeDone(true);
    }
  };

  const handleCompleteSuggestion = (id) => {
    const updatedSugestoes = sugestoes.map((sugestao) =>
      sugestao.title === id.title ? { ...sugestao, completed: true } : sugestao
    );

    setCo2((prev) => prev + id.co2);

    const sugestoesPorBloco = [];
    let blocoAtual = [];
    updatedSugestoes.forEach((sugestao, index) => {
      blocoAtual.push(sugestao);
      if (blocoAtual.length === 3 || index === updatedSugestoes.length - 1) {
        sugestoesPorBloco.push(blocoAtual);
        blocoAtual = [];
      }
    });

    const reorganizedSugestoes = sugestoesPorBloco.map((bloco) => {
      const completadas = bloco.filter((sugestao) => sugestao.completed);
      const pendentes = bloco.filter((sugestao) => !sugestao.completed);
      return [...pendentes, ...completadas];
    });

    const flatSugestoes = reorganizedSugestoes.flat();
    setSugestoes(flatSugestoes);
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
        <img
          src="/logo/logomarca.svg"
          alt="EcoTasks logo"
          className="h-8 mt-2 hidden md:block"
        />
        <img
          src="/logo/logo.svg"
          alt="EcoTasks logo"
          className="h-8 mt-2 block md:hidden"
        />

        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          aria-label={isDarkMode ? "Ativar modo claro" : "Ativar modo escuro"}
          className="p-3 rounded-full bg-[#00A86B] text-white hover:bg-[#007A50] transition"
        >
          {isDarkMode ? (
            <SunIcon className="h-5 w-5" />
          ) : (
            <MoonIcon className="h-5 w-5" />
          )}
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

      <SuggestionsSection
        sugestoes={sugestoes}
        desafioDoDia={desafioDoDia}
        onCompleteSuggestion={handleCompleteSuggestion}
      />

      <div className="mt-5">
        <ImpactStats sugestoes={sugestoes} co2={co2} />
      </div>
    </div>
  );
}
