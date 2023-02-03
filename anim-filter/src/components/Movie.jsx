const Movie = ({ movie }) => {
  return (
    <div className="flex flex-col">
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt={movie.backdrop_path}
        className="rounded-lg h-64 object-cover"
      />
      <h2 className="text-md leading-4">{movie.title}</h2>
    </div>
  );
};

export default Movie;
