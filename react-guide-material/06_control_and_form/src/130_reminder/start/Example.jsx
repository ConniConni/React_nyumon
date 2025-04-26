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
  const [todoList, setTodoList] = useState(todosList);
  const todoCompletion = () => {};

  return (
    <>
      <h2>Reminder</h2>
      <div>
        {todoList.map((list) => {
          return (
            <div key={list.id}>
              <button id={list.id} value={list.id} onClick={todoCompletion}>
                完了
              </button>
              <label htmlFor={list.id}>{list.content}</label>
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
