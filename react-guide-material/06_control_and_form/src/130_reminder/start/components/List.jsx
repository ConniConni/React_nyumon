const List = ({ todoList }) => {
  return (
    <div>
      {todoList.map((todo) => {
        return (
          <div key={todo.id}>
            <button>完了</button>
            <label htmlFor={todo.id}>{todo.content}</label>
          </div>
        );
      })}
    </div>
  );
};
export default List;

// const List = ({ todos, deleteTodo }) => {
//   const complete = (id) => {
//     deleteTodo(id);
//   };
//   return (
//     <div>
//       {todos.map((todo) => {
//         return (
//           <div key={todo.id}>
//             <button
//               id={todo.id}
//               value={todo.id}
//               onClick={() => complete(todo.id)}
//             >
//               完了
//             </button>
//             <label htmlFor={todo.id}>{todo.content}</label>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default List;
