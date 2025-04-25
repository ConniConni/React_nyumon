import { useState } from "react";

const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [nums, setNums] = useState(numArray);
  const shuffle = () => {
    const newNums = [...nums];
    const value = newNums.pop();
    newNums.unshift(value);
    setNums(newNums);
    console.log(newNums);
  };
  return (
    <>
      <h1>{nums}</h1>
      <div>
        <button onClick={shuffle}>shuffle</button>
      </div>
    </>
  );
};

export default Example;

/*
文字列表示
shufulleボタン実装
配列を入れ替える
*/
