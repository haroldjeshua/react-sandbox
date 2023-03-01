import { ChangeEvent, useRef, useState } from "react";
import data from "../data.json";
import "./styles.css";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState("");
  const [search, setSearch] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (!isOpen) {
      inputRef.current?.focus();
    }
    setIsOpen(!Boolean(isOpen) ? "open" : "");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredCars = data.cars.filter(
    (car) =>
      search.length && car.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <nav>
      <h2>Dashboard</h2>
      <div className="nav-items">
        <button className="nav-button uil uil-estate"></button>
        <div className="wrapper">
          <div className={`search ${isOpen}`}>
            <input
              type="text"
              placeholder="Find a car"
              ref={inputRef}
              onChange={handleChange}
            />
            <button
              className={`nav-button uil uil-${isOpen ? "multiply" : "search"}`}
              onClick={handleClick}
            ></button>
          </div>
          <div className={`items ${isOpen}`}>
            {Boolean(filteredCars.length) &&
              filteredCars.map(
                (car, index) =>
                  index < 3 && <button key={car.name}>{car.name}</button>
              )}
          </div>
        </div>
        <button className="nav-button uil uil-bars"></button>
      </div>
    </nav>
  );
};

export default Dropdown;
