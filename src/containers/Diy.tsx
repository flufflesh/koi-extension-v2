import React from "react";
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
const DIYGroups = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  border-radius: 10px;
  margin-right: 30px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
`;
const DIYGroupsHeader = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 12px 9.5px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  & h5 {
    font-size: 15px;
    font-weight: 700;
  }
  & section {
    margin-left: auto;
    display: flex;
    gap: 5px;
  }
  & div {
    background-color: rgba(255, 255, 255, 0.1);
    height: 30px;
    width: 30px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const DIYGroupsMain = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 10px;
`;
const Group = styled.div`
  min-height: 40px;
  width: 230px;
  background-color: rgba(255, 255, 255, 0.1);
  display: inline-flex;
  flex-direction: row;
  align-items: center;

  padding: 0 10px;
  border-radius: 10px;
  opacity: 0.8;
  & p {
    font-size: 16px;
  }
  & svg {
    margin-left: auto;
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
  grid-template-columns: 100px 1fr 1fr 100px;
  & p {
    padding-left: 13px;
  }
`;
const TableItem = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr 1fr 100px;
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
const Diy = () => {
  const diyGroupsExample: any[] = Array(20).fill("DIY Group Example");
  const diyItemsExample = Array(30).fill({ item1: "Fill", item2: 2, item3: 3 });
  return (
    <Wrapper>
      <Header>
        <h3 style={{ color: "#fff", fontSize: 34, fontWeight: 700 }}>DIY</h3>
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
        <DIYGroups>
          <DIYGroupsHeader>
            <h5>DIY Groups</h5>
            <section>
              <div>
                <DownArrow></DownArrow>
              </div>
              <div>
                <UpArrow></UpArrow>
              </div>
              <div>
                <Plus></Plus>
              </div>
            </section>
          </DIYGroupsHeader>
          <DIYGroupsMain>
            {diyGroupsExample.map((item, index) => {
              return (
                <Group key={index}>
                  <p>{item}</p>
                  <TrashCan></TrashCan>
                </Group>
              );
            })}
          </DIYGroupsMain>
        </DIYGroups>
        <Table>
          <TableHead>
            <p>Mode</p>
            <p>Target Website</p>
            <p>DIY Method</p>
            <p></p>
          </TableHead>
          <Table
            style={{ width: "100%", gridAutoRows: "40px", overflowY: "auto" }}
          >
            {diyItemsExample.map((item, index) => {
              return (
                <TableItem>
                  <p>{item.item1}</p>
                  <p>{item.item2}</p>
                  <p>{item.item3}</p>
                  <TrashCan></TrashCan>
                </TableItem>
              );
            })}
          </Table>
        </Table>
      </Container>
    </Wrapper>
  );
};

export default Diy;
