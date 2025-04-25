import "./Child.css";
import React from "react";

const Child = () => {
  return (
    <React.Fragment>
      <div className="component">
        <h3>Hello Component</h3>
        <h3>Hello Fragment</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          veritatis iusto possimus! Quasi quas porro libero nulla quae ducimus
          optio iure harum, omnis soluta! Accusamus dignissimos fugiat error vel
          consequuntur.
        </p>
      </div>
    </React.Fragment>
  );
};

export default Child;
