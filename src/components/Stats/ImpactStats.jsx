import { TrophyIcon, CloudIcon } from "@heroicons/react/24/outline";

export default function ImpactStats({ completed, co2 }) {
  return (
    <div className="relative overflow-hidden rounded-3xl shadow-lg p-[1px]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00a86b] via-[#6ee7b7] to-[#b2f5ea] animate-[spin_6s_linear_infinite] rounded-3xl opacity-40" />
      <div className="relative z-10 bg-white dark:bg-[#1E1E1E] rounded-3xl p-6">
        <h3 className="text-xl text-center font-semibold dark:text-[#6EE7B7] mb-5">
          Meu impacto até hoje
        </h3>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center gap-1">
            <TrophyIcon className="h-8 w-8 text-[#00A86B]" />
            <p className="text-4xl font-extrabold text-[#1A3D36] dark:text-[#E5E5E5]">
              {completed}
            </p>
            <span className="text-sm text-[#64748b] dark:text-[#94a3b8]">
              desafios
            </span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <CloudIcon className="h-8 w-8 text-[#00A86B]" />
            <p className="text-4xl font-extrabold text-[#1A3D36] dark:text-[#E5E5E5]">
              {co2 > 0 ? Math.round(co2) : 0} kg{" "}
            </p>
            <span className="text-sm text-[#64748b] dark:text-[#94a3b8]">
              CO₂ evitado
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
