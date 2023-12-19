import React from "react";

const Button = props => {
  return (
    <button className="text-white bg-[rgb(46,97,242)] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2">
      {props.name}
    </button>
  );
};

export default Button;
