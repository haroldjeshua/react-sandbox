import "./App.css";
import {
  RiGridFill,
  RiMessengerFill,
  RiAddFill,
  RiNotification2Fill,
  RiArrowDownSFill,
  RiSettings5Fill,
  RiArrowRightSLine,
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
        <DropdownMenu></DropdownMenu>
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

function DropdownMenu() {
  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown">
      <DropdownItem>My Profile</DropdownItem>
      <DropdownItem
        leftIcon={<RiSettings5Fill />}
        rightIcon={<RiSettings5Fill />}
      >
        My Profile
      </DropdownItem>
    </div>
  );
}

export default App;
