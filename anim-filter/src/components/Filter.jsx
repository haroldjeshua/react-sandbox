import { FaCheck, FaRunning, FaLaugh } from "react-icons/fa";

const Filter = () => {
  return (
    <div className="flex justify-center items-center gap-4 h-24 mb-8">
      <DoneButton />
      <ActionButton />
      <ComedyButton />
    </div>
  );
};

const Button = ({ textContent, Icon }) => {
  return (
    <button className="flex items-center gap-2 min-w-24 h-12 font-bold bg-white border border-neutral-500 rounded-full px-4 transition-all ease-linear hover:bg-violet-300 hover:border-violet-300 active:bg-violet-600 active:border-violet-600">
      {Icon && <Icon className="mr-2" />}
      {textContent}
    </button>
  );
};

const DoneButton = () => <Button textContent="Done" Icon={FaCheck} />;
const ActionButton = () => <Button textContent="Action" Icon={FaRunning} />;
const ComedyButton = () => <Button textContent="Comedy" Icon={FaLaugh} />;

export default Filter;
