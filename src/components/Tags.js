import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
//   const [gif, setGif] = useState("");
//   const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState("");

//   async function fetchData() {
//     setLoading(true);
//     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
//     const { data } = await axios.get(url);
//     const imageSource = data.data.images.downsized_large.url;
//     setGif(imageSource);
//     setLoading(false);
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);


const {gif,loading,fetchData} = useGif(tag);

  function clickHandler() {
    fetchData(tag);
  }

  function changeHandler(event) {
    setTag(event.target.value);
  }


  
  return (
    <div className="xl:w-6/12 sm:w-full lg:w-10/12 bg-[#fff] rounded-lg border-4 flex flex-col items-center gap-y-4 p-[1rem]">
      <h1 className="text-2xl uppercase underline font-bold">
        Search Any {tag} GIF
      </h1>

      {loading ? (
        <Spinner />
      ) : (
        <img src={gif} width={350} className="rounded" />
      )}

      <input
        className="w-10/12 rounded-lg text-center py-2 text-lg bg-[#b1d2ff] bg-opacity-60 font-bold mt-8"
        onChange={changeHandler}
        value={tag}
      ></input>
      <button
        onClick={clickHandler}
        className="w-10/12 rounded-lg py-2 text-lg bg-[#b1d2ff] bg-opacity-60 font-bold"
      >
        GENERATE
      </button>
    </div>
  );
};

export default Tag;
