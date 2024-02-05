import AmbientCard from "../components/AmbientCard.jsx";
import QuoteCard from "../components/QuoteCard.jsx";
import ToDo from "../components/ToDo.jsx";
import WeatherCard from "../components/WeatherCard.jsx";

function Home() {
  return (
    <div className=" bg-[#FFFAFA] flex px-6  w-screen gap-6">
      <div className="w-full h-screen">
        <ToDo />
      </div>
      <div className="flex flex-col gap-3">
        <WeatherCard />
        <div className="flex gap-6">
          <AmbientCard />
          <AmbientCard />
        </div>
        <QuoteCard />
      </div>
    </div>
  );
}

export default Home;
