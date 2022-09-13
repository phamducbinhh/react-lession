import React, { useEffect } from "react";
import axios from "axios";
import MovieSearchItem from "./MovieSearchItem";
import useDebounce from "../custom/useDebounce";

const MovieSearchApp = () => {
  //   //CALL API TO GET MOVIE useEffect
  const [movies, setMovies] = React.useState([]);
  //chức năng tìm kiếm
  const [query, setQuery] = React.useState("");
  //debounce
  const queryDebounce = useDebounce(query, 500);
  //trạng thái loading
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      if (queryDebounce) {
        const respones = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=630a30ea353d431d5fad10eb031b7d8d&query=''${queryDebounce}' '`
        );
        if (respones.data.results) {
          setMovies(respones.data.results);
          setLoading(false);
        }
      } else {
        const respones = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=630a30ea353d431d5fad10eb031b7d8d&query=''${queryDebounce}' '`
        );
        if (respones.data.results) {
          setMovies(respones.data.results);
          setLoading(false);
        }
      }
    }
    fetchData();
  }, [queryDebounce]);

  //chức năng tìm kiếm
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="p-10">
      <div className="w-full max-w-[500px] mx-auto mb-20">
        <input
          type={"text"}
          placeholder="Search Movies..."
          className="w-full p-5 border rounded-[8px] border-purple-200 shadow-[0px_0px_0px_3px_rgba(125,_106,_255,_0.2)]"
          onChange={handleSearch}
        />
      </div>
      {loading && <div className="grid grid-cols-3 gap-10"></div>}
      <div className="flex flex-wrap justify-between">
        {!loading &&
          movies.length > 0 &&
          movies.map((item, index) => (
            <MovieSearchItem key={index} data={item} />
          ))}
      </div>
    </div>
  );
};

export default MovieSearchApp;
