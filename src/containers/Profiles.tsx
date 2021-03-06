import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;
const profileGroupsExample = [
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
];
const ProfileGroups = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100%;
  padding-right: 50px;
`;
const Cards = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100%;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
`;
const CardDetails = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
`;
const Profiles = () => {
  return (
    <Wrapper>
      <Header>
        <h3>Profiles</h3>
        <select style={{ marginLeft: "auto" }}></select>
      </Header>

      <Container>
        <ProfileGroups>
          <h5>Profile Groups</h5>
          <div>
            {profileGroupsExample.map((item, index) => {
              return <p key={index}>{item.name}</p>;
            })}
          </div>
        </ProfileGroups>
        <Cards>
          <h4>Enabled Cards</h4>
          <div>
            {exampleCards.map((value, index) => {
              return (
                <Card key={index}>
                  <p>{value.type}</p>
                  <CardDetails>
                    <p>{value.cardNumber}</p>
                  </CardDetails>
                  <CardDetails>
                    <p>{value.cvv}</p>
                    <p>{value.expiration}</p>
                  </CardDetails>
                </Card>
              );
            })}
          </div>
          <h4>Disabled Cards</h4>
        </Cards>
      </Container>
    </Wrapper>
  );
};

export default Profiles;
