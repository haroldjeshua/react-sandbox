import { motion } from "framer-motion";

const Movie = ({ movie }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col"
    >
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt={movie.backdrop_path}
        className="rounded-lg h-64 object-cover"
      />
      <h2 className="text-md leading-4">{movie.title}</h2>
    </motion.div>
  );
};

export default Movie;
