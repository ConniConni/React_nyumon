import { useState } from "react";

const Example = () => {
  const [toggle, setToggle] = useState(true);
  const toggleComponent = () => {
    setToggle((prev) => !prev);
  };
  return (
    <>
      <button onClick={toggleComponent}>toggle</button>
      {toggle ? <Count title="A" /> : <Count title="B" />}
    </>
  );
};
/*
①親コンポーネントでトグルを設定
・useStateを分割定義
・toggle, setToggle
・初期値は、true
②ボタンを作成
・toggleボタン
・クリックすると表示される子コンポーネントが切り替わるようにイベントハンドラを設定
③イベントハンドラを定義
・trueとfalseを切り替える
*/

const Count = ({ title }) => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3>
        {title}: {count}
      </h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
