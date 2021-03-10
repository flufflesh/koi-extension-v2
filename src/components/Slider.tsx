import { relative } from "node:path";
import React from "react";
import styled from "styled-components";
import "./slider.css";
const Slider = () => {
  return (
    <label className="switch">
      <input type="checkbox" />
      <span className="slider round"></span>
    </label>
  );
};
export default Slider;
