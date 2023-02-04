import { useEffect } from "react";
import { FaCheck, FaRunning, FaLaugh } from "react-icons/fa";

const Button = ({ textContent, Icon, onClick }) => {
  return (
    <button
      className="flex items-center gap-2 min-w-24 h-12 font-bold bg-white border border-neutral-500 rounded-full px-4 transition-all ease-linear hover:bg-violet-300 hover:border-violet-300 active:bg-violet-600 active:border-violet-600"
      onClick={onClick}
    >
      {Icon && <Icon />}
      {textContent}
    </button>
  );
};

const Filter = ({ popular, setFiltered, activeGenre, setActiveGenre }) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }

    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre]);

  return (
    <div className="flex justify-center items-center gap-4 h-24 mb-8">
      <Button
        textContent="All"
        Icon={FaCheck}
        onClick={() => setActiveGenre(0)}
      />
      <Button
        textContent="Action"
        Icon={FaRunning}
        onClick={() => setActiveGenre(28)}
      />
      <Button
        textContent="Comedy"
        Icon={FaLaugh}
        onClick={() => setActiveGenre(35)}
      />
    </div>
  );
};

export default Filter;
