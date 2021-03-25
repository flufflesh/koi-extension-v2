import React, { useState } from "react";
import styled from "styled-components";
import { Switch } from "./shared";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.1) 99.8%
  );
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15),
    inset 0px 0px 3px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  gap: 15px;
  width: 290px;
`;
const SelectedDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const BoldText = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #fff;
`;
const Select = styled.select`
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
  background-repeat: no-repeat;
  & option {
    background: #2e2f48;
  }
`;
const RedButton = styled.button`
  background: linear-gradient(180deg, #ff496f 0%, #da002d 100%);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.35);
  border: none;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 10px;
  width: 140px;
  &:focus {
    outline: none;
  }
`;
const BlueButton = styled.button`
  background: linear-gradient(180deg, #626bff 1.55%, #424dff 96.94%);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.35);
  border: none;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 10px;
  width: 140px;
  &:focus {
    outline: none;
  }
`;
const SelectedCard = (props: any) => {
  const [checked, setChecked] = useState(false);

  const setThisActive = () => {
    checked ? setChecked(false) : setChecked(true);
    props.setActive(props.id);
  };
  return (
    <Card>
      <SelectedDetails>
        <BoldText style={{ color: checked ? "#fff" : "rgba(255,255,255,0.6)" }}>
          Set as active profile
        </BoldText>
        <Switch
          defaultChecked={checked}
          aria-labelledby="activeCard"
          onChange={setThisActive}
        ></Switch>
      </SelectedDetails>
      <SelectedDetails>
        <StyledDiv>
          <BoldText style={{ fontSize: 12 }}>On Decline Use</BoldText>
          <Select></Select>
        </StyledDiv>
      </SelectedDetails>
      <SelectedDetails>
        <BlueButton>Edit</BlueButton>
        <RedButton>Decline</RedButton>
      </SelectedDetails>
    </Card>
  );
};
export default SelectedCard;
