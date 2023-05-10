"use client";

import { useCoffeeStore } from "@/store/coffeeStore";
import { Banner } from "./components/Banner";
import { CardCoffeeContainer } from "./components/CardCoffeeContainer";
import { CoffeeModel } from "@/domain/models/coffee";
import { useEffect } from "react";

interface HomeProps {
  data: CoffeeModel[];
}

export function Home({ data }: HomeProps) {
  const coffeeStore = useCoffeeStore();

  useEffect(() => {
    if (!coffeeStore.coffees.length) {
      coffeeStore.addCoffees(data);
    }
  }, [data]);

  return (
    <section className="pb-36">
      <Banner />
      <CardCoffeeContainer />
    </section>
  );
}
