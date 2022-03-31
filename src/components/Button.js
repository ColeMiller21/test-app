import React from "react";

const Button = (props) => {
  return (
    <button className="bg-yellow-500 text-white font-roboto py-2 px-6 rounded md:ml-8 hover:bg-yellow-400 duration-500 focus:drop-shadow-xl">
      {props.children}
    </button>
  );
};

export default Button;
