import React from "react";
import { useDrag } from "react-dnd";
import styled from "styled-components";
import { Eye, Dots, Mastercard, VISA } from "./Icons";

const DotContainer = styled.button`
  border-radius: 100px;
  border: none;
  height: 35px;
  width: 35px;
  padding: 5px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.1) 99.8%
  );
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15),
    inset 0px 0px 3px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  &:last-of-type {
    margin-bottom: 10px;
  }
`;
const CardDetails = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  gap: 20px;
`;
const ProfileCards = (props: any) => {
  const [{ filter, opacity }, drag] = useDrag(
    () => ({
      type: props.type,
      item: props.name,
      collect: (monitor) => ({
        filter: monitor.isDragging() ? "blur(54.3656px)" : "",
        opacity: monitor.isDragging() ? 1 : 1,
      }),
    }),
    [props.name, props.type]
  );
  return (
    <Card
      ref={drag}
      style={{ backdropFilter: filter, opacity }}
      onClick={() => {
        if (props.type !== "") props?.setSelected(props.name);
      }}
    >
      <CardDetails style={{ marginTop: 0 }}>
        {props.value.type === "VISA" ? <VISA /> : <Mastercard />}
        <div style={{ marginLeft: "auto", display: "flex", gap: 5 }}>
          <DotContainer>
            <Eye></Eye>
          </DotContainer>
          <DotContainer>
            <Dots></Dots>
          </DotContainer>
        </div>
      </CardDetails>
      <CardDetails>
        <p
          style={{
            fontSize: 20,
            fontWeight: 700,
            marginRight: 50,
            filter: props.blur ? "blur(0.5rem)" : "",
          }}
        >
          {props.value.cardNumber}
        </p>
      </CardDetails>
      <CardDetails style={{ marginLeft: "auto", fontSize: 14 }}>
        <div>
          <p>{props.value.cvv}</p>
          <p style={{ fontSize: 10, opacity: 0.6 }}>CVV</p>
        </div>
        <div>
          <p>{props.value.expiration}</p>
          <p style={{ fontSize: 10, opacity: 0.6 }}>Expires</p>
        </div>
      </CardDetails>
    </Card>
  );
};

export default ProfileCards;
