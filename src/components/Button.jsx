import PropTypes from "prop-types";
import ClassName from "classnames";
import { twMerge } from "tailwind-merge";

const checkVariationValue = (primary, secondary, success, warning, danger) => {
  const count =
    Number(!!primary) +
    Number(!!secondary) +
    Number(!!warning) +
    Number(!!success) +
    Number(!!danger);

  if (count > 1) {
    console.error(
      "Only one of primary, secondary, success, warning, danger can be true"
    );
    return true;
  }
};

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...otherProps
}) {
  const validationValue = checkVariationValue(
    primary,
    secondary,
    success,
    warning,
    danger
  );
  if (validationValue) {
    return null;
  }
  const classes = twMerge(
    ClassName(otherProps.ClassName, "flex items-center px-3 py-1.5 border", {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-900 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-400 bg-yellow-400 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "bg-white": outline,
      "rounded-full": rounded,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-400": outline && warning,
      "text-red-500": outline && danger,
    })
  );

  return (
    <button className={classes} {...otherProps}>
      {children}
    </button>
  );
}

Button.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
};

export default Button;
