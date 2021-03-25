import React, { useState } from "react";
import styled from "styled-components";
import { DiscordWithWordmark } from "../components/Icons";
import { useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";

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
      cursor: pointer;
      text-decoration: none;
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 5px;
      align-items: center;
    }
  }
  & img {
    width: 200px;
  }
  & h3 {
    color: white;
  }
`;

const Login = () => {
  const history = useHistory();
  const [loggingIn, setLoggingIn] = useState(false);
  const [loginFailed, setLoginFailed]: any = useState(null);
  const login = () => {
    setLoggingIn(true);
    setLoginFailed(null);
    setTimeout(() => {
      const number = Math.floor(Math.random() * 11);
      console.log(number);
      if (number > 7) {
        setLoginFailed("Key in use/Inactive");
        setLoggingIn(false);
      } else {
        setLoggingIn(false);
        history.push("/profiles");
      }
    }, 2000);
  };
  return (
    <div>
      <Wrapper>
        <div>
          <img src="KoiPNG.png" alt="login logo" />
          {/* <h3 style={{ color: "rgba(255,255,255,0.8)" }}>Login</h3> */}
          <button>
            <a style={{ height: "100%", width: "100%" }} onClick={login}>
              Login with <DiscordWithWordmark></DiscordWithWordmark>
            </a>
          </button>
          <section
            style={{
              height: 20,
              textAlign: "center",
            }}
          >
            {loggingIn ? (
              <section
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p style={{ color: "white" }}>Logging in...</p>
                <Loader
                  type="ThreeDots"
                  color="#f1f1f1"
                  height={30}
                  width={30}
                  timeout={2000}
                ></Loader>
              </section>
            ) : (
              <></>
            )}{" "}
            {loginFailed === null ? (
              <></>
            ) : (
              <p style={{ color: "#FF5665" }}>{loginFailed}</p>
            )}
          </section>
        </div>
      </Wrapper>
    </div>
  );
};
export default Login;
