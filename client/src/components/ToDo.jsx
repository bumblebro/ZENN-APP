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
  // const handleRemoved = (name) => {
  //   const data = todo.map((e) => {
  //     console.log(name);
  //     if (e.name == name) {
  //       e.type = "Removed";
  //     }
  //     return e;
  //   });
  //   setTodo(data);
  //   console.log(todo);
  // };

  return (
    <div className="w-4/12 flex flex-col gap-6">
      <h1 className="">My Tasks</h1>
      <div className="flex gap-4">
        <button
          onClick={() => {
            SetState("Active");
          }}
        >
          Active
        </button>
        <button
          onClick={() => {
            SetState("Completed");
          }}
        >
          Completed
        </button>
        <button
          onClick={() => {
            SetState("AllTasks");
          }}
        >
          All Tasks
        </button>
      </div>
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Add task here
          "
          value={currentdata}
          onChange={(e) => {
            setCurrentData(e.target.value);
          }}
        />
        <button
          className="flex justify-start"
          onClick={() => {
            if (currentdata !== "") {
              setTodo([...todo, { name: currentdata, type: "Active" }]);
            }
            setCurrentData("");
          }}
        >
          +
        </button>
      </div>
      {todo.map((e) => {
        if (state == "Active" || state == "Completed") {
          if (e.type == state)
            return (
              <div key={e.name} className="flex flex-row justify-between">
                <div>{e.name}</div>
                {state == "Active" ? (
                  <div
                    onClick={() => {
                      handleCompleted(e.name);
                    }}
                  >
                    <Check size={32} />
                  </div>
                ) : null}

                <div
                  onClick={() => {
                    handleDelete(e.name);
                  }}
                >
                  <X size={32} />
                </div>
              </div>
            );
        }
        if (state == "AllTasks") {
          return (
            <div key={e.name} className="flex flex-row justify-between">
              <div>{e.name}</div>
              {e.type == "Active" ? (
                <div
                  onClick={() => {
                    handleCompleted(e.name);
                  }}
                >
                  <Check size={32} />
                </div>
              ) : null}
              <div
                onClick={() => {
                  handleDelete(e.name);
                }}
              >
                <X size={32} />
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
