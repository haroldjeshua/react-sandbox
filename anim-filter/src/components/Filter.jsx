const Filter = () => {
  return (
    <div className="flex justify-center items-center gap-4 h-24 mb-8">
      <button className="flex justify-center items-center gap-2 min-w-24 h-12 font-bold bg-white border border-neutral-500 rounded-lg px-4 transition-all ease-linear hover:bg-violet-300 hover:border-violet-300 active:bg-violet-600 active:border-violet-600">
        Done All
      </button>
      <button className="flex justify-center items-center gap-2 min-w-24 h-12 font-bold bg-white border border-neutral-500 rounded-lg px-4 transition-all ease-linear hover:bg-violet-300 hover:border-violet-300 active:bg-violet-600 active:border-violet-600">
        Action
      </button>
      <button className="flex justify-center items-center gap-2 min-w-24 h-12 font-bold bg-white border border-neutral-500 rounded-lg px-4 transition-all ease-linear hover:bg-violet-300 hover:border-violet-300 active:bg-violet-600 active:border-violet-600">
        Comedy
      </button>
    </div>
  );
};

export default Filter;
