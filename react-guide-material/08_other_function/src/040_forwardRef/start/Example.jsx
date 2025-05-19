// import { useRef, forwardRef } from "react";

// const Input = ({ customRef }) => {
//   return <input type="text" ref={customRef} />;
// };

// const Example = () => {
//   const ref = useRef();
//   console.log(ref);
//   return (
//     <>
//       <Input customRef={ref} />
//       <button onClick={() => ref.current.focus()}>
//         インプット要素をフォーカスする
//       </button>
//     </>
//   );
// };

// export default Example;

import { useRef, forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
});

const Example = () => {
  const ref = useRef();
  console.log("ref呼び出し前: ", ref);
  return (
    <>
      <Input ref={ref} />
      <button
        onClick={() => {
          ref.current.focus();
          console.log("ref呼び出し後: ", ref);
        }}
      >
        インプット要素をフォーカスする
      </button>
    </>
  );
};

export default Example;
