import List from "./List";
import From from "./Form";
import { useState } from "react";

const Todo = () => {
  const todoList = [
    { id: 1, content: "店予約する" },
    { id: 2, content: "卵買う" },
    { id: 3, content: "郵便出す" },
  ];
  const [todosList, setTodosList] = useState(todoList);
  return (
    <div>
      <List todosList={todosList} />
      <From />
    </div>
  );
};
export default Todo;

// import { useState } from "react";
// import List from "./List";
// import Form from "./Form";

// const Todo = () => {
//   const todosList = [
//     { id: 1, content: "店予約する" },
//     { id: 2, content: "卵買う" },
//     { id: 3, content: "郵便出す" },
//   ];
//   const [todoList, setTodoList] = useState(todosList);
//   const deleteTodo = (id) => {
//     const newTodoList = todoList.filter((todo) => {
//       return todo.id !== id;
//     });
//     setTodoList(newTodoList);
//   };
//   const createdTodo = (todo) => {
//     const newTodoList = [...todoList, todo];
//     return setTodoList(newTodoList);
//   };
//   return (
//     <div>
//       <List todoList={todoList} deleteTodo={deleteTodo} />
//       <Form todoList={todoList} createdTodo={createdTodo} />
//     </div>
//   );
// };
// export default Todo;

// // import { useState } from "react";
// // import List from "./List";
// // import Form from "./Form";

// // const Todo = () => {
// //   const todosList = [
// //     { id: 1, content: "店を予約する" },
// //     { id: 2, content: "卵買う" },
// //     { id: 3, content: "郵便出す" },
// //   ];
// //   const [todoList, setTodosList] = useState(todosList);
// //   const [inputTodo, setInputTodo] = useState("");

// //   const deleteTodo = (id) => {
// //     const newTodo = todoList.filter((todos) => {
// //       return todos.id !== id;
// //     });

// //     setTodosList(newTodo);
// //   };

// //   const createTodo = (todo) => setTodosList([...todoList, todo]);

// //   return (
// //     <>
// //       <List todoList={todoList} deleteTodo={deleteTodo} />
// //       <Form
// //         inputTodo={inputTodo}
// //         setInputTodo={setInputTodo}
// //         createTodo={createTodo}
// //       />
// //     </>
// //   );
// // };
// // export default Todo;

// // // import { useState } from "react";
// // // import List from "./List";
// // // import Form from "./Form";

// // // const Todo = () => {
// // //   const todosList = [
// // //     {
// // //       id: 1,
// // //       content: "店予約する",
// // //     },
// // //     {
// // //       id: 2,
// // //       content: "卵買う",
// // //     },
// // //     {
// // //       id: 3,
// // //       content: "郵便出す",
// // //     },
// // //   ];
// // //   const [todos, setTodos] = useState(todosList);

// // //   const deleteTodo = (id) => {
// // //     // stateの保持するidとクリックしたボタンが保持するidが一致しないものを表示
// // //     const newTodos = todos.filter((todo) => {
// // //       return todo.id !== id;
// // //     });

// // //     setTodos(newTodos);
// // //   };

// // //   const createTodo = (todo) => {
// // //     setTodos([...todos, todo]);
// // //   };

// // //   return (
// // //     <div>
// // //       <List todos={todos} deleteTodo={deleteTodo} />
// // //       <Form createTodo={createTodo} />
// // //     </div>
// // //   );
// // // };
// // // export default Todo;
