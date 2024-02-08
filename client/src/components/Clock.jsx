import { useRecoilState } from "recoil";
import { Timer } from "../store/atom.js";

function Clock() {
  const [time, setTime] = useRecoilState(Timer);
  return (
    <div className="flex flex-col   bg-[#d2ff02] p-10  rounded-lg  justify-between">
      <h1 className="pb-8 font-extrabold text-xl ">TIMER</h1>
      <div className="text-black font-bold text-7xl">
        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
      </div>{" "}
    </div>
  );
}

export default Clock;
