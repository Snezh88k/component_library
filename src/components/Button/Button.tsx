import React from "react";
import PropTypes from "prop-types";

import "./Button.css";

interface ButtonProps {
  title: string;
  onClick: () => void;
}

const StyledButton = ({ title, onClick }: ButtonProps) => (
  <button onClick={onClick}>{title}</button>
);
StyledButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default StyledButton;
