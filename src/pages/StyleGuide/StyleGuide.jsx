import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function StyleGuide() {
  return (
    <div className="p-6 space-y-10 text-center font-sans max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">🌱 EcoTasks - Style Guide</h1>

      {/* Typography */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Typography</h2>
        <p className="text-base">Body text - Plus Jakarta Sans</p>
        <p className="text-lg font-medium">Large text</p>
        <p className="text-sm text-gray-500">Small muted text</p>
      </section>

      {/* Colors */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Colors</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-brand text-white">Brand</div>
          <div className="p-4 rounded-xl bg-brand-dark text-white">
            Brand Dark
          </div>
          <div className="p-4 rounded-xl bg-brand-light text-brand-dark">
            Brand Light
          </div>
          <div className="p-4 rounded-xl bg-accent-orange text-white">
            Accent Orange
          </div>
          <div className="p-4 rounded-xl bg-grayish-light text-gray-800">
            Grayish Light
          </div>
          <div className="p-4 rounded-xl bg-grayish-dark text-white">
            Grayish Dark
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Buttons</h2>
        <div className="space-x-4">
          <Button className="bg-brand hover:bg-brand-dark text-white">
            Padrão
          </Button>
          <Button className="bg-accent-orange hover:brightness-110 text-white">
            Secundário
          </Button>
          <Button
            className="bg-brand-light text-brand-dark cursor-not-allowed"
            disabled
          >
            Desativado
          </Button>
        </div>
      </section>

      {/* Card */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Card</h2>
        <Card className="bg-white dark:bg-grayish-dark shadow-lg rounded-2xl">
          <CardContent className="p-6 text-left space-y-2">
            <p className="text-lg font-semibold">💡 Exemplo de Card</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Cards são usados para desafios e sugestões.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
