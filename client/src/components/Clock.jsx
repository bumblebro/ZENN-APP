import { useRecoilState } from "recoil";
import { Timer } from "../store/atom.js";
import { useState } from "react";

function Clock() {
  const [time, setTime] = useRecoilState(Timer);

  const currentTime = `${time.hours}:${time.minute}:${time.seconds}`;
  return (
    <div className="flex flex-col   bg-[#9e67fd] px-10 pt-12 pb-8 rounded-lg  justify-between">
      <h1 className="pb-2 font-extrabold text-xl text-white ">TIMER</h1>
      {time.active ? (
        <button
          onClick={() => {
            setTime((time) => {
              return { ...time, active: false };
            });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#ffffff"
            viewBox="0 0 256 256"
            style={{ animation: "blink 3s ease-in-out infinite" }}
          >
            <style>
              {`     @keyframes blink {
                      0%, 50%, 100% {
                      opacity: 1;
                      }
                      25%, 75% {
                      opacity: 0.1;
                      }
                      }`}
            </style>
            <path d="M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z"></path>
          </svg>
        </button>
      ) : (
        <button
          onClick={() => {
            console.log(time.active);
            if (time.active == null) {
              return;
            }
            setTime((time) => {
              return { ...time, active: true };
            });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#ffffff"
            viewBox="0 0 256 256"
          >
            <path d="M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"></path>
          </svg>
        </button>
      )}
      <div className="text-white font-bold text-7xl">{currentTime}</div>{" "}
    </div>
  );
}

export default Clock;
