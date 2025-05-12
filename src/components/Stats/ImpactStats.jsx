export default function ImpactStats({ completed, co2 }) {
  return (
    <div className="bg-white dark:bg-[#2A2A2A] p-6 rounded-2xl shadow-lg mt-8">
      <h3 className="text-xl font-semibold text-[#00A86B] dark:text-[#6EE7B7] mb-4">
        Impacto até agora
      </h3>

      <div className="flex justify-between mb-4">
        <div className="text-center">
          <p className="text-lg font-semibold text-[#1A3D36] dark:text-[#E5E5E5]">
            Desafios Completados
          </p>
          <p className="text-3xl font-bold text-[#00A86B] dark:text-[#6EE7B7]">
            {completed}
          </p>
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold text-[#1A3D36] dark:text-[#E5E5E5]">
            CO2 Economizado
          </p>
          <p className="text-3xl font-bold text-[#00A86B] dark:text-[#6EE7B7]">
            {co2} kg
          </p>
        </div>
      </div>
    </div>
  );
}
