import React from "react";

const IngredientsContext = React.createContext({
  name: "Pizzeria Tratoria Italiana",
  maxIngredient: 4,
  ingredients: [
    { name: "pork cut", category: "meat" },
    { name: "pepperoni", category: "meat" },
    { name: "tuna", category: "meat" },
    { name: "bacon", category: "meat" },
    { name: "olives", category: "vegetables" },
    { name: "artichokes", category: "vegetables" },
    { name: "basil", category: "vegetables" },
    { name: "mushrooms", category: "vegetables" },
    { name: "mozzarella", category: "cheese" },
    { name: "gorgonzola", category: "cheese" },
  ],
});
export const IngredientsProvider = IngredientsContext.Provider;
export default IngredientsContext;
