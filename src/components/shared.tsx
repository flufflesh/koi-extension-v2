import styled from "styled-components";

export const Input = styled.input`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.1) 99.8%
  );
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15),
    inset 0px 0px 3px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  padding: 12px;
  width: 100%;
  font-size: 14px;
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  outline: none;
`;
export const Select = styled.select`
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  height: 40px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15),
    inset 0px 0px 3px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  appearance: none;
  color: rgba(255, 255, 255, 0.8);
  padding-left: 10px;
  background-image: url("/arrow.svg");
  background-position: right 10px center;
  border: none;
  min-width: 100px;
  width: 100%;
  background-repeat: no-repeat;
  font-weight: 600;

  & option {
    background: #2e2f48;
  }
`;
export const ClearFields = styled.button`
  background: linear-gradient(180deg, #ff496f 0%, #da002d 100%);
  border: none;
  border-radius: 10px;
  flex: 1;
  height: 40px;
`;
export const Save = styled.button`
  background: linear-gradient(180deg, #00da0d 0%, #00b20b 100%);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.35);
  border: none;
  border-radius: 10px;
  height: 40px;
  flex: 1;
`;

export const BlueButton = styled.button`
  background: linear-gradient(180deg, #626bff 1.55%, #424dff 96.94%);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.35);
  border-radius: 10px;
  border: none;
  height: 40px;
  flex: 1;
`;
