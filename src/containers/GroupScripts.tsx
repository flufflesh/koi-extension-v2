import React from "react";
import styled from "styled-components";
import { Dots, WhitePlus } from "../components/Icons";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  color: white;
  overflow: auto;
  margin-bottom: 25px;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
`;
const RightPlus = styled.button`
  border: none;

  background: linear-gradient(180deg, #00da0d 0%, #00b20b 100%);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.35);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 35px;
  width: 33px;
`;
const RightDots = styled.button`
  border: none;
  background: linear-gradient(180deg, #767eff 1.55%, #4b52d3 96.94%);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.35);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 35px;
  width: 33px;
`;
const ScriptsContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  margin-bottom: 20px;
  gap: 20px;
  flex: 1;
`;
const Scripts = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`;
const Script = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  min-width: 130px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.1) 99.8%
  );
  padding: 10px;
  gap: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15),
    inset 0px 0px 3px rgba(0, 0, 0, 0.05);
  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    & p {
      color: #fff;
    }
    & p:last-child {
      color: rgba(255, 255, 255, 0.6);
    }
  }
  & img {
    height: 40px;
    width: 40px;
    border-radius: 10px;
  }
  &.selected {
    background: linear-gradient(180deg, #ff5665 1.55%, #e23342 96.94%);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.35);
  }
`;

const GroupScripts = () => {
  const exampleBots = [
    { img: "/groupIcons/Velox.svg", name: "Velox", type: "AIO Bot" },
    { img: "/groupIcons/Nebula.svg", name: "Nebula Bots", type: "AIO Bot" },
    { img: "/groupIcons/Cyber.svg", name: "Cybersole", type: "AIO Bot" },
    { img: "/groupIcons/Tohru.svg", name: "Tohru", type: "AIO Bot" },
    { img: "/groupIcons/Orbit EU.svg", name: "Orbit EU", type: "AIO Bot" },
    { img: "/groupIcons/Mango.svg", name: "MangoPreme", type: "AIO Bot" },
    { img: "/groupIcons/Zeny.svg", name: "Zenyscripts", type: "AIO Bot" },
    { img: "/groupIcons/Flow.svg", name: "Flow", type: "AIO Bot" },
  ];
  const exampleGroups = [
    {
      img: "/groupIcons/AMNotify.svg",
      name: "AMNotify",
      type: "Private Group",
    },
    {
      img: "/groupIcons/Excluded.svg",
      name: "Excluded",
      type: "Private Group",
    },
    { img: "/groupIcons/Calicos.svg", name: "Calicos", type: "Public Group" },
    { img: "/groupIcons/Notify.svg", name: "Notify", type: "Private Group" },
    {
      img: "/groupIcons/Hidden Society.svg",
      name: "Hidden Society",
      type: "Public Group",
    },
    {
      img: "/groupIcons/Sauce.svg",
      name: "Sauce Monitor",
      type: "Public Group",
    },
    {
      img: "/groupIcons/RF.svg",
      name: "Restock Flippers",
      type: "Public Group",
    },
    {
      img: "/groupIcons/Peach.svg",
      name: "Peachy Pings",
      type: "Public Group",
    },
  ];
  const exampleMisc = [
    { img: "/groupIcons/Amazon.svg", name: "Amazon", type: "Subtitle" },
    {
      img: "/groupIcons/Adidas + Yeezy.svg",
      name: "Demandware",
      type: "Subtitle",
    },
    { img: "/groupIcons/Velo.svg", name: "Velo", type: "Dashboard" },
    { img: "/groupIcons/TL Dash.svg", name: "TL", type: "Dashboard" },
    { img: "/groupIcons/Kleidi Dash.svg", name: "Kleidi", type: "Dashboard" },
    { img: "/groupIcons/Meta Labs.svg", name: "MetaLabs", type: "Dashboard" },
    {
      img: "/groupIcons/Google Forms.svg",
      name: "Google Forms Math + AIO",
      type: "Subtitle",
    },
  ];
  return (
    <Wrapper>
      <Header>
        <h3 style={{ color: "#fff", fontSize: 34, fontWeight: 700 }}>
          Bot/Group Scripts
        </h3>
        <div
          style={{
            marginLeft: "auto",
            marginRight: 30,
            display: "flex",
            gap: "10px",
          }}
        ></div>
      </Header>
      <ScriptsContainer>
        <div>
          <h3 style={{ color: "#fff" }}>Bots (7)</h3>
          <Scripts>
            {exampleBots.map((value, index) => {
              return (
                <Script key={index} className={index % 2 ? "selected" : ""}>
                  <img src={value.img}></img>
                  <div>
                    <p>{value.name}</p>
                    <p>{value.type}</p>
                  </div>
                </Script>
              );
            })}
          </Scripts>
        </div>
        <div>
          <h3 style={{ color: "#fff" }}>Groups (0)</h3>
          <Scripts>
            {exampleGroups.map((value, index) => {
              return (
                <Script key={index} className={index % 2 ? "selected" : ""}>
                  <img src={value.img}></img>
                  <div>
                    <p>{value.name}</p>
                    <p>{value.type}</p>
                  </div>
                </Script>
              );
            })}
          </Scripts>
        </div>
        <div>
          <h3 style={{ color: "#fff" }}>Miscellaneous (3)</h3>
          <Scripts>
            {exampleMisc.map((value, index) => {
              return (
                <Script key={index} className={index % 2 ? "selected" : ""}>
                  <img src={value.img}></img>
                  <div>
                    <p>{value.name}</p>
                    <p>{value.type}</p>
                  </div>
                </Script>
              );
            })}
          </Scripts>
        </div>
      </ScriptsContainer>
    </Wrapper>
  );
};

export default GroupScripts;
