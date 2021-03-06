import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  & div {
    padding-bottom: 100px;
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
            <Link to="/profiles">Login with Discord</Link>
          </button>
        </div>
      </Wrapper>
    </div>
  );
};
export default Login;
