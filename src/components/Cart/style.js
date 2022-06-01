import styled from "styled-components";

export const CartContainer = styled.div`
  min-width: 300px;
  width: 382px;
  max-width: 95%;
  margin-bottom: 1rem;

  display: flex;
  flex-direction: column;
  background: #F5F5F5;
  border-radius: 0px 0px 5px 5px;

  @media(min-width: 768px) {
    margin-top 32px
  }
`

export const CartTittle = styled.div`
  width: 100%;
  height: 65px;
  left: 16px;
  top: 520px;

  background: #27AE60;
  border-radius: 5px 5px 0px 0px;

  p {
    margin: 22px 0px 0px 21px;

    font-family: 'Inter';
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    
    color: #FFFFFF;
  }
`;

export const EmptyCart = styled.div`
  width: 100%;
  height: 158px;
  background: #F5F5F5;
  border-radius: 0px 0px 5px 5px;

  display: flex;
  flex-direction: column;
  gap: .5rem;
  justify-content: center;
  align-items: center;

  .empty {
    margin-top: 1rem;

    font-family: 'Inter';
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;

    color: #333333;
  }

  .add_itens {
  font-family: 'Inter';
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  color: #828282;
  }
`;

export const CartList = styled.ul`
  height: 285px;
  margin: 20px 10px 21px 18.45px;

  display: flex;
  flex-direction: column;
  gap: 21px;

  overflow: auto;
`;

export const CartItem = styled.div`
  width: 100%;
  height: 80px;

  display: flex;

  font-family: 'Inter';

  .img_container {
    width: 80px;
    height: 80px;
    
    background: #E0E0E0;
    border-radius: 5px;

    display: flex;  
    justify-content: center;
    align-items: center;  
  }

  div img {
    width: 70px;
    height: 70px;
  }

  .text_container {
    width: 100%;

    display: flex;
    justify-content: space-between;
  }

  .info_container {
    height: 100%;
    margin-left: 15px;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .item_name {
    margin-top: .5rem;

    font-weight: 700;
    font-size: 18px;

    color: #333333;
  }

  .item_category {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    
    color: #828282;
  }

  button {
    margin-top: .5rem;
    border: none;
    background: #F5F5F5;

    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    
    color: #BDBDBD;
  }

  .quantity {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    
    color: #828282;
  }
`;

export const Line = styled.div`
  height: 2px;
  width: 90%;
  margin-left: 5%;

  background: #E0E0E0;
`

export const CartInfo = styled.div`
  max-width: 343px;
  margin: 21px 0px 20px 18.45px;

  display: flex;
  flex-direction: column;
  gap: 20px;
  
  font-family: 'Inter';

  .price_container {
    display: flex;
    justify-content: space-between;
  }

  .total {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;

    color: #333333;
  }

  .price {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;

    color: #828282;
  }

  button {
    width: 343px;
    height: 60px;
    left: 18.45px;
    top: 390px;

    color: #828282;
    background: #E0E0E0;
    border: 2px solid #E0E0E0;
    border-radius: 8px;

    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    
  }
`