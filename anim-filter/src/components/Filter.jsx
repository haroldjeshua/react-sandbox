import { useEffect, useState } from "react";
import { FaCheck, FaRunning, FaLaugh } from "react-icons/fa";

const Button = ({ textContent, Icon, isActive, onClick }) => {
  return (
    <button
      className={`flex items-center gap-2 min-w-24 h-12 font-bold bg-white border border-neutral-500 rounded-full px-4 transition-all ease-linear hover:bg-violet-400 hover:border-violet-400 ${
        isActive ? "bg-violet-600 border-violet-600 text-violet-100" : ""
      }`}
      onClick={onClick}
    >
      {Icon && <Icon />}
      {textContent}
    </button>
  );
};

const Filter = ({ popular, setFiltered, activeGenre, setActiveGenre }) => {
  const [activeButton, setActiveButton] = useState(0);

  const handleClick = (index, genreId) => {
    setActiveGenre(genreId);
    setActiveButton(index);
  };

  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }

    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre, popular]);

  return (
    <div className="flex justify-center items-center gap-4 h-24 mb-8">
      <Button
        textContent="All"
        Icon={FaCheck}
        isActive={activeButton === 0}
        onClick={() => handleClick(0, 0)}
      />
      <Button
        textContent="Action"
        Icon={FaRunning}
        isActive={activeButton === 1}
        onClick={() => handleClick(1, 28)}
      />
      <Button
        textContent="Comedy"
        Icon={FaLaugh}
        isActive={activeButton === 2}
        onClick={() => handleClick(2, 35)}
      />
    </div>
  );
};

export default Filter;
