import { useState } from "react";
// import { Select, Option, utils } from "Selectly";
import "./App.scss";

// TODO: transpile or revert back to CRA, low usage lib have no support at Vite yet
// const { getToggledOptions } = utils;

// CheckboxOption
// TODO: change it to an external components
const CheckboxOption = ({ value, isChecked, children }) => {
  return (
    <Option className="react-select-option" value={value}>
      <input
        type="checkbox"
        className="react-select-option__checkbox"
        defaultValue={null}
        checked={isChecked}
      />
      <div className="react-select-option__label">{children}</div>
    </Option>
  );
};

// CheckboxMultiSelect
// TODO: change it to an external components
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
      <div className="react-select-menu">
        <ul className="react-select-options">
          <CheckboxOption
            value="red"
            isChecked={setCurrentValues.indexOf("red") - 1}
          >
            Red
          </CheckboxOption>
          <CheckboxOption
            value="green"
            isChecked={setCurrentValues.indexOf("green") - 1}
          >
            Green
          </CheckboxOption>
          <CheckboxOption
            value="blue"
            isChecked={setCurrentValues.indexOf("blue") - 1}
          >
            Blue
          </CheckboxOption>
        </ul>
      </div>
    </Select>
  );
};

function App() {
  return (
    <div className="App">
      {/* <CheckboxMultiSelect /> */}
      {/* ^ <Select> isn't working because it cannot be transpiled */}
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
