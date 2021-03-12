import React from "react";
import styled from "styled-components";
import Slider from "./Slider";

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

export const WhichModal = ({ modalName, setModalName, save }: any) => {
  if (modalName === "General") {
    return (
      <React.Fragment>
        <div>
          <section>
            <p>Profile Name</p>
            <Input />
          </section>
        </div>
        <div>
          <section>
            <p>First Name</p>
            <Input />
          </section>
          <section>
            <p>Last Name</p>
            <Input />
          </section>
        </div>
        <div>
          <section>
            <p>E-Mail Address</p>
            <Input />
          </section>
          <section>
            <p>Phone Number</p>
            <Input />
          </section>
        </div>
        <div style={{ marginTop: 115 }}>
          <Save
            style={{ cursor: "pointer" }}
            onClick={() => {
              setModalName("Billing");
            }}
          >
            Continue
          </Save>
        </div>
      </React.Fragment>
    );
  } else if (modalName === "Billing") {
    return (
      <React.Fragment>
        <div>
          <section>
            <p>Address 1</p>
            <Input />
          </section>
        </div>
        <div>
          <section>
            <p>Address 2</p>
            <Input />
          </section>
        </div>
        <div>
          <section>
            <p>Country</p>
            <Input />
          </section>
          <section>
            <p>State</p>
            <Input />
          </section>
        </div>
        <div>
          <section>
            <p>City</p>
            <Input />
          </section>
          <section>
            <p>Zip Code</p>
            <Input />
          </section>
        </div>
        <div style={{ marginTop: 47 }}>
          <Save
            style={{ cursor: "pointer" }}
            onClick={() => {
              setModalName("Shipping");
            }}
          >
            Continue
          </Save>
        </div>
      </React.Fragment>
    );
  } else if (modalName === "Shipping") {
    return (
      <React.Fragment>
        <div>
          <section>
            <p>Address 1</p>
            <Input />
          </section>
        </div>
        <div>
          <section>
            <p>Address 2</p>
            <Input />
          </section>
        </div>
        <div>
          <section>
            <p>Country</p>
            <Input />
          </section>
          <section>
            <p>State</p>
            <Input />
          </section>
        </div>
        <div>
          <section>
            <p>City</p>
            <Input />
          </section>
          <section>
            <p>Zip Code</p>
            <Input />
          </section>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <p style={{ color: "#fff" }}>
            Shipping address same as billing address
          </p>
          <Slider></Slider>
        </div>
        <div style={{ marginTop: 4 }}>
          <Save
            style={{ cursor: "pointer" }}
            onClick={() => {
              setModalName("Payment");
            }}
          >
            Continue
          </Save>
        </div>
      </React.Fragment>
    );
  } else if (modalName === "Payment") {
    return (
      <React.Fragment>
        <div>
          <section>
            <p>Card Number</p>
            <Input />
          </section>
        </div>
        <div>
          <section>
            <p>Expiration Date</p>
            <Input />
          </section>
          <section>
            <p>CVV</p>
            <Input />
          </section>
        </div>
        <div style={{ marginTop: 184 }}>
          <Save style={{ cursor: "pointer" }} onClick={save}>
            Save
          </Save>
        </div>
      </React.Fragment>
    );
  } else {
    return <></>;
  }
};
