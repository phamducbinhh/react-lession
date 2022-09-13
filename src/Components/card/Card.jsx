import React from "react";
import styled from "styled-components";

/**
 * const StyledCard = styled.tag(h1,h2,div,span...)
 * CSS-IN-JS
 */

const StyledCard = styled.div`
  position: relative;
  width: 400px;
  margin: 100px auto;
`;

const CardImage = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 8px;
`;

const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

const CardContent = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: white;
  z-index: 10;
  border-radius: 20px;
  padding: 20px;
  bottom: -75px;
  width: 80%;
  border: 1px solid #ccc;
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const CardUser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 12px;
`;

const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100rem;
  object-fit: cover;
  flex-shrink: 0;
`;

const CardFooter = styled.div`
  color: #333;
  text-transform: uppercase;
`;
const Card = () => {
  return (
    <StyledCard>
      <CardImage>
        <CardImg
          src="https://images.unsplash.com/photo-1598651382172-84192b8f2869?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
      </CardImage>
      <CardContent>
        <CardTop>
          <CardUser>
            <UserAvatar
              src="https://images.unsplash.com/photo-1592318343309-853bcb2213ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
            />
            <span>binh@123</span>
          </CardUser>
          <div>256</div>
        </CardTop>
        <CardFooter>
          <h3>sexy girl 18+</h3>
        </CardFooter>
      </CardContent>
    </StyledCard>
  );
};

export default Card;
