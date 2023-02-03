import React from "react";

const Filter = () => {
  return (
    <div className="flex justify-center items-center gap-4 h-24 mb-8">
      <button className="flex min-w-64">All</button>
      <button className="flex min-w-64">Action</button>
      <button className="flex min-w-64">Comedy</button>
    </div>
  );
};

export default Filter;
