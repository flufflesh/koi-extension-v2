import React from "react";
import styled from "styled-components";
import {
  TrashCan,
  Plus,
  Mastercard,
  VISA,
  WhitePlus,
  Dots,
  Eye,
} from "../components/Icons";
import SelectedCard from "../components/SelectedCard";

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
const profileGroupsExample = [
  { name: "Profile Group Title", card: "test" },
  { name: "Profile Group Title", card: "test" },
  { name: "Profile Group Title", card: "test" },
  { name: "Profile Group Title", card: "test" },
  { name: "Profile Group Title", card: "test" },
  { name: "Profile Group Title", card: "test" },
  { name: "Profile Group Title", card: "test" },
  { name: "Profile Group Title", card: "test" },
  { name: "Profile Group Title", card: "test" },
  { name: "Profile Group Title", card: "test" },
  { name: "Profile Group Title", card: "test" },
  { name: "Profile Group Title", card: "test" },
  { name: "Profile Group Title", card: "test" },
  { name: "Profile Group Title", card: "test" },
  { name: "Profile Group Title", card: "test" },
  { name: "Profile Group Title", card: "test" },
  { name: "Profile Group Title", card: "test" },
  { name: "Profile Group Title", card: "test" },
  { name: "Profile Group Title", card: "test" },
  { name: "Profile Group Title", card: "test" },
  { name: "Profile Group Title", card: "test" },
  { name: "Profile Group Title", card: "test" },
  { name: "Profile Group Title", card: "test" },
];
const exampleCards = [
  {
    cardNumber: "1234 5678 9012 1234",
    cvv: "123",
    expiration: "01/23",
    type: "VISA",
  },
  {
    cardNumber: "1234 5678 9012 1234",
    cvv: "123",
    expiration: "01/23",
    type: "Mastercard",
  },
  {
    cardNumber: "1234 5678 9012 1234",
    cvv: "123",
    expiration: "01/23",
    type: "Mastercard",
  },
  {
    cardNumber: "1234 5678 9012 1234",
    cvv: "123",
    expiration: "01/23",
    type: "Mastercard",
  },
];
const disabledCards = [
  {
    cardNumber: "1234 5678 9012 1234",
    cvv: "123",
    expiration: "01/23",
    type: "VISA",
  },
  {
    cardNumber: "1234 5678 9012 1234",
    cvv: "123",
    expiration: "01/23",
    type: "Mastercard",
  },
  {
    cardNumber: "1234 5678 9012 1234",
    cvv: "123",
    expiration: "01/23",
    type: "Mastercard",
  },
  {
    cardNumber: "1234 5678 9012 1234",
    cvv: "123",
    expiration: "01/23",
    type: "Mastercard",
  },
];
const ProfileGroups = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  border-radius: 10px;
  margin-right: 30px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
`;
const Cards = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.1) 99.8%
  );
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15),
    inset 0px 0px 3px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  &:last-of-type {
    margin-bottom: 10px;
  }
`;
const CardDetails = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  gap: 20px;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
`;
const ProfileGroupsHeader = styled.div`
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
  & div {
    background-color: rgba(255, 255, 255, 0.1);
    height: 30px;
    width: 30px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
  }
`;
const ProfileGroupsMain = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 10px;
`;
const Profile = styled.div`
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
const Select = styled.select`
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  height: 40px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15),
    inset 0px 0px 3px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  appearance: none;
  color: rgba(255, 255, 255, 0.8);
  padding-left: 10px;
  background-image: url("/arrow.svg");
  background-position: right 10px center;
  border: none;
  min-width: 200px;
  background-repeat: no-repeat;
  font-weight: 600;

  & option {
    background: #2e2f48;
  }
`;
const DotContainer = styled.button`
  border-radius: 100px;
  border: none;
  height: 35px;
  width: 35px;
  padding: 5px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Profiles = () => {
  return (
    <Wrapper>
      <Header>
        <h3 style={{ color: "#fff", fontSize: 34, fontWeight: 700 }}>
          Profiles
        </h3>

        <div
          style={{
            marginLeft: "auto",
            marginRight: 30,
            display: "flex",
            gap: "10px",
          }}
        >
          <Select>
            <option>hi</option>
            <option>test2</option>
          </Select>
          <RightPlus>
            <WhitePlus></WhitePlus>
          </RightPlus>
          <RightDots>
            <Dots></Dots>
          </RightDots>
        </div>
      </Header>

      <Container>
        <ProfileGroups>
          <ProfileGroupsHeader>
            <h5>Profile Groups</h5>
            <div>
              <Plus></Plus>
            </div>
          </ProfileGroupsHeader>
          <ProfileGroupsMain>
            {profileGroupsExample.map((item, index) => {
              return (
                <Profile key={index}>
                  <p>{item.name}</p>
                  <TrashCan></TrashCan>
                </Profile>
              );
            })}
          </ProfileGroupsMain>
        </ProfileGroups>
        <Cards>
          <h4>Enabled Cards</h4>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 20,
              marginTop: 10,
              flexWrap: "wrap",
            }}
          >
            {exampleCards.map((value, index) => {
              return (
                <Card key={index}>
                  <CardDetails style={{ marginTop: 0 }}>
                    {value.type === "VISA" ? <VISA /> : <Mastercard />}
                    <div
                      style={{ marginLeft: "auto", display: "flex", gap: 5 }}
                    >
                      <DotContainer>
                        <Eye></Eye>
                      </DotContainer>
                      <DotContainer>
                        <Dots></Dots>
                      </DotContainer>
                    </div>
                  </CardDetails>
                  <CardDetails>
                    <p
                      style={{
                        fontSize: 20,
                        fontWeight: 700,
                        marginRight: 50,
                        filter: "blur(0.5rem)",
                      }}
                    >
                      {value.cardNumber}
                    </p>
                  </CardDetails>
                  <CardDetails style={{ marginLeft: "auto", fontSize: 14 }}>
                    <div>
                      <p>{value.cvv}</p>
                      <p style={{ fontSize: 10, opacity: 0.6 }}>CVV</p>
                    </div>
                    <div>
                      <p>{value.expiration}</p>
                      <p style={{ fontSize: 10, opacity: 0.6 }}>Expires</p>
                    </div>
                  </CardDetails>
                </Card>
              );
            })}
            <SelectedCard></SelectedCard>
          </div>
          <h4 style={{ marginTop: 10 }}>Disabled Cards</h4>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 20,
              marginTop: 10,
              flexWrap: "wrap",
            }}
          >
            {disabledCards.map((value, index) => {
              return (
                <Card key={index} style={{ opacity: 0.4 }}>
                  <CardDetails style={{ marginTop: 0 }}>
                    {value.type === "VISA" ? <VISA /> : <Mastercard />}
                    <div
                      style={{ marginLeft: "auto", display: "flex", gap: 5 }}
                    >
                      <DotContainer>
                        <Eye></Eye>
                      </DotContainer>
                      <DotContainer>
                        <Dots></Dots>
                      </DotContainer>
                    </div>
                  </CardDetails>
                  <CardDetails>
                    <p
                      style={{ fontSize: 20, fontWeight: 700, marginRight: 50 }}
                    >
                      {value.cardNumber}
                    </p>
                  </CardDetails>
                  <CardDetails style={{ marginLeft: "auto", fontSize: 14 }}>
                    <div>
                      <p>{value.cvv}</p>
                      <p style={{ fontSize: 10, opacity: 0.6 }}>CVV</p>
                    </div>
                    <div>
                      <p>{value.expiration}</p>
                      <p style={{ fontSize: 10, opacity: 0.6 }}>Expires</p>
                    </div>
                  </CardDetails>
                </Card>
              );
            })}
          </div>
        </Cards>
      </Container>
    </Wrapper>
  );
};

export default Profiles;
