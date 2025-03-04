import React from "react";
import styled from "styled-components";

const AddButton = ({ onClick }) => {
    return (
      <StyledButton type="button" onClick={onClick}>
        <img src="./assets/AddButton.png" alt="Add" style={{ width: '15px', height: '20px' }} />
      </StyledButton>
    );
  };
  
  export default AddButton;

  const StyledButton = styled.button`
  background-color: transparent; 
  border: none; 
  cursor: pointer; 

  transition: transform 0.1s ease;
  &:active {
    transform: scale(0.9);
  }
`;