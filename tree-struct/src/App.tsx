import "./App.css";

const files = {
  children: [
    {
      name: "folder1",
      children: [
        {
          name: "harv",
        },
      ],
    },
    {
      name: "harv.md",
    },
    {
      name: "jeshua.txt",
    },
  ],
};

type TEntry = {
  name: string;
  children?: TEntry[];
};

function Entry({ name, children }: TEntry) {
  return <div>{name}</div>;
}

function App() {
  // recursion
  return (
    <div className="App">
      {files.children.map((entry) => (
        <Entry {...entry} />
      ))}
    </div>
  );
}

export default App;
