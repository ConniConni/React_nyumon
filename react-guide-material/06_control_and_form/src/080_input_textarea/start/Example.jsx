import { useState } from "react";

const Example = () => {
  const [value, setValue] = useState("");
  const resetCount = () => {
    setValue("");
  };
  return (
    <div>
      <label htmlFor="123">ラベル</label>
      <input
        type="text"
        id="123"
        placeholder="こんにちは"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <textarea
        id="456"
        placeholder="こんにちは"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <h3>{value}</h3>
      <button onClick={() => resetCount()}>クリア</button>
    </div>
  );
};

export default Example;
