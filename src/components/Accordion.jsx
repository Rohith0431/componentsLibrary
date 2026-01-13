import { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    setExpandedIndex((currentIndex) => {
      return currentIndex === nextIndex ? -1 : nextIndex;
    });
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    return (
      <div key={item.id}>
        <div
          onClick={() => handleClick(index)}
          className="w-full flex justify-between items-center p-3 bg-gray-50 border-b cursor-pointer text-left"
        >
          <span>{item.title}</span>
          <span className="text-2xl">
            {isExpanded ? <GoChevronUp /> : <GoChevronDown />}
          </span>
        </div>

        <div
          className={
            "border-b overflow-hidden transform origin-top transition-all " +
            (isExpanded ? "opacity-100 py-5" : "opacity-0 py-0")
          }
        >
          <div className={"px-3 " + (isExpanded ? "" : "hidden")}>
            {item.content}
          </div>
        </div>
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
