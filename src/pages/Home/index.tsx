"use client";

import { Banner } from "./components/Banner";
import { CardCoffeeContainer } from "./components/CardCoffeeContainer";
import { CoffeeModel } from "@/domain/models/coffee";

interface HomeProps {
  data: CoffeeModel[];
}

export function Home({ data }: HomeProps) {
  return (
    <section className="pb-36">
      <Banner />
      <CardCoffeeContainer data={data} />
    </section>
  );
}
