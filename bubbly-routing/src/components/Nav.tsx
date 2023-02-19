import { BubblyLink } from "react-bubbly-transitions";

const HarvBubblyLink = ({ to = "", text = "" }) => (
  <BubblyLink to={to} colorStart="#4d20f0" colorEnd="#242424">
    {text}
  </BubblyLink>
);

const Nav = () => {
  return (
    <nav className="animate-in" style={{ animationDelay: "800ms" }}>
      <HarvBubblyLink to="/" text="Home" />
      <HarvBubblyLink to="/work" text="Work" />
      <HarvBubblyLink to="/about" text="About" />
      <HarvBubblyLink to="/contact" text="Contact" />
    </nav>
  );
};

export default Nav;
