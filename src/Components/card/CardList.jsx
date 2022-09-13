import React from "react";
import styled from "styled-components";

const StyledCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 90px 30px;
`;
const CardList = ({ children }) => {
  return <StyledCardList>{children}</StyledCardList>;
};

export default CardList;
