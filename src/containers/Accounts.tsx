import React from "react";
import styled from "styled-components";
import { Dots, Eye, TrashCan, WhitePlus } from "../components/Icons";

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
const RightPlus = styled.div`
  background: linear-gradient(180deg, #00da0d 0%, #00b20b 100%);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.35);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 35px;
  width: 33px;
`;
const RightDots = styled.div`
  background: linear-gradient(180deg, #767eff 1.55%, #4b52d3 96.94%);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.35);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 35px;
  width: 33px;
`;
const AccountsSide = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 270px;
  border-radius: 10px;
  margin-right: 30px;
  gap: 20px;
  overflow-y: auto;
`;
const Site = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.1) 99.8%
  );
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15),
    inset 0px 0px 3px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  min-height: 150px;
  width: 260px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  & img {
    width: 220px;
  }
  &.active {
    background: linear-gradient(180deg, #ff5665 1.55%, #e23342 96.94%);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.35);
    & img {
      filter: brightness(0) invert(1);
    }
  }
`;
const Table = styled.div`
  display: grid;
  grid-auto-rows: 20px auto;
  gap: 10px;
  width: 77%;
  max-width: 100%;
  @media (min-width: 1800px) {
    width: 80%;
  }
`;
const TableHead = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 100px;
  & p {
    padding-left: 13px;
  }
`;
const TableItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 100px;
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
  & svg {
    margin-top: 10px;
  }
`;
const Accounts = () => {
  const accountsExample: any[] = Array(30).fill("123");
  return (
    <Wrapper>
      <Header>
        <h3 style={{ color: "#fff", fontSize: 34, fontWeight: 700 }}>
          Accounts
        </h3>
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
      <Container>
        <AccountsSide>
          <Site>
            <img src="/groupIcons/Walmart.png" />
          </Site>
          <Site className="active">
            <img src="/groupIcons/Gamestop.png" />
          </Site>
          <Site>
            <img src="/groupIcons/Zalando.png" />
          </Site>
          <Site>
            <img src="/groupIcons/Solebox.png" />
          </Site>
          <Site>
            <img src="/groupIcons/Undefeated.png" />
          </Site>
        </AccountsSide>
        <Table>
          <TableHead>
            <p>E-Mail Address</p>
            <p>Password</p>
            <p></p>
          </TableHead>
          <Table
            style={{ width: "100%", gridAutoRows: "40px", overflowY: "auto" }}
          >
            {accountsExample.map((item, index) => {
              return (
                <TableItem key={index}>
                  <p>username@website.com</p>
                  <p>weirjqoifaskdofikfdas</p>
                  <div
                    style={{
                      display: "Flex",
                      gap: 5,
                      alignItems: "center",
                      paddingBottom: 6,
                    }}
                  >
                    <Eye></Eye>
                    <TrashCan></TrashCan>
                  </div>
                </TableItem>
              );
            })}
          </Table>
        </Table>
      </Container>
    </Wrapper>
  );
};

export default Accounts;
