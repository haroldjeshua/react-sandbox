import { useState } from "react";
import "./App.css";

const files = {
  children: [
    {
      name: "folder1",
      children: [
        {
          name: "harv",
          children: [
            {
              name: "subfolder1",
            },
            {
              name: "harold.js",
            },
          ],
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

function Entry({ entry, depth }: { entry: TEntry; depth: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      {entry.children ? (
        <button className="entry" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "-" : "+"} {entry.name}
        </button>
      ) : (
        <div>{entry.name}</div>
      )}
      {isExpanded && (
        <div style={{ paddingLeft: `${depth * 10}px` }}>
          {entry.children?.map((entry) => (
            <Entry entry={entry} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

function App() {
  // recursion
  return (
    <div className="App">
      {files.children.map((entry) => (
        <Entry entry={entry} depth={1} />
      ))}
    </div>
  );
}

export default App;
