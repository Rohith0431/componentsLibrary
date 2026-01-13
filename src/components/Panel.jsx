import classNames from "classnames";

function Panel({ children, className, ...otherProps }) {
  const combinedClassName = classNames(
    "border p-3 shadow bg-white w-full",
    className
  );
  return (
    <div {...otherProps} className={combinedClassName}>
      {children}
    </div>
  );
}

export default Panel;
