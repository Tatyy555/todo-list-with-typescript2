import BlackDrop from "./components/BlackDrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo";
import React, { useState } from "react";
import NewTodo from "./components/NewTodo";

type TodoType = {
  id: string;
  text: string;
};

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [deleteTodo, setDeleteTodo] = useState<string>("");

  const todoAddHandler = (text: string) => {
    setTodos((previous) => [
      { id: Math.random().toString(), text: text },
      ...previous,
    ]);
  };

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  function deleteHandler(id: string) {
    setModalIsOpen(true);
    setDeleteTodo(id);
  }

  function deleteTodoHandler(id: string) {
    console.log(todos);
    setTodos((previous) => {
      return previous.filter((todo) => todo.id !== id);
    });
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className=" bg-slate-200 min-h-screen">
      <h1 className="px-5 py-8 text-5xl text-blue-400 font-bold sm:font-extrabold">
        My <span className="text-blue-600">Todos</span>
      </h1>
      <NewTodo onAddTodo={todoAddHandler} />
      <div className="grid grid-cols-2 lg:grid-cols-3 z-10">
        {todos.map((todo) => (
          <Todo item={todo} onDelete={deleteHandler} key={todo.id} />
        ))}
      </div>
      {modalIsOpen && (
        <Modal
          onCancel={closeModalHandler}
          onDeleteTodo={deleteTodoHandler}
          deleteTodoId={deleteTodo}
        />
      )}
      {modalIsOpen && <BlackDrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default App;
