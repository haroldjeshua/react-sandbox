const Movie = ({ movie }) => {
  return (
    <div className="flex flex-col">
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt={movie.backdrop_path}
      />
      <h2>{movie.title}</h2>
    </div>
  );
};

export default Movie;
