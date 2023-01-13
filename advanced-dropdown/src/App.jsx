import "./App.css";

function App() {
  return (
    <Navbar>
      <NavItem icon="69" />
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
