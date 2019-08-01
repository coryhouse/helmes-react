import React from "react";
import PropTypes from "prop-types";

function Input(props) {
  return (
    <>
      <div>
        {props.showLabel && <label htmlFor={props.id}>{props.label}</label>}
        <br />
        <input
          type="text"
          id={props.id}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
      {props.error && <div>{props.error}</div>}
    </>
  );
}

Input.defaultProps = {
  // if showLabel isn't passed in on props, default to true
  showLabel: true
};

Input.propTypes = {
  /** The input element ID */
  id: PropTypes.string.isRequired,

  /** The inputs label */
  label: PropTypes.string.isRequired,

  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  showLabel: PropTypes.bool
};

export default Input;
