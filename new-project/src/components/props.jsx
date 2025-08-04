import React from "react";

export default function Greeting({ name, message }) {
  return (
    <h2>
      {message}, {name}!
    </h2>
  );
}

Greeting.defaultProps = {
  name: "Guest",
  message: "Welcome"
};