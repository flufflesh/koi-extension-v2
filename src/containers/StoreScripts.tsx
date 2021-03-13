import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import styled from "styled-components";
import StoreScript from "../components/StoreScript";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  width: 100%;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
`;

const ScriptsContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  align-content: flex-start;
  flex-direction: row;
  overflow-y: auto;
  margin-bottom: 20px;
  color: white;
  flex-wrap: wrap;
  gap: 10px;
  flex: 1;
`;

const StoreScripts = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    let interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Wrapper>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#292a47",
            boxShadow:
              "box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15), inset 0px 0px 3px rgba(0, 0, 0, 0.05)",
            color: "white",
          },
        }}
      />
      <Header>
        <div>
          <h3 style={{ color: "#fff", fontSize: 34, fontWeight: 700 }}>
            Store Scripts
          </h3>
          <span style={{ color: "rgba(255,255,255,0.5)" }}>{time}</span>
        </div>
      </Header>
      <ScriptsContainer>
        <StoreScript image="/groupIcons/Supreme.png" />
        <StoreScript image="/groupIcons/Supreme.png" />

        <StoreScript image="/groupIcons/Supreme.png" />
        <StoreScript image="/groupIcons/Supreme.png" />
        <StoreScript image="/groupIcons/Supreme.png" />
        <StoreScript image="/groupIcons/Supreme.png" />
        <StoreScript image="/groupIcons/Supreme.png" />
      </ScriptsContainer>
    </Wrapper>
  );
};

export default StoreScripts;
