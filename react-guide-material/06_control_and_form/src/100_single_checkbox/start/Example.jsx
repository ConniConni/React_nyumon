import { useState } from "react";
const Example = () => {
  const [state, setState] = useState("");
  const checkState = () => setState(!state);
  return (
    <div>
      <label htmlFor="my-check">チェック：</label>
      <input
        type="checkbox"
        id="my-check"
        checked={state}
        onChange={checkState}
      />
      <div>{state ? "ON!" : "OFF!"}</div>
    </div>
  );
};

export default Example;
