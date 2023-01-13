import "./App.css";
import {
  RiGridFill,
  RiMessengerFill,
  RiAddFill,
  RiNotification2Fill,
} from "react-icons/ri";

function App() {
  return (
    <Navbar>
      <NavItem icon={<RiGridFill />} />
      <NavItem icon={<RiAddFill />} />
      <NavItem icon={<RiMessengerFill />} />
      <NavItem icon={<RiNotification2Fill />} />
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
  return (
    <li className="nav-item">
      <a href="#!" className="icon-button">
        {props.icon}
      </a>
    </li>
  );
}

export default App;
