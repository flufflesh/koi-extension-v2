import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Cross, Dots, Eye, TrashCan, WhitePlus } from "../components/Icons";
import Modal from "react-modal";
import { ClearFields, Input, Save } from "../components/shared";
import toast, { Toaster } from "react-hot-toast";

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
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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
const Accounts = () => {
  const accountsExample: any[] = Array(30).fill("123");
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const save = () => {
    toast((t) => {
      return (
        <span style={{ color: "white" }}>
          Saved Task!
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
  };
  const [time, setTime] = useState(new Date().toLocaleTimeString());
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
            height: "240px",
            width: "700px",
            top: "50%",
            left: "50%",
            marginLeft: "-15%",
            marginTop: "-5%",
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
            <h1 style={{ color: "#fff" }}>New Gamestop Account</h1>
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
            <section>
              <p>E-Mail Address</p>
              <Input />
            </section>
            <section>
              <p>Password</p>
              <Input />
            </section>
          </div>
          <div>
            <ClearFields>Clear Fields</ClearFields>
            <Save onClick={save}>Save</Save>
          </div>
        </ModalContent>
      </Modal>
      <Header>
        <div>
          <h3 style={{ color: "#fff", fontSize: 34, fontWeight: 700 }}>
            Accounts
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
          <RightPlus onClick={openModal}>
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
