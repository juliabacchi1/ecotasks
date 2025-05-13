import { useState, useEffect } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SuggestionsItem from "./SuggestionsItems";

export default function SuggestionsSortable({
  sugestoes,
  completedSuggestions,
  favoriteSuggestions,
  onComplete,
  onToggleFavorite,
}) {
  const [items, setItems] = useState(sugestoes);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = items.findIndex((item) => item === active.id);
      const newIndex = items.findIndex((item) => item === over.id);

      setItems((items) => arrayMove(items, oldIndex, newIndex));
    }
  };

  useEffect(() => {
    setItems(sugestoes);
  }, [sugestoes]);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <div className="space-y-4">
          {items.map((sugestao) => (
            <SuggestionsItem
              key={sugestao}
              id={sugestao}
              sugestao={sugestao}
              isCompleted={completedSuggestions.includes(sugestao)}
              isFavorite={favoriteSuggestions.includes(sugestao)}
              onComplete={onComplete}
              onToggleFavorite={() => onToggleFavorite(sugestao)}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}
