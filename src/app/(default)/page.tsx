import { CoffeeModel } from "@/domain/models/coffee";
import { Home } from "@/pages/Home";
import { prisma } from "@/services/prisma";

async function getCoffeeData() {
  const data = (await prisma.coffee.findMany()) as CoffeeModel[];
  return data;
}

export default async function Main() {
  const data = await getCoffeeData();
  return <Home data={data} />;
}
