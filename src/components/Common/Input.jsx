// react libraries
import React from "react";
import PropTypes from "prop-types";

// styles
import "./_input.scss";

/**
 * @desc reusable input field
 * @param {object} param0
 */
const Input = ({
  labelText,
  inputType,
  inputName,
  onChange,
  value,
  placeHolder,
}) => {
  return (
    <div className="input-field">
      <label htmlFor={inputName}>{labelText}</label>
      <input
        placeholder={placeHolder}
        value={value.trim()}
        onChange={onChange}
        name={inputName}
        type={inputType}
        minLength={`${inputType === "password" ? 8 : ""}`}
        required
      />
    </div>
  );
};

// type checking
Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeHolder: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default Input;
