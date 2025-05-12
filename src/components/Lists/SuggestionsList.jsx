// src/components/SuggestionsList.jsx
export default function SuggestionsList({ suggestions }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
      <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">Sugestões</h3>
      <ul className="mt-4 space-y-2">
        {suggestions.map((suggestion, index) => (
          <li
            key={index}
            className="text-gray-800 dark:text-gray-200 border-b border-gray-300 dark:border-gray-600 py-2"
          >
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
}
