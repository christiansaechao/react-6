import React from "react";

/**
 *
 * props: {
 *  text: "button 1"
 * }
 *
 */

type ButtonType = {
  text: string;
  variant: string;
};

// const Car = {
//     year: 1000,
//     make: "Toyota",
//     model: "Corolla",
//     color: "Red"
// };

// const { make, color } = Car;

// Car.make, Car.color

export const Button = ({ text, variant }: ButtonType) => {
  return <div className={`${variant} text-red-500`}>{text}</div>;
};
