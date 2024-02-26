import AmbientCard from "../components/AmbientCard.jsx";
import Clock from "../components/Clock.jsx";
import QuoteCard from "../components/QuoteCard.jsx";
import ToDo from "../components/ToDo.jsx";
import WeatherCard from "../components/WeatherCard.jsx";

function Home() {
  return (
    <div className=" bg-[#000000] flex px-3 pb-4 sm:px-6  gap-3 flex-col">
      <div className="flex items-center gap-2">
        <div className="text-white text-3xl font-extrabold pt-4 pb-1 pl-1">
          ZenApp
        </div>{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#ffffff"
          viewBox="0 0 256 256"
          style={{ animation: "blink 10s ease-in-out infinite" }}
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
          <path d="M120,40V32a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-8-8A8,8,0,0,0,50.34,61.66Zm0,116.68-8,8a8,8,0,0,0,11.32,11.32l8-8a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l8-8a8,8,0,0,0-11.32-11.32l-8,8A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l8,8a8,8,0,0,0,11.32-11.32ZM40,120H32a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Zm88,88a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-8A8,8,0,0,0,128,208Zm96-88h-8a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z"></path>
        </svg>
      </div>

      <div className="flex gap-3 md:flex-col lg:flex-row flex-col lg:h-6/12">
        <div className="flex justify-between  gap-3 md:flex-row  lg:flex-col flex-col ">
          {" "}
          <WeatherCard />
          <QuoteCard />
        </div>{" "}
        <div className="flex gap-3 flex-col lg:flex-row md:flex-row justify-around">
          <AmbientCard />
          <Clock />
        </div>
      </div>
      <ToDo />
    </div>
  );
}

export default Home;
