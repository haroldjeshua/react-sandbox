import { useState } from "react";
import "./App.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function App() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1580820267682-426da823b514?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1578364249730-0c4ee16426fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1525121577197-56ddc8d76c87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRyYWl0JTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1533495720786-6dade9109c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHBvcnRyYWl0JTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1454817481404-7e84c1b73b4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fHBvcnRyYWl0JTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <div className="max-w-[1400px] h-[700px] w-full m-auto py-16 px-4 relative group">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${slides[3].url})` }}
      />

      {/* Arrows */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black-200 text-white cursor-pointer">
        <FiChevronLeft size={32} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black-200 text-white cursor-pointer">
        <FiChevronRight size={32} />
      </div>
    </div>
  );
}

export default App;
