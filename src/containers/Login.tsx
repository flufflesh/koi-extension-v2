import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { DiscordWithWordmark } from "../components/Icons";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 20px;
  background: linear-gradient(180deg, #0b0e37 0%, #080a2e 98.74%);
  & div {
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  & button {
    background: linear-gradient(180deg, #ff5665 1.55%, #e23342 96.94%);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.35);
    border: none;
    height: 50px;
    border-radius: 10px;

    font-size: 16px;
    & a {
      color: #fff;
      text-decoration: none;
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 5px;
      align-items: center;
    }
  }
  & h3 {
    color: white;
  }
`;

const Login = () => {
  return (
    <div>
      <Wrapper>
        <div>
          <img src="koi-icon.png" />
          <h3>Login</h3>
          <button>
            <Link to="/profiles">
              Login with <DiscordWithWordmark></DiscordWithWordmark>
            </Link>
          </button>
        </div>
      </Wrapper>
    </div>
  );
};
export default Login;
