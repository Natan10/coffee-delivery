import { CardCoffee } from "../CardCoffee";

export function CardCoffeeContainer() {
  return (
    <section className="h-full max-w-6xl mx-auto mt-8 px-3 py-8">
      <h2 className="font-baloo font-extrabold text-[32px] text-base-subtitle">
        Nossos cafés
      </h2>

      <div className="mt-14 grid justify-items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((k) => {
          return <CardCoffee key={k} />;
        })}
      </div>
    </section>
  );
}
