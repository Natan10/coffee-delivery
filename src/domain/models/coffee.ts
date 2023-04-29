export interface CoffeeModel {
  id: number;
  name: string;
  description?: string;
  price: number;
  qtd: number;
  types: string[]
}