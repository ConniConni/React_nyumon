import { useState } from "react";
const Example = () => {
  let [countA, setCountA] = useState(5);
  let [countB, setCountB] = useState(10);
  let [countC, setCountC] = useState(100);
  return (
    <>
      <p>ボタンAを{countA}回押しました!</p>
      <button
        onClick={() => {
          setCountA(countA + 1);
          console.log(countA);
        }}
      >
        ボタンA
      </button>
      <p>ボタンBを{countB}回押しました!</p>
      <button
        onClick={() => {
          setCountB(countB + 1);
          console.log(countB);
        }}
      >
        ボタンB
      </button>
      <p>ボタンCを{countC}回押しました!</p>
      {console.log(countC + "更新後")}
      <button
        onClick={() => {
          setCountC(countC + 1);
          console.log(countC + "更新前");
        }}
      >
        ボタンC
      </button>
    </>
  );
};

export default Example;
