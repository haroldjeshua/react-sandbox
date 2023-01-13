import "./App.css";
import {
  RiGridFill,
  RiMessengerFill,
  RiAddFill,
  RiNotification2Fill,
  RiArrowDownSFill,
  RiSettings5Fill,
  RiArrowRightSLine,
  RiArrowLeftLine,
  RiFeedbackFill,
  RiAccountCircleFill,
  RiLock2Fill,
  RiTranslate2,
  RiNewspaperLine,
  RiListCheck,
  RiRotateLockFill,
} from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

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
  const [activeMenu, setActiveMenu] = useState("main"); // settings context

  // menu dropdown height transition fix
  const [menuHeight, setMenuHeight] = useState(null);

  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.clientHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div
      className="dropdown"
      style={{ height: menuHeight + 34 }}
      ref={dropdownRef}
    >
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem leftIcon={<RiAccountCircleFill />}>
            My Profile
          </DropdownItem>
          <DropdownItem
            leftIcon={<RiSettings5Fill />}
            rightIcon={<RiArrowRightSLine />}
            goToMenu="settings"
          >
            Settings & Privacy
          </DropdownItem>
          <DropdownItem leftIcon={<RiFeedbackFill />}>
            Give Feedback
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem leftIcon={<RiArrowLeftLine />} goToMenu="main">
            Settings & Privacy
          </DropdownItem>
          <DropdownItem leftIcon={<RiSettings5Fill />}>Settings</DropdownItem>
          <DropdownItem leftIcon={<RiRotateLockFill />}>
            Privacy Checkup
          </DropdownItem>
          <DropdownItem leftIcon={<RiLock2Fill />}>Privacy Center</DropdownItem>
          <DropdownItem leftIcon={<RiListCheck />}>Activity Log</DropdownItem>
          <DropdownItem leftIcon={<RiNewspaperLine />}>Feed</DropdownItem>
          <DropdownItem leftIcon={<RiTranslate2 />}>Language</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;
