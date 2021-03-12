import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import styled from "styled-components";
import {
  TrashCan,
  DownArrow,
  UpArrow,
  Plus,
  WhitePlus,
  Dots,
} from "../components/Icons";
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
const Table = styled.div`
  display: grid;
  grid-auto-rows: 20px auto;
  height: 90%;
  gap: 10px;
  width: 95%;
  max-width: 100%;
  @media (min-width: 1800px) {
    width: 95%;
  }
`;
const TableHead = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr 1fr 1fr 100px;
  & p {
    padding-left: 13px;
  }
`;
const TableItem = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr 1fr 1fr 100px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.1) 99.8%
  );
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15),
    inset 0px 0px 3px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  & p {
    padding-top: 15px;
    padding-left: 17px;
  }
  & p:nth-child(3) {
    padding-left: 20px;
  }
  & img {
    margin-top: 5px;
    width: 30px;
    height: 30px;
  }
`;
const RestocksContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  margin-bottom: 20px;
  color: white;
  gap: 10px;
  flex: 1;
`;
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-right: 50px;
  gap: 10px;
`;
const StartAll = styled.button`
  flex: 1;
  background: linear-gradient(180deg, #00da0d 0%, #00b20b 100%);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.35);
  border-radius: 10px;
  border: none;
  color: white;
  font-weight: 700;
  padding: 15px 0;
`;
const EditAll = styled.button`
  flex: 1;
  background: linear-gradient(180deg, #626bff 1.55%, #424dff 96.94%);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.35);
  border-radius: 10px;
  font-weight: 700;
  border: none;
  padding: 15px 0;
  color: white;
`;
const DeleteAll = styled.button`
  flex: 1;
  background: linear-gradient(180deg, #ff5665 1.55%, #e23342 96.94%);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.35);
  font-weight: 700;
  border-radius: 10px;
  border: none;
  padding: 15px 0;
  color: white;
`;
const Restocks = () => {
  const restocksArray = Array(30).fill("1");
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const deleteAll = () => {
    toast("Deleting all", { icon: "❌" });
  };
  const startAll = () => {
    toast.success("Starting all");
  };
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
            Restocks
          </h3>
          <span style={{ color: "rgba(255,255,255,0.5)" }}>{time}</span>
        </div>
        <div
          style={{
            marginLeft: "auto",
            marginRight: 30,
            display: "flex",
            gap: "10px",
          }}
        >
          <RightPlus>
            <WhitePlus></WhitePlus>
          </RightPlus>
          <RightDots>
            <Dots></Dots>
          </RightDots>
        </div>
      </Header>
      <RestocksContainer>
        <Table>
          <TableHead>
            <p>Link</p>
            <p>Size</p>
            <p>Profile(s)</p>
            <p>Status</p>
            <p></p>
          </TableHead>
          <Table
            style={{
              width: "100%",
              gridAutoRows: "40px",
              overflowY: "auto",
              height: "100%",
            }}
          >
            {restocksArray.map((value, index) => {
              return (
                <TableItem>
                  <div style={{ display: "flex", paddingLeft: 10 }}>
                    <img src="/groupIcons/Amazon.svg" />
                    <p
                      style={{
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        width: 270,
                        overflow: "hidden",
                      }}
                    >
                      https://kith.com/collections/aaaaaaaaaaa
                    </p>
                  </div>
                  <p>US: 10.5</p>

                  <p>4 Profiles Selected</p>

                  <p>Idle</p>
                  <img src="/groupIcons/Sauce.svg" />
                </TableItem>
              );
            })}
          </Table>
        </Table>
        <ButtonsContainer>
          <StartAll onClick={startAll}>Start All</StartAll>
          <EditAll>Edit All</EditAll>
          <DeleteAll onClick={deleteAll}>Delete All</DeleteAll>
        </ButtonsContainer>
      </RestocksContainer>
    </Wrapper>
  );
};

export default Restocks;
