import Child from "./components/Child";

const Example = () => {
  const hello = (arg) => `Hello ${arg}`;
  return (
    <>
      <Child num={123} fn={hello} bool />
      <Child color="" fn={hello} />
      <Child fn={hello} />
    </>
  );
};

export default Example;
