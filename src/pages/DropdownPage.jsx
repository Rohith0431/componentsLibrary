import { useState } from "react";
import Dropdown from "../components/Dropdown.jsx";

const options = [
  { label: "Red", value: "red" },
  { label: "Green", value: "green" },
  { label: "Blue", value: "blue" },
];

function DropdownPage() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectedOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex m-20">
      <Dropdown
        onChange={handleSelectedOption}
        value={selectedOption}
        options={options}
      />
    </div>
  );
}

export default DropdownPage;
