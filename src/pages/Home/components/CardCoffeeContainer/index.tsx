import { CoffeeModel } from "@/domain/models/coffee";
import { CardCoffee } from "../CardCoffee";

interface CardCoffeeContainerProps {
  data: CoffeeModel[];
}

export function CardCoffeeContainer({ data }: CardCoffeeContainerProps) {
  return (
    <section className="h-full max-w-6xl mx-auto mt-8 px-3 py-8">
      <h2 className="font-baloo font-extrabold text-[32px] text-base-subtitle">
        Nossos cafés
      </h2>

      <div className="mt-14 grid justify-items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((coffee, index) => {
          return <CardCoffee data={coffee} key={index} />;
        })}
      </div>
    </section>
  );
}
