// src/components/Stats/ImpactStats.jsx
export default function ImpactStats({ completed, co2 }) {
  // Verifique se 'stats' (no caso, os dados 'completed' e 'co2') estão definidos
  const stats = { "Desafios Completos": completed, "CO2 Evitado (kg)": co2 };

  // Se 'stats' não for um objeto válido, retorne uma mensagem de erro ou um valor padrão
  if (!stats || Object.keys(stats).length === 0) {
    return <div>Dados não disponíveis</div>;
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
      <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">
        Impacto
      </h3>
      <div className="mt-4 grid grid-cols-2 gap-4">
        {Object.entries(stats).map(([key, value]) => (
          <div key={key} className="text-center">
            <p className="text-lg font-medium text-gray-900 dark:text-gray-100">
              {key}
            </p>
            <p className="text-2xl font-semibold text-green-600 dark:text-green-400">
              {value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
