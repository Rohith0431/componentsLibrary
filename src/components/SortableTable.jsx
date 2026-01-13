import Table from "./Table";
import useSort from "../hooks/use-sort";
import { GoArrowSmallUp, GoArrowSmallDown } from "react-icons/go";

function SortableTable(props) {
  const { config, data } = props;
  const { sortBy, sortOrder, sortedData, setSortColumn } = useSort(
    data,
    config
  );

  const rederIcons = (label, sortBy, sortOrder) => {
    if (label !== sortBy) {
      return (
        <div>
          <GoArrowSmallUp />
          <GoArrowSmallDown />
        </div>
      );
    }
    if (sortOrder === null) {
      return (
        <div>
          <GoArrowSmallUp />
          <GoArrowSmallDown />
        </div>
      );
    } else if (sortOrder === "asc") {
      return (
        <div>
          <GoArrowSmallUp />
        </div>
      );
    } else if (sortOrder === "desc") {
      return (
        <div>
          <GoArrowSmallDown />
        </div>
      );
    }
  };

  const newConfig = config.map((column) => {
    if (column.sortValue) {
      return {
        ...column,
        header: () => (
          <th
            className="cursor-pointer hover:bg-gray-100"
            onClick={() => setSortColumn(column.label)}
          >
            <div className="flex items-center">
              {rederIcons(column.label, sortBy, sortOrder)}
              {column.label}
            </div>
          </th>
        ),
      };
    }
    return column;
  });

  return <Table {...props} data={sortedData} config={newConfig} />;
}

export default SortableTable;
