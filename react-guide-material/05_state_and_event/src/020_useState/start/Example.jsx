import { useState } from "react";

const Example = () => {
  let displayVal;
  let [val, setVal] = useState();
  console.log("再レンダリングされました");
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
          setVal(e.target.value);
        }}
      />
      = {val}
    </>
  );
};
// const Example = () => {
//   let displayVal = 1;
//   return (
//     <>
//       <input
//         type="text"
//         onChange={(e) => {
//           displayVal = e.target.value;
//         }}
//       />
//       = {displayVal}
//     </>
//   );
// };

export default Example;
