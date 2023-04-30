import {create} from 'zustand'

import { CoffeeModel } from '@/domain/models/coffee';

export interface CartData {
  id: number;
  qtd: number;
  name: string;
  price: number;
}

export interface CoffeeStoreData {
  coffees: CoffeeModel[];
  cart: CartData[];
  addCoffees: (data: CoffeeModel[]) => void; 
  addCoffeeToCart: (data: CartData) => void;
  updateCoffeeState: (id: number,quantity: number) => void; 
  removeCoffeeFromCart: (id: number) => void;
}

export const useCoffeeStore = create<CoffeeStoreData>((set) => ({
  coffees: [],
  cart: [],
  addCoffees: (data) => {
    set(state => {
      return {...state, coffees: [...state.coffees, ...data]}
    })
  },
  addCoffeeToCart: (data) => {
    set((state) => {
      const index = state.cart.findIndex(coffee => coffee.id === data.id);
      if(index >= 0) {
        state.cart[index].qtd += data.qtd; 

        return {...state, cart: state.cart}
      }
      return {...state, cart: [...state.cart, data]}
    })
  },
  removeCoffeeFromCart: (id) => {
    set((state) => {
     
      const coffeeIndex = state.coffees.findIndex(item => item.id === id);
      const coffeeCartIndex = state.cart.findIndex(item => item.id === id);
  
      state.coffees[coffeeIndex].qtd += state.cart[coffeeCartIndex].qtd;

      return {
        ...state,
        coffees: state.coffees,
        cart: [...state.cart.filter(item => item.id !== id)]
      }
      
    })
  },
  updateCoffeeState: (id,quantity) => {
    set((state) => {
      const index = state.coffees.findIndex(coffee => coffee.id === id);
      if(index >= 0) {
        state.coffees[index].qtd -= quantity;
        return {...state, coffees: state.coffees}

      }
      return {...state}
    })
  }
}))