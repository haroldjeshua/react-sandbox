import { useState } from "react";
import "./App.scss";

// Can be use as external components
const CheckboxMultiSelect = (props) => {
  const [defaultValue, setDefaultValue] = useState("Select a color");
  const [currentValues, setCurrentValues] = useState([]);

  const _handleChange = (props) => {
    setCurrentValues(getToggledOptions(currentValues, value));
  };

  return (
    <Select classPrefix="react-select" multiple onChange={_handleChange}>
      <button className="react-select-trigger">
        {currentValues.length > 0 ? currentValues.join(", ") : defaultValue}
      </button>
    </Select>
  );
};

function App() {
  return (
    <div className="App">
      {/* <CheckboxMultiSelect /> */}
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
