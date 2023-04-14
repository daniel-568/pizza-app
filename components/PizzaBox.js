import React from "react";

export default function PizzaBox({ pizzas }) {
  return (
    <div className="PizzaBox">
      {pizzas.map((pizza) => {
        return (
          <div id={pizza.name}>
            <h1>{pizza.name}</h1>
            <p>{pizza.price} dollars</p>
            <p>{pizza.desc}</p>
            <button
              onClick={async () => {
                let req = await fetch("/api/addToCart/addToCart", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    pizzaName: pizza.name,
                  }),
                });
              }}
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}
