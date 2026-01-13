import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange, ...otherProps }) {
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!parentRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectedItem = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleSelectedItem(option)}
        key={option.value}
        value={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={parentRef} className="w-48 relative" {...otherProps}>
      <Panel
        className="flex justify-between items-center cursor-pointer rounded"
        onClick={handleClick}
      >
        {value?.label || "Select Item..."}
        <GoChevronDown />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
