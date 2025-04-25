import { useState } from "react";

const Example = () => {
  const animals = ["Dog", "Cat", "Rat"];

  const [filterVal, setFilterVal] = useState("");

  return (
    <>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      <ul>
        {animals
          .filter((animal) => {
            const isMatch = animal.indexOf(filterVal) !== -1;
            console.log(animal.indexOf(filterVal));
            return isMatch;
          })
          .map((animal) => {
            /* if文 */
            // if (animal === "Dog") {
            //   return <li key={animal}>{animal}★</li>;
            // } else {
            //   return <li key={animal}>{animal}</li>;
            // }
            /* 三項演算子（自分で） */
            // return animal === "Dog" ? (
            //   <li key={animal}>{animal}★</li>
            // ) : (
            //   <li key={animal}>{animal}</li>
            // );
            // /* 三項演算子（模範回答1） */
            // return (
            //   <li key={animal}>{animal === "Dog" ? animal + "★" : animal}</li>
            // );
            // /* 三項演算子（模範回答2） */
            // return (
            //   <li key={animal}>
            //     {animal}
            //     {animal === "Dog" ? "★" : ""}
            //   </li>
            // );
            // /* 三項演算子（模範回答3） */
            return (
              <li key={animal}>
                {animal}
                {animal === "Dog" && "★"}
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Example;
