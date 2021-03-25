import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TrashCan, WhitePlus, Dots, Play, Cross } from "../components/Icons";
import Modal from "react-modal";
import {
  ClearFields,
  Input,
  Save,
  Select,
  Wrapper,
  Header,
} from "../components/shared";
import toast, { Toaster } from "react-hot-toast";

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
  font-weight: 700;
  color: white;
  padding: 15px 0;
`;
const EditAll = styled.button`
  flex: 1;
  background: linear-gradient(180deg, #626bff 1.55%, #424dff 96.94%);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.35);
  font-weight: 700;
  border-radius: 10px;
  border: none;
  padding: 15px 0;
  color: white;
`;
const DeleteAll = styled.button`
  flex: 1;
  background: linear-gradient(180deg, #ff5665 1.55%, #e23342 96.94%);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.35);
  border-radius: 10px;
  font-weight: 700;
  border: none;
  padding: 15px 0;
  color: white;
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
const PasteIn = styled.textarea`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.1) 99.8%
  );
  border: 1px dashed rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15),
    inset 0px 0px 3px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  width: 100%;
  color: white;
  height: 100px;
  resize: none;
  padding: 10px;
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;
const NikeSNKRS = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const deleteAll = () => {
    toast("Deleting all", { icon: "❌" });
  };
  const startAll = () => {
    toast.success("Starting all");
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
  const nikeArray = Array(30).fill("1");
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
            height: "530px",
            width: "700px",
            top: "50%",
            left: "50%",
            marginLeft: "-15%",
            marginTop: "-15%",
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
            <h1 style={{ color: "#fff" }}>New Nike Task</h1>
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
              <p>Link</p>
              <Input></Input>
            </section>
            <section>
              <p>Region</p>
              <Select>
                <option value="US">United States</option>
              </Select>
            </section>
          </div>
          <div>
            <section>
              <p>Accounts</p>
              <PasteIn placeholder="Paste in using email:password format."></PasteIn>
            </section>
          </div>
          <div>
            <section>
              <p>Proxies</p>
              <PasteIn placeholder="Paste in using ip:port:username:password format."></PasteIn>
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
            Nike SNKRS
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
      <RestocksContainer>
        <Table>
          <TableHead>
            <p>Link</p>
            <p>Region</p>
            <p>Drop Time</p>
            <p>Account</p>
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
            {nikeArray.map((value, index) => {
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
                      https://supreme.com/1/aaaaaaaaaaa
                    </p>
                  </div>
                  <p>United States</p>

                  <p>04-04-21 11:00AM</p>

                  <p>-</p>
                  <div
                    style={{
                      display: "flex",
                      gap: 5,
                      alignItems: "center",
                    }}
                  >
                    <Play></Play>
                    <TrashCan></TrashCan>
                  </div>
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

export default NikeSNKRS;
