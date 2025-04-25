import { useState } from "react";

const Example = () => {
  const RADIO_COLLECTION = ["Apple", "Banana", "Cherry"];
  const [fruit, setFruit] = useState("");
  const onChange = (e) => setFruit(e.target.value);
  return (
    <>
      {RADIO_COLLECTION.map((radioFruit) => {
        return (
          <label key={radioFruit}>
            <input
              type="radio"
              value={radioFruit}
              checked={radioFruit === fruit}
              onChange={onChange}
            />
            {radioFruit}
          </label>
        );
      })}
      {/* <label>
        <input
          type="radio"
          value="Banana"
          checked={fruit === "Banana"}
          onChange={onChange}
        />
        Banana
      </label>
      <label>
        <input
          type="radio"
          value="Cherry"
          checked={fruit === "Cherry"}
          onChange={onChange}
        />
        Cherry
      </label> */}
      <h3>私は{fruit}がたべたい</h3>
    </>
  );
};

export default Example;
