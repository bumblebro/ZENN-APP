import { Check, X } from "@phosphor-icons/react";
import { useState } from "react";

function ToDo() {
  const [todo, setTodo] = useState([]);
  const [state, SetState] = useState("Active");
  const [currentdata, setCurrentData] = useState("");

  const handleDelete = (name) => {
    const data = todo.filter((e) => {
      console.log(e.name);
      return e.name !== name;
    });
    setTodo(data);
  };

  const handleCompleted = (name) => {
    const data = todo.map((e) => {
      console.log(name);
      if (e.name == name) {
        e.type = "Completed";
      }
      return e;
    });
    setTodo(data);
    console.log(todo);
  };

  return (
    <div className=" flex flex-col gap-6 bg-[#cdedff] rounded-lg px-3 ">
      <h1 className="text-2xl font-medium text-gray-800 pl-4 pt-4">My Tasks</h1>
      <div className="flex justify-around">
        <button
          onClick={() => {
            SetState("Active");
          }}
          className={`font-medium text-xl text-slate-700 px-4 py-1 rounded-full ${
            state == "Active" ? "bg-white" : ""
          } `}
        >
          Active
        </button>
        <button
          onClick={() => {
            SetState("Completed");
          }}
          className={`font-medium text-xl text-slate-700 px-4 py-1 rounded-full ${
            state == "Completed" ? "bg-white" : ""
          } `}
        >
          Completed
        </button>
        <button
          onClick={() => {
            SetState("AllTasks");
          }}
          className={`font-medium text-xl text-slate-700 px-4 py-1 rounded-full ${
            state == "AllTasks" ? "bg-white" : ""
          } `}
        >
          All Tasks
        </button>
      </div>
      <form className="flex flex-col">
        <input
          type="text"
          placeholder="Add task here
          "
          value={currentdata}
          onChange={(e) => {
            setCurrentData(e.target.value);
          }}
          className="bg-white px-6 py-3 mx-3 rounded-lg border-none0 focus:outline-none "
        />
        <button
          className="flex justify-start text-3xl pl-4 pt-2"
          onClick={(e) => {
            e.preventDefault();
            if (currentdata !== "") {
              setTodo([...todo, { name: currentdata, type: "Active" }]);
            }
            setCurrentData("");
            SetState("Active");
          }}
        >
          +
        </button>
      </form>
      {todo.map((e) => {
        if (state == "Active" || state == "Completed") {
          if (e.type == state)
            return (
              <div
                key={e.name}
                className="flex flex-row justify-between   w-11/12 mx-auto gap-3 items-center"
              >
                <div className="w-full bg-white rounded-md px-2 py-1">
                  {e.name}
                </div>
                <div className="flex gap-8">
                  {state == "Active" ? (
                    <div
                      onClick={() => {
                        handleCompleted(e.name);
                      }}
                    >
                      <Check size={24} />
                    </div>
                  ) : null}

                  <div
                    onClick={() => {
                      handleDelete(e.name);
                    }}
                  >
                    <X size={24} />
                  </div>
                </div>
              </div>
            );
        }
        if (state == "AllTasks") {
          return (
            <div
              key={e.name}
              className="flex flex-row justify-between   w-11/12 mx-auto gap-3 items-center"
            >
              <div className="w-full bg-white rounded-md px-2 py-1">
                {e.name}
              </div>{" "}
              <div className="flex gap-8">
                {e.type == "Active" ? (
                  <div
                    onClick={() => {
                      handleCompleted(e.name);
                    }}
                  >
                    <Check size={24} />
                  </div>
                ) : null}
                <div
                  onClick={() => {
                    handleDelete(e.name);
                  }}
                >
                  <X size={24} />
                </div>{" "}
              </div>
            </div>
          );
        }
      })}
      <div></div>
    </div>
  );
}

export default ToDo;
