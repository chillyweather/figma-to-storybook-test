import React from "react";
import PropTypes from "prop-types";
import "./ButtonWithLabel.css";
// import { FaRocket } from "react-icons/fa";
// import MyAppointment3 from "../icons/new-appointment-3.svg";

function ButtonWithLabel(props) {
  return (
    <div className="button-wrapper">
      <button>
        <img src={props.icon} alt="appointment icon" />
        {/* <FaRocket className="icon" /> */}
      </button>
      <div className="button-label">{props.label}</div>
    </div>
  );
}

ButtonWithLabel.propTypes = {
  label: PropTypes.string,
  borderRadius: PropTypes.number,
  gap: PropTypes.number,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  handleClick: PropTypes.func,
};

export default ButtonWithLabel;

// import PropTypes from "prop-types";
// import { FaRocket } from "react-icons/fa";
// import "./button.css";
//
// function Button({
//   label = "Label",
//   borderRadius = "var(--button-border-radius)",
//   gap = "var(--label-gap)",
//   color = "var(--button-color)",
//   backgroundColor = "var(--button-background)",
//   handleClick,
// }) {
//   return (
//     <button
//       // ref={buttonRef}
//       onClick={handleClick}
//       className="button"
//       style={{
//         backgroundColor: backgroundColor,
//         color: color,
//         borderRadius: borderRadius,
//         gap: gap,
//       }}
//     >
//       <FaRocket />
//       {label}
//     </button>
//   );
// }
//
// Button.propTypes = {
//   label: PropTypes.string,
//   borderRadius: PropTypes.number,
//   gap: PropTypes.number,
//   backgroundColor: PropTypes.string,
//   color: PropTypes.string,
//   handleClick: PropTypes.func,
// };
//
// export default Button;
