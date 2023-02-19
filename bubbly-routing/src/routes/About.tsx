import Nav from "../components/Nav";
import Section from "../components/Section";
import Title from "../components/Title";

const Wrapper = () => {
  return (
    <>
      <header>
        <Title />
        <Nav />
      </header>
      <Section>
        <h1>About</h1>
      </Section>
    </>
  );
};

export default Wrapper;
