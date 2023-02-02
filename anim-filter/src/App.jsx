import { useEffect, useState } from "react";

function App() {
  const [popular, setPopular] = useState([]);

  console.log(import.meta.env.VITE_REACT_APP_TMDB_API_KEY);

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
    setPopular(movies.result);
  };

  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export default App;
