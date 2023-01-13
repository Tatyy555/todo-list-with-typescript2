type TodoType = {
  item: { id: string; text: string };
  onDelete: (id:string) => void;
};

function Todo(props: TodoType) {
  return (
    <div className="flex flex-col cursor-pointer transition-all duration-200 hover:scale-105 p-5 m-5 rounded-lg bg-white items-start shadow-xl overflow-scroll">
      <h2 className="text-xl sm:text-3xl ">{props.item.text}</h2>
      <button
        type="button"
        onClick={props.onDelete.bind(true, props.item.id)}
        className="text-gray-800 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-2 py-1 text-center mt-3"
      >
        Delete
      </button>
 
    </div>
  );
}

export default Todo;
