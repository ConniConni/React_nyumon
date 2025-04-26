import { useState } from "react";

const Example = () => {
  const [selected, setSelected] = useState("Banana");
  const COLLECTION = ["Apple", "Banana", "Cherry"];
  const selectedVal = (e) => setSelected(e.target.value);
  return (
    <>
      {/* <select value={selected} onChange={selectedVal}>
        <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Cherry">Cherry</option>
      </select> */}
      <select value={selected} onChange={selectedVal}>
        {COLLECTION.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div>選択された果実:{selected}</div>
    </>
  );
};

export default Example;
