const From = () => {
  return (
    <div>
      <input type="text" />
      <button>追加</button>
    </div>
  );
};
export default From;

// import { useState } from "react";

// const Form = ({ createdTodo }) => {
//   const [enteredTodo, setEnteredTodo] = useState("");
//   const addTodo = () => {
//     const newTodo = {
//       id: Math.floor(Math.random() * 1e5),
//       content: enteredTodo,
//     };
//     createdTodo(newTodo);
//     setEnteredTodo("");
//   };
//   return (
//     <div>
//       <input
//         type="text"
//         value={enteredTodo}
//         onChange={(e) => setEnteredTodo(e.target.value)}
//       />
//       <button onClick={addTodo}>追加</button>
//     </div>
//   );
// };
// export default Form;
// // const Form = ({ inputTodo, setInputTodo, createTodo }) => {
// //   const addTodo = () => {
// //     const newTodo = {
// //       id: Math.floor(Math.random() * 1e5),
// //       content: inputTodo,
// //     };
// //     createTodo(newTodo);

// //     setInputTodo("");
// //   };
// //   return (
// //     <div>
// //       <input
// //         type="text"
// //         value={inputTodo}
// //         onChange={(e) => setInputTodo(e.target.value)}
// //       />
// //       <button onClick={addTodo}>追加</button>
// //     </div>
// //   );
// // };
// // export default Form;

// // // import { useState } from "react";
// // // const Form = ({ createTodo }) => {
// // //   const [enterTodo, setEnterTodo] = useState("");

// // //   const addTodo = () => {
// // //     const newTodo = {
// // //       id: Math.floor(Math.random() * 1e5),
// // //       content: enterTodo,
// // //     };
// // //     //setTodos([...todos, newTodo]);
// // //     createTodo(newTodo);
// // //     setEnterTodo("");
// // //   };
// // //   return (
// // //     <div>
// // //       <input
// // //         type="text"
// // //         value={enterTodo}
// // //         onChange={(e) => setEnterTodo(e.target.value)}
// // //       />
// // //       <button onClick={addTodo}>追加</button>
// // //     </div>
// // //   );
// // // };
// // // export default Form;
