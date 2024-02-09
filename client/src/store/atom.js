import { atom } from "recoil";

export const Timer = atom({
  key: "Timer",
  default: { hours: "00", minute: "00", seconds: "00", active: false },
});
