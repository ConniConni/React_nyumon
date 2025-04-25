// import { useState } from "react";

import { useState } from "react";

// const Example = () => {
//   const [count, setCount] = useState(0);
//   const countUp = () => {
//     setCount((perv) => perv + 1);
//   };
//   const countDown = () => {
//     setCount((perv) => perv - 1);
//   };
//   return (
//     <>
//       <h3>カウント: {count}</h3>
//       <button onClick={countUp}>+</button>
//       <button onClick={countDown}>-</button>
//     </>
//   );
// };

// export default Example;
const Example = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <CountResult title="カウント" count={count} />
      <CountUpdate setCount={setCount} />
    </>
  );
};
const CountResult = ({ title, count }) => (
  <h3>
    {title}: {count}
    {console.log(count)}
  </h3>
);

const CountUpdate = ({ setCount }) => {
  const countUp = () => {
    setCount((prev) => prev + 1);
  };
  const countDown = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
