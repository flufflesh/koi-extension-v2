import React from "react";
import styled from "styled-components";
import Slider from "./Slider";

const Container = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.1) 99.8%
  );
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15),
    inset 0px 0px 3px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  width: 327px;
  height: 325px;
  padding: 10px;
`;
const Image = styled.img`
  height: 90px;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 5px;
`;
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  & section:nth-child(1),
  section:last-child {
    display: flex;
    flex-direction: row;
    gap: 10px;
    & div {
      display: flex;
      flex: 1;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
  & section {
    display: flex;
    flex-direction: row;
    gap: 10px;
    & div {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
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
  min-width: 100px;
  width: 100%;
  background-repeat: no-repeat;
  font-weight: 600;

  & option {
    background: #2e2f48;
  }
`;
const Input = styled.input`
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
const StoreScript = (props: any) => {
  return (
    <Container>
      <Image src={props.image} />
      <FlexContainer>
        <section>
          <div>
            <p>Autofill</p>
            <Slider />
          </div>
          <div>
            <p>ACO</p>
            <Slider />
          </div>
        </section>
        <section>
          <div>
            <p>URL/SKU/Variant</p>
            <Select>
              <option>0123456789</option>
            </Select>
          </div>
          <div>
            <p>Size</p>
            <Select>
              <option>XL</option>
            </Select>
          </div>
        </section>
        <section>
          <div>
            <p>Checkout Delay</p>
            <Input type="text" value="1500"></Input>
          </div>
          <div>
            <p>Profile(on failure)</p>
            <Select>
              <option>Chase 22</option>
            </Select>
          </div>
        </section>
        <section>
          <div>
            <p>Automatic Login</p>
            <Slider />
          </div>
        </section>
      </FlexContainer>
    </Container>
  );
};
export default StoreScript;
