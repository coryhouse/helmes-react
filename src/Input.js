import React from "react";

function Input(props) {
  return (
    <>
      <div>
        <label htmlFor={props.id}>{props.label}</label>
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

export default Input;
