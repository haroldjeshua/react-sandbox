import { useEffect, useState } from "react";
import Movie from "./components/Movie";
import Filter from "./components/Filter";

function App() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        import.meta.env.VITE_REACT_APP_TMDB_API_KEY
      }&language=en-US&page=1`
    );
    const movies = await data.json();
    console.log(movies);
    setPopular(movies.results);
  };

  return (
    <div className="App">
      <Filter />
      <div className="grid grid-cols-4 gap-4">
        {popular.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default App;
