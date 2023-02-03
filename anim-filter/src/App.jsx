import { useEffect, useState } from "react";
import Movie from "./components/Movie";

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
    setPopular(movies.result);
  };

  return (
    <div className="App">
      <div className="grid grid-cols-4 gap-4">
        {popular.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default App;
