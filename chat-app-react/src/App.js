import Navbar from "./components/Navbar";

const style = {
  appWrapper: `max-w-[728px] mx-auto text-center`,
  section: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
};

function App() {
  return (
    <div className={style.appWrapper}>
      <section className={style.section}>
        <Navbar />
      </section>
    </div>
  );
}

export default App;
