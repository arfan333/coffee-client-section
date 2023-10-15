/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CoffeeCart from "../components/CoffeeCart";

const Root = () => {
  const coffeeData = useLoaderData();
  const [coffees, setCoffees] = useState(coffeeData);
  return (
    <div>
      <h1 className="text-5xl text-stone-950 text-center my-10">
        Coffee service.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {coffeeData.map((coffee) => (
          <CoffeeCart
            key={coffee._id}
            coffees={coffees}
            setCoffees={setCoffees}
            coffee={coffee}
          ></CoffeeCart>
        ))}
      </div>
    </div>
  );
};

export default Root;
