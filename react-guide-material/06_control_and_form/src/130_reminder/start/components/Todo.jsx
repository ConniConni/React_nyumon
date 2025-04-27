import { useState } from "react";
import List from "./List";

const Todo = () => {
  const todosList = [
    { id: 1, content: "店を予約する" },
    { id: 2, content: "卵買う" },
    { id: 3, content: "郵便出す" },
  ];
  const [todoList, setTodosList] = useState(todosList);
  return (
    <>
      <List todoList={todoList} />
    </>
  );
};
export default Todo;

// import { useState } from "react";
// import List from "./List";
// import Form from "./Form";

// const Todo = () => {
//   const todosList = [
//     {
//       id: 1,
//       content: "店予約する",
//     },
//     {
//       id: 2,
//       content: "卵買う",
//     },
//     {
//       id: 3,
//       content: "郵便出す",
//     },
//   ];
//   const [todos, setTodos] = useState(todosList);

//   const deleteTodo = (id) => {
//     // stateの保持するidとクリックしたボタンが保持するidが一致しないものを表示
//     const newTodos = todos.filter((todo) => {
//       return todo.id !== id;
//     });

//     setTodos(newTodos);
//   };

//   const createTodo = (todo) => {
//     setTodos([...todos, todo]);
//   };

//   return (
//     <div>
//       <List todos={todos} deleteTodo={deleteTodo} />
//       <Form createTodo={createTodo} />
//     </div>
//   );
// };
// export default Todo;
