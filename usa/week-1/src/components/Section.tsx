import React from "react";

export const Link = ({ link }) => {
  return (
    <a href={link.url} className="">
      {link.title}
    </a>
  );
};
