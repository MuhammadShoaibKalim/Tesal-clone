import React from 'react';
import styled from 'styled-components';

const Section = ({ title, description, backgroundImg, leftBtnText, rightBtnText }) => {
  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <ButtonGroup>
        {leftBtnText && <LeftButton>{leftBtnText}</LeftButton>}
        {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
      </ButtonGroup>
      <DownArrow src="/images/down-arrow.svg" />
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${({ bgImage }) => `url("/images/${bgImage}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  background-color: rgba(23, 26, 32, 0.8);
  color: white;
  height: 40px;
  width: 256px;
  border-radius: 100px;
  border: none;
  cursor: pointer;
  margin: 8px;
  font-size: 12px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.85;
  transition: opacity 0.3s ease, transform 0.3s ease;
margin-top:400px;
  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;

const LeftButton = styled(Button)`
  background-color: rgba(23, 26, 32, 0.8);
`;

const RightButton = styled(Button)`
  background-color: rgba(244, 244, 244, 0.65);
  color: black;
`;

const DownArrow = styled.img`
  margin-top: 10px;
  height: 40px;
  overflow-x: hidden;
  animation: bounce 1.5s infinite;
`;
