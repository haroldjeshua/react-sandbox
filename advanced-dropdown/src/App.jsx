import "./App.css";
import {
  RiGridFill,
  RiMessengerFill,
  RiAddFill,
  RiNotification2Fill,
  RiArrowDownSFill,
} from "react-icons/ri";
import { useState } from "react";

function App() {
  return (
    <Navbar>
      <NavItem icon={<RiGridFill />} />
      <NavItem icon={<RiAddFill />} />
      <NavItem icon={<RiMessengerFill />} />
      <NavItem icon={<RiNotification2Fill />} />
      <NavItem icon={<RiArrowDownSFill />}>
        <p>Dropdown Here</p>
      </NavItem>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-list">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#!" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

export default App;
