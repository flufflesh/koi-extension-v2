import { relative } from "node:path";
import React, { useState } from "react";
import styled from "styled-components";
import "./slider.css";
const Slider = (props: any) => {
  const [checked, setChecked] = useState(false);
  return (
    <label className="switch">
      <input
        type="checkbox"
        onChange={() => {
          if (checked) {
            setChecked(false);
          } else {
            setChecked(true);
            props.setThisActive(props.id);
          }
        }}
      />
      <span className="slider round"></span>
    </label>
  );
};
export default Slider;
