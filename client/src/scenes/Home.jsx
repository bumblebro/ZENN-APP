import AmbientCard from "../components/AmbientCard.jsx";
import QuoteCard from "../components/QuoteCard.jsx";
import ToDo from "../components/ToDo.jsx";
import WeatherCard from "../components/WeatherCard.jsx";

function Home() {
  return (
    <div className=" bg-[#FFFAFA] flex px-6  gap-3 flex-col">
      <div className="text-blue-500 text-3xl font-bold pt-3">Zen-App</div>
      <div className="flex gap-3">
        <div className="flex flex-col gap-3 w-full">
          {" "}
          <WeatherCard />
          <QuoteCard />
        </div>{" "}
        <div className="flex gap-3">
          <AmbientCard />
          <AmbientCard />
        </div>
      </div>
      <ToDo />
    </div>
  );
}

export default Home;
