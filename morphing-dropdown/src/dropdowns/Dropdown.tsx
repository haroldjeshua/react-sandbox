import { ChangeEvent, useRef, useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState("");
  const [search, setSearch] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <nav>
      <h2>Dashboard</h2>
      <div className="nav-items">
        <button className="nav-button uil uil-estate"></button>
        <div className="wrapper">
          <div className="search">
            <input
              type="text"
              placeholder="Find a car"
              ref={inputRef}
              onChange={handleChange}
            />
            <button className={`nav-button `}></button>
          </div>
          <div className={`items`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Dropdown;
