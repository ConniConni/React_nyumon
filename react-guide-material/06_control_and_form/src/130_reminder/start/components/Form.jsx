// import { useState } from "react";
// const Form = ({ createTodo }) => {
//   const [enterTodo, setEnterTodo] = useState("");

//   const addTodo = () => {
//     const newTodo = {
//       id: Math.floor(Math.random() * 1e5),
//       content: enterTodo,
//     };
//     //setTodos([...todos, newTodo]);
//     createTodo(newTodo);
//     setEnterTodo("");
//   };
//   return (
//     <div>
//       <input
//         type="text"
//         value={enterTodo}
//         onChange={(e) => setEnterTodo(e.target.value)}
//       />
//       <button onClick={addTodo}>追加</button>
//     </div>
//   );
// };
// export default Form;
