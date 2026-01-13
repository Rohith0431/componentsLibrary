import Link from "./Link";

const links = [
  { path: "/", label: "Dropdown" },
  { path: "/accordion", label: "Accordion" },
  { path: "/buttons", label: "Buttons" },
  { path: "/modal", label: "Modal" },
  { path: "/table", label: "Table" },
  { path: "/counter", label: "Counter" },
];

function Sidebar() {
  const rederedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className="mb-3"
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
      >
        {link.label}
      </Link>
    );
  });
  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start col-span-1 h-screen pt-4 border-r pr-4">
      {rederedLinks}
    </div>
  );
}

export default Sidebar;
