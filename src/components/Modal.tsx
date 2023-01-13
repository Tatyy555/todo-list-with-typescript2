import React from "react";

type ModalType = {
  onCancel: () => void;
  onDeleteTodo: (id: string) => void;
  deleteTodoId: string;
};

function Modal(props: ModalType) {
  function onCancelHandler() {
    console.log("Somthing cancel");
    props.onCancel();
  }
  function onConfirmHandler() {
    props.onCancel();
    props.onDeleteTodo(props.deleteTodoId);
  }

  return (
    <div className="flex flex-col justify-center items-center bg-white absolute top-[20vh] left-middle w-[20rem] mx-auto h-24 rounded-2xl z-20">
      <h1>Are You Sure?</h1>
      <div className="flex justify-around space-x-3">
        <button
          type="button"
          className="text-gray-800 border-2  border-red-300 bg-red-100 hover:bg-red-200 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-2 py-1 text-center mt-3"
          onClick={onCancelHandler}
        >
          Cancel
        </button>
        <button
          type="button"
          className="text-gray-800 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-2 py-1 text-center mt-3"
          onClick={onConfirmHandler}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default Modal;
