import { Check, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Timer } from "../store/atom";
import { useRecoilState } from "recoil";

function ToDo() {
  const [todo, setTodo] = useState([]);
  const [state, SetState] = useState("Active");
  const [currentdata, setCurrentData] = useState("");
  const [activeclock, setActiveClock] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(
    Number(localStorage.getItem("startTime")) || 0
  );
  const [TimeCount, setTimeCount] = useRecoilState(Timer);

  useEffect(() => {
    if (TimeCount.active) {
      setIsActive(true);
      setIsPaused(false);
      return;
    }
    if (TimeCount.active == false) {
      setIsPaused(!isPaused);
    }
  }, [TimeCount]);

  useEffect(() => {
    let interval = null;
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
        localStorage.setItem("startTime", time);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  useEffect(() => {
    setTimeCount((t) => {
      return {
        ...t,
        hours: ("0" + Math.floor(time / 3600000)).slice(-2),
        minute: ("0" + Math.floor((time / 60000) % 60)).slice(-2),
        seconds: ("0" + Math.floor((time / 1000) % 60)).slice(-2),
      };
    });
  }, [time]);

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

  const handleActiveTrue = (name) => {
    const data = todo.map((e) => {
      if (e.name == name) {
        e.timer.active = true;
      }
      return e;
    });
    setTodo(data);
  };

  const handleActiveFalse = (name) => {
    const data = todo.map((e) => {
      if (e.name == name) {
        e.timer.active = false;
      }
      return e;
    });
    setTodo(data);
  };

  const handleAddTimer = (name) => {
    const data = todo.map((e) => {
      if (e.name == name) {
        e.timer.time = time;
      }
      return e;
    });
    setTodo(data);
  };

  const handleDeleteTimer = (name) => {
    const data = todo.map((e) => {
      if (e.name == name) {
        e.timer.active = false;
      }
      return e;
    });
    setTodo(data);
  };

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
    setTimeCount((e) => {
      return { ...e, active: isPaused };
    });
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <div className=" flex flex-col gap-6 bg-black border-solid border-[#1f1f1f] border-4 rounded-3xl  sm:px-3 hover:shadow-2xl hover:shadow-[#d1ff02] hover:shadow-inner">
      <h1 className="text-2xl font-extrabold text-white pl-4 pt-4">My Tasks</h1>
      <div className="pl-3">
        <button
          onClick={() => {
            SetState("Active");
          }}
          className={`font-bold text-xl  px-4 py-1 rounded-full ${
            state == "Active" ? "bg-[#d2ff02] text-black" : "text-white"
          } `}
        >
          Active
        </button>
        <button
          onClick={() => {
            SetState("Completed");
          }}
          className={`font-bold text-xl px-4 py-1 rounded-full ${
            state == "Completed" ? "bg-[#d2ff02] text-black" : "text-white"
          } `}
        >
          Completed
        </button>
        <button
          onClick={() => {
            SetState("AllTasks");
          }}
          className={`font-bold text-xl px-4 py-1 rounded-full ${
            state == "AllTasks" ? "bg-[#d2ff02] text-black" : "text-white"
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
          className="bg-slate-200   px-6 py-3 mx-3 rounded-lg border-none0 focus:outline-none  "
        />
        <button
          className="flex justify-start text-3xl pl-4 pt-2 text-white"
          onClick={(e) => {
            e.preventDefault();
            if (currentdata !== "") {
              setTodo([
                ...todo,
                {
                  name: currentdata,
                  type: "Active",
                  timer: { active: false, time: null },
                },
              ]);
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
                className="flex flex-col sm:flex-row justify-between    w-full px-3 mx-auto gap-3 items-center"
              >
                <div className="w-full h-auto flex items-center text-white pl-6 bg-[#1f1f1f] rounded-md px-2 py-1 overflow-auto no-scrollbar ">
                  {e.name}
                </div>
                <div className="flex gap-8 items-center">
                  {state == "Active" ? (
                    <div
                      onClick={() => {
                        handleCompleted(e.name);
                        handleAddTimer(e.name);
                        handleReset();
                        setActiveClock(false);
                      }}
                      className="text-white"
                    >
                      <Check size={24} />
                    </div>
                  ) : null}
                  <div
                    onClick={() => {
                      handleReset();
                      handleDeleteTimer(e.name);
                      setActiveClock(false);
                      handleDelete(e.name);
                    }}
                    className="text-white"
                  >
                    <X size={24} />
                  </div>
                  {!e.timer.active ? (
                    !activeclock && state == "Active" ? (
                      <button
                        className="bg-green-600 h-9 w-32 text-white font-semibold rounded-full
                  "
                        onClick={() => {
                          handleActiveTrue(e.name);
                          setActiveClock(true);
                        }}
                      >
                        Start Timer
                      </button>
                    ) : null
                  ) : (
                    <>
                      <div className="font-semibold text-xl text-white">
                        {("0" + Math.floor(time / 3600000)).slice(-2)}:
                        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
                        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
                        {/* {("0" + ((time / 10) % 100)).slice(-2)} */}
                      </div>
                      {!isActive ? (
                        <div className="flex gap-8">
                          <button
                            className="bg-red-600 h-9 w-20 text-white font-semibold rounded-full
                  "
                            onClick={() => {
                              setActiveClock(false);
                              handleActiveFalse(e.name);
                            }}
                          >
                            Close
                          </button>
                          <button
                            className="bg-green-600 h-9 w-20 text-white font-semibold rounded-full
                  "
                            onClick={() => {
                              setTimeCount({ ...TimeCount, active: true });
                              handleStart();
                            }}
                          >
                            Start
                          </button>
                        </div>
                      ) : null}

                      {isActive ? (
                        <button
                          className="bg-red-600 h-9 w-20 text-white font-semibold rounded-full
                  "
                          onClick={() => {
                            handleReset();
                          }}
                        >
                          Reset
                        </button>
                      ) : null}
                      {isActive ? (
                        <button
                          className="bg-blue-600 h-9 w-20 text-white font-semibold rounded-full
              "
                          onClick={() => {
                            handlePauseResume();
                            handleAddTimer(e.name);
                          }}
                        >
                          {isPaused ? "Resume" : "Pause"}
                        </button>
                      ) : null}
                    </>
                  )}
                </div>
              </div>
            );
        }
        if (state == "AllTasks") {
          return (
            <div
              key={e.name}
              className="flex flex-row justify-between w-full pl-3 mx-auto gap-3 items-center"
            >
              <div className="w-full h-12 flex items-center text-white pl-6 bg-[#1f1f1f] rounded-md px-2 py-1">
                {e.name}
              </div>{" "}
              <div className="flex gap-8">
                {e.type == "Active" ? (
                  <div
                    onClick={() => {
                      handleCompleted(e.name);
                    }}
                    className="text-white"
                  >
                    <Check size={24} />
                  </div>
                ) : null}
                <div
                  onClick={() => {
                    handleDelete(e.name);
                  }}
                  className="text-white"
                >
                  <X size={24} />
                </div>
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
