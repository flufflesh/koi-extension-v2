import React from "react";
import { useDrop } from "react-dnd";
import styled from "styled-components";
import { TrashCan } from "./Icons";

const ProfileItem = styled.div`
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
const Profile = (props: any) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: "profiles",
    drop: props.onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const isActive = isOver && canDrop;
  let border = "none";
  if (isActive) {
    border = "1px solid red";
  }
  return (
    <ProfileItem style={{ border: border }} ref={drop}>
      <p>{props.item.name}</p>
      <TrashCan></TrashCan>
    </ProfileItem>
  );
};
export default Profile;
