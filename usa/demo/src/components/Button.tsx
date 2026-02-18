import React from "react";

/**
 * props: {
 *  buttonText: "Button 1"
 * }
 */

type ButtonType = {
  buttonText: string;
};

export const Button = (props: ButtonType) => {
  return <button className="px-2">{props.buttonText}</button>;
};
