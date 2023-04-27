"use client";

import { Banner } from "./components/Banner";
import { CardCoffeeContainer } from "./components/CardCoffeeContainer";

export function Home() {
  return (
    <section className="pb-36">
      <Banner />
      <CardCoffeeContainer />
    </section>
  );
}
