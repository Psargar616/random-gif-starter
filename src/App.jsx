import Random from "./components/Random";
import Tags from "./components/Tags";

export default function App() {
  return (
    <div className="w-full h-auto sm:w-full md:w-full flex flex-col background py-10 px-14">
      <h1 className="bg-white rounded-md text-center p-4 w-full
       text-3xl font-bold">
        RANDOM GIFS
      </h1>
      <div className="flex flex-col w-full items-center mt-[30px] gap-y-6">
        <Random />
        <Tags />
      </div>
    </div>
  );
}
