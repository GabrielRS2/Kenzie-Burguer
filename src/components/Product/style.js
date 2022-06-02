import styled from "styled-components";

export const ListItem = styled.li`
  min-width: 300px;
  height: 346px;

  display: flex;
  flex-direction: column;
  gap: 14px;
  
  font-family: 'Inter', sans-serif;
  
  background: #FFFFFF;  
  border: 2px solid #E0E0E0;
  border-radius: 5px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #F5F5F5;
  }

  div img {
    width: 177px; 
    height: 177px; 
  }

  h3 {
    margin-left: 22px;

    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
  }

  .category {
    margin-left: 22px;

    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    color: #828282;
  }

  .price {
    margin-left: 22px;

    font-weight: 600;
    font-size: 14px;
    line-height: 24px;

    color: #27AE60;
  }

  button {
    margin-left: 20px;
  }
`;