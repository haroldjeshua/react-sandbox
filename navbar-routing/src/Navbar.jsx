import React from "react";

const Navbar = () => {
  const path = window.location.pathname;
  return (
    <nav className="nav">
      <a href="/" className="nav-title">
        Harv.io
      </a>
      <ul>
        <CustomLink href="/work">Work</CustomLink>
        <CustomLink href="/about">About</CustomLink>
        <CustomLink href="/contact">Contact</CustomLink>
      </ul>
    </nav>
  );
};

function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname;

  return (
    <li className={path === href ? "active" : ""}>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  );
}

export default Navbar;
