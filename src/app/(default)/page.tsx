import { CoffeeModel } from "@/domain/models/coffee";
import { Home } from "@/pages/Home";
import { prisma } from "@/services/prisma";

export default async function Main() {
  const data = (await prisma.coffee.findMany()) as CoffeeModel[];

  return <Home data={data} />;
}
