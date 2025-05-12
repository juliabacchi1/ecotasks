export default function SuggestionsList({ suggestions }) {
  return (
    <div className="space-y-4">
      {suggestions.map((suggestion, index) => (
        <div
          key={index}
          className="bg-white dark:bg-[#2A2A2A] p-4 rounded-xl shadow-md flex justify-between items-center"
        >
          <p className="text-sm text-[#1A3D36] dark:text-[#E5E5E5]">
            {suggestion}
          </p>
          <button className="text-[#00A86B] hover:text-[#007A50] transition duration-300">
            ➡️
          </button>
        </div>
      ))}
    </div>
  );
}
