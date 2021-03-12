import React, { useState } from "react";
import styled from "styled-components";
import {
  TrashCan,
  Plus,
  Mastercard,
  VISA,
  WhitePlus,
  Dots,
  Eye,
  Cross,
} from "../components/Icons";
import SelectedCard from "../components/SelectedCard";
import Modal from "react-modal";
import { Input, Save, WhichModal } from "../components/shared";
import Slider from "../components/Slider";
import toast, { Toaster } from "react-hot-toast";
import { useDrag } from "react-dnd";
import ProfileCards from "../components/ProfileCards";
import Profile from "../components/Profile";

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
    cardName: "sanol",
    cardNumber: "1234 5678 9012 1234",
    cvv: "123",
    expiration: "01/23",
    type: "VISA",
  },
  {
    cardName: "nanol",

    cardNumber: "1234 5678 9012 1234",
    cvv: "123",
    expiration: "01/23",
    type: "Mastercard",
  },
  {
    cardName: "ganol",

    cardNumber: "1234 5678 9012 1234",
    cvv: "123",
    expiration: "01/23",
    type: "Mastercard",
  },
  {
    cardName: "lanol",

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
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  & div {
    display: flex;
    gap: 15px;
    flex-direction: row;
    & section {
      flex: 1;
      & p {
        margin-bottom: 5px;
        color: #fff;
      }
    }
    & button {
      color: white;
      font-weight: 600;
    }
  }
`;
const ModalNav = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  flex: 1;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const ModalNavButton = styled.div`
  background: transparent;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 700;
  flex: 1;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  height: 100%;
  &.active {
    background: linear-gradient(180deg, #fc7818 1.55%, #fc5818 96.94%);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.35);
    border-radius: 15px;
    color: #fff;
  }
`;
const Profiles = () => {
  const accountsExample: any[] = Array(30).fill("123");

  const [modalIsOpen, setIsOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [modalName, setModalName] = useState("General");
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const save = () => {
    if (isSaving) {
      return;
    }
    setIsSaving(true);
    toast((t) => {
      return (
        <span style={{ color: "white" }}>
          Saved profile!
          <button
            onClick={() => toast.dismiss(t.id)}
            style={{
              border: "none",
              background: "linear-gradient(180deg, #FF496F 0%, #DA002D 100%)",
              color: "white",
              padding: 10,
              borderRadius: 10,
              marginLeft: 10,
            }}
          >
            Dismiss
          </button>
        </span>
      );
    });
    setIsOpen(false);
    setTimeout(() => {
      setIsSaving(false);
    }, 500);
  };
  const onDrop = (item: any) => {};
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        closeTimeoutMS={500}
        style={{
          content: {
            background: "#232539",
            height: "540px",
            width: "600px",
            top: "35%",
            left: "50%",
            marginLeft: "-15%",
            marginTop: "-7%",
            border: "none",
            borderRadius: 20,
          },
          overlay: {
            background: `linear-gradient(
              180deg,
              rgba(11, 14, 55, 0.75) 0%,
              rgba(8, 10, 46, 0.75) 98.74%
            )`,
          },
        }}
      >
        <ModalContent>
          <div>
            <h1 style={{ color: "#fff" }}>New Profile</h1>
            <button
              style={{
                marginLeft: "auto",
                background: "linear-gradient(180deg, #FF496F 0%, #DA002D 100%)",
                border: "none",
                borderRadius: 10,
                padding: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={closeModal}
            >
              <Cross />
            </button>
          </div>
          <div>
            <ModalNav>
              <ModalNavButton
                className={modalName === "General" ? "active" : ""}
                onClick={() => {
                  setModalName("General");
                }}
              >
                General
              </ModalNavButton>
              <ModalNavButton
                className={modalName === "Billing" ? "active" : ""}
                onClick={() => {
                  setModalName("Billing");
                }}
              >
                Billing
              </ModalNavButton>
              <ModalNavButton
                className={modalName === "Shipping" ? "active" : ""}
                onClick={() => {
                  setModalName("Shipping");
                }}
              >
                Shipping
              </ModalNavButton>
              <ModalNavButton
                className={modalName === "Payment" ? "active" : ""}
                onClick={() => {
                  setModalName("Payment");
                }}
              >
                Payment
              </ModalNavButton>
            </ModalNav>
          </div>
          <WhichModal
            modalName={modalName}
            setModalName={setModalName}
            save={save}
          ></WhichModal>
        </ModalContent>
      </Modal>
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
          <RightPlus onClick={openModal}>
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
                <Profile key={index} item={item} onDrop={onDrop}></Profile>
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
                <ProfileCards
                  value={value}
                  type={"profiles"}
                  name={index}
                  key={index}
                  blur={true}
                ></ProfileCards>
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
                <ProfileCards
                  value={value}
                  type={""}
                  key={index}
                  style={{ opacity: 0.4 }}
                  blur={false}
                ></ProfileCards>
              );
            })}
          </div>
        </Cards>
      </Container>
    </Wrapper>
  );
};

export default Profiles;
