const List = ({ todosList, deleteTodo }) => {
  const complete = (id) => {
    return deleteTodo(id);
  };
  return (
    <div>
      {todosList.map((todo) => {
        return (
          <div key={todo.id}>
            <button onClick={() => complete(todo.id)}>完了</button>
            <span>{todo.content}</span>
          </div>
        );
      })}
    </div>
  );
};
export default List;

// const List = ({ todoList, deleteTodo }) => {
//   const complete = (id) => {
//     return deleteTodo(id);
//   };
//   return (
//     <div>
//       {todoList.map((todo) => {
//         return (
//           <div key={todo.id}>
//             <button onClick={() => complete(todo.id)}>完了</button>
//             <label htmlFor={todo.id}>{todo.content}</label>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
// export default List;

// // const List = ({ todoList, deleteTodo }) => {
// //   const complete = (id) => deleteTodo(id);

// //   return (
// //     <div>
// //       {todoList.map((todo) => {
// //         return (
// //           <div key={todo.id}>
// //             <button
// //               id={todo.list}
// //               value={todo.list}
// //               onClick={() => complete(todo.id)}
// //             >
// //               完了
// //             </button>
// //             <label htmlFor={todo.id}>{todo.content}</label>
// //           </div>
// //         );
// //       })}
// //     </div>
// //   );
// // };
// // export default List;

// // // const List = ({ todos, deleteTodo }) => {
// // //   const complete = (id) => {
// // //     deleteTodo(id);
// // //   };
// // //   return (
// // //     <div>
// // //       {todos.map((todo) => {
// // //         return (
// // //           <div key={todo.id}>
// // //             <button
// // //               id={todo.id}
// // //               value={todo.id}
// // //               onClick={() => complete(todo.id)}
// // //             >
// // //               完了
// // //             </button>
// // //             <label htmlFor={todo.id}>{todo.content}</label>
// // //           </div>
// // //         );
// // //       })}
// // //     </div>
// // //   );
// // // };

// // // export default List;
