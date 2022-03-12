import { burgerC, pizzaC, hotDogC, beveragesC, chickenC } from "../utils/imgExport";

const categories = [
  {
    _id: "5fe5c183db9b000a30e0774a",
    name: "Burgers",
    img: burgerC,
  },
  {
    _id: "5fe5c18bdb9b000a30e0774b",
    name: "Pizzas",
    img: pizzaC,
  },
  {
    _id: "5fe5c169db9b000a30e07749",
    name: "Hod Dogs",
    img: hotDogC,
  },
  {
    _id: "5fe5c169db9b000a30e07750",
    name: "Beverages",
    img: beveragesC,
  },
  {
    _id: "5fe5c169db9b000a30e07751",
    name: "Chicken",
    img: chickenC,
  },
];

export const getCategories = () => {
  return [...categories];
};
