import { FaCheck, FaRunning, FaLaugh } from "react-icons/fa";

const Button = ({ textContent, Icon }) => {
  return (
    <button className="flex items-center gap-2 min-w-24 h-12 font-bold bg-white border border-neutral-500 rounded-full px-4 transition-all ease-linear hover:bg-violet-300 hover:border-violet-300 active:bg-violet-600 active:border-violet-600">
      {Icon && <Icon />}
      {textContent}
    </button>
  );
};

// const AllButton = () => <Button textContent="All" Icon={FaCheck} />;
// const ActionButton = () => <Button textContent="Action" Icon={FaRunning} />;
// const ComedyButton = () => <Button textContent="Comedy" Icon={FaLaugh} />;

const Filter = ({ popular, setFiltered, activeGenre, setActiveGenre }) => {
  return (
    <div className="flex justify-center items-center gap-4 h-24 mb-8">
      {/* <AllButton onClick={() => setActiveGenre(0)} />
      <ActionButton onClick={() => setActiveGenre(28)} />
      <ComedyButton onClick={() => setActiveGenre(35)} /> */}
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
