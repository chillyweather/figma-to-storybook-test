import PropTypes from "prop-types";
import { FaRocket } from "react-icons/fa";
import "./button.css";

function Button({
  label = "Label",
  borderRadius = "var(--button-border-radius)",
  gap = "var(--label-gap)",
  color = "var(--button-color)",
  backgroundColor = "var(--button-background)",
  handleClick,
}) {
  return (
    <button
      // ref={buttonRef}
      onClick={handleClick}
      className="button"
      style={{
        backgroundColor: backgroundColor,
        color: color,
        borderRadius: borderRadius,
        gap: gap,
      }}
    >
      <FaRocket />
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  borderRadius: PropTypes.number,
  gap: PropTypes.number,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
