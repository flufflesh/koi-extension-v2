import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
  CreditCard,
  Scripts,
  DIY,
  Nike,
  Accounts,
  Store,
  Bell,
  Addon,
  Settings,
} from "../components/Icons";
import { BlueButton, ClearFields } from "../components/shared";
const Wrapper = styled.div`
  height: 95%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  margin: 20px;
  border-radius: 20px;
  min-width: 270px;
`;
const MenuWrapper = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  flex: 1;
  width: 100%;
`;
const StyledLink = styled(NavLink).attrs({
  activeClassName: "active",
})`
  display: flex;
  height: 45px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
  margin: 0 10px;
  width: 250px;
  text-decoration: none;
  &.active {
    background: linear-gradient(180deg, #ff5665 1.55%, #e23342 96.94%);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.35);
    color: #fff;
    border-radius: 15px;
    & svg {
      & path {
        fill: rgba(255, 255, 255, 1);
        fill-opacity: 1;
        opacity: 1;
      }
      & g {
        opacity: 1;
      }
    }
  }
  & div {
    font-size: 16px;
    padding-left: 20px;
    padding-top: 10px;
    display: flex;
    gap: 15px;
    flex-direction: row;
    & svg {
      & path {
        fill: rgba(255, 255, 255, 0.6);
      }
    }
    & p {
      padding-top: 5px;
    }
  }
`;
const StyledDiv = styled.div`
  position: relative;
  display: flex;
  height: 45px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
  margin: 0 10px;
  width: 250px;
  text-decoration: none;
  cursor: pointer;
  & div {
    font-size: 16px;
    padding-left: 20px;
    padding-top: 10px;
    display: flex;
    gap: 15px;
    flex-direction: row;
    & svg {
      & path {
        fill: rgba(255, 255, 255, 0.6);
      }
    }
    & p {
      padding-top: 5px;
    }
  }
`;
const SettingsDisplay = styled.div`
  position: absolute;
  height: 172px;
  padding-right: 20px;
  width: 320px;
  left: 110%;
  bottom: -150%;
  background: rgba(34, 36, 69, 0.5);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3),
    inset 0px 0px 3px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(27.1828px);

  & img {
    height: 60px;
    width: 60px;
    border-radius: 8px;
  }
  z-index: 30;
`;
const Account = styled.div`
  width: 250px;
  margin: 0 10px;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.2);
  margin-top: auto;
  margin-bottom: 15px;
  border-radius: 15px;
  & div {
    display: flex;
    flex-direction: row;
    height: 100%;
    align-items: center;
    gap: 10px;
    & img {
      margin-left: 10px;
      height: 45px;
      width: 45px;
      border-radius: 8px;
    }
    & section {
      display: flex;
      flex-direction: column;
      gap: 2px;
      justify-content: center;
    }
  }
`;
const Sidebar = () => {
  const [isHovering, setIsHovering] = useState(false);
  const hover = () => {
    if (!isHovering) {
      setIsHovering(true);
    } else {
      setIsHovering(false);
    }
  };

  return (
    <Wrapper>
      <div style={{ textAlign: "center", marginTop: 10, marginBottom: 10 }}>
        <img src="/Logo Copy.png" height={100} width={69} />
      </div>
      <MenuWrapper>
        <StyledLink to="/profiles">
          <div>
            <CreditCard />
            <p>Profiles</p>
          </div>
        </StyledLink>
        <StyledLink to="/group-scripts">
          <div>
            <Scripts />
            <p>Bot/Group Scripts</p>
          </div>
        </StyledLink>
        <StyledLink to="/diy">
          <div>
            <DIY />
            <p>DIY</p>
          </div>
        </StyledLink>
        <StyledLink to="/nike-snkrs">
          <div>
            <Nike />
            <p>Nike SNKRS</p>
          </div>
        </StyledLink>
        <StyledLink to="/accounts">
          <div>
            <Accounts />
            <p>Accounts</p>
          </div>
        </StyledLink>
        <StyledLink to="/store-scripts">
          <div>
            <Store />
            <p>Store Scripts</p>
          </div>
        </StyledLink>
        <StyledLink to="/restocks">
          <div>
            <Bell />
            <p>Restocks</p>
          </div>
        </StyledLink>
        <StyledLink to="/addons">
          <div>
            <Addon />
            <p>Add-ons</p>
          </div>
        </StyledLink>
        <StyledDiv onClick={hover}>
          <div>
            <Settings />
            <p>Settings</p>
          </div>
          {isHovering ? (
            <SettingsDisplay
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div style={{ height: "100%", width: "100%" }}>
                <img src="https://media.discordapp.net/attachments/531633243766784000/810238293206892544/145948869_1319883351710309_6007634537060611904_n.png?width=373&height=466" />
                <section style={{ width: "100%", paddingRight: 30 }}>
                  <section
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    <p style={{ color: "#fff", fontSize: 16 }}>Flufflés</p>
                    <p
                      style={{
                        color: "#fff",
                        fontSize: 14,
                      }}
                    >
                      #9765
                    </p>
                  </section>
                  <section
                    style={{
                      marginTop: 5,
                      backgroundColor: "rgba(255,255,255,0.1)",
                      height: 10,

                      width: "100%",
                    }}
                  >
                    <section
                      style={{
                        width: "60%",
                        background:
                          "linear-gradient(180deg, #FF5665 1.55%, #E23342 96.94%)",
                        height: 10,
                      }}
                    ></section>
                  </section>
                  <section>
                    <p>13 days remaining.</p>
                  </section>
                </section>
              </div>
              <div style={{ marginBottom: 20 }}>
                <BlueButton style={{ color: "#fff", fontWeight: 600 }}>
                  Renew
                </BlueButton>
                <ClearFields style={{ color: "#fff", fontWeight: 600 }}>
                  Deactivate
                </ClearFields>
              </div>
            </SettingsDisplay>
          ) : (
            <></>
          )}
        </StyledDiv>
        <Account>
          <div>
            <img src="https://media.discordapp.net/attachments/531633243766784000/810238293206892544/145948869_1319883351710309_6007634537060611904_n.png?width=373&height=466" />
            <section>
              <p style={{ color: "#fff", fontSize: 16 }}>Flufflés</p>
              <p
                style={{
                  color: "#fff",
                  fontSize: 12,
                  opacity: "0.8",
                  fontWeight: 400,
                }}
              >
                #9765
              </p>
            </section>
          </div>
        </Account>
      </MenuWrapper>
    </Wrapper>
  );
};

export default Sidebar;
