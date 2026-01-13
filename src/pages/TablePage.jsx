import SortableTable from "../components/SortableTable";

const data = [
  { name: "orange", color: "bg-orange-500", score: 28 },
  { name: "Apple", color: "bg-red-500", score: 34 },
  { name: "Banana", color: "bg-yellow-500", score: 45 },
];

const config = [
  {
    label: "Name",
    render: (fruit) => fruit.name,
    sortValue: (fruit) => fruit.name,
  },
  {
    label: "Color",
    render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
  },
  {
    label: "Score",
    render: (fruit) => fruit.score,
    sortValue: (fruit) => fruit.score,
  },
];

const keyFn = (fruit) => {
  return fruit.name;
};

function TablePage() {
  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
