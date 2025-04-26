import { useState } from "react";

const Example = () => {
  const todosList = [
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ];

  const [todos, setTodos] = useState(todosList);

  const deleteTodo = (id) => {
    console.log(id);
    // stateの保持するidとクリックしたボタンが保持するidが一致しないものを表示
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  };

  const createTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <>
      <h2>Reminder</h2>
      <div>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <button
                id={todo.id}
                value={todo.id}
                onClick={() => deleteTodo(todo.id)}
              >
                完了
              </button>
              <label htmlFor={todo.id}>{todo.content}</label>
            </div>
          );
        })}
      </div>
      <input type="text" />
      <button>追加</button>
    </>
  );
};

export default Example;
