import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
  height: 100%;
  min-width: 100px;
`;
const IconMenu = styled.div`
  display: flex;
  height: 100%;
`;
const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const StyledLink = styled(NavLink).attrs({
  activeClassName: "active",
})`
  display: flex;
  transition: all 100ms;
  color: black;
  text-decoration: none;
`;
const Sidebar = () => {
  return (
    <Wrapper>
      <img src="/koi-icon.png" height={100} width={100} />
      <MenuWrapper>
        <StyledLink to="/profiles">Profiles</StyledLink>
        <StyledLink to="/group-scripts">Bot/Group Scripts</StyledLink>
        <StyledLink to="/diy">DIY</StyledLink>
        <StyledLink to="/nike-snkrs">Nike SNKRS</StyledLink>
        <StyledLink to="/accounts">Accounts</StyledLink>
        <StyledLink to="/store-scripts">Store Scripts</StyledLink>
        <StyledLink to="/restocks">Restocks</StyledLink>
        <StyledLink to="/addons">Add-ons</StyledLink>
        <StyledLink to="/settings">Settings</StyledLink>
      </MenuWrapper>
    </Wrapper>
  );
};

export default Sidebar;
