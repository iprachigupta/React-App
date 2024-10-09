import { useState } from "react";

const Todo = () => {

    const [task, setTask] = useState([]);
    const handleFormChange = (event)=>{
        event.preventDefault();
    };
    const handleOnChange=(value)=>{
        setTask(value);
    }
  return (
    <section className="max-w-lg mt-20 mx-auto p-6 bg-gradient-to-br from-blue-100 to-blue-300 rounded-lg shadow-2xl">
      <header className="text-center mb-20">
        <h1 className="text-4xl font-bold text-blue-800">Todo List</h1>
      </header>
      <section>
        <form className="flex flex-col space-y-4" onChange={handleFormChange}>
          <div>
            <input
              type="text"
              autoComplete="off"
              placeholder="Add a new task..."
              className="w-full p-4 border border-blue-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-200 transition duration-200"
              value={task}
              onChange={(event)=>{handleOnChange(event.target.value)}}
            ></input>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"
              
            >
              Add Task
            </button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default Todo;
