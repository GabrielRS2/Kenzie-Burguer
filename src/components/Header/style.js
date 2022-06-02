import styled from "styled-components";

export const Tittle = styled.h1`
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 1.625rem;
    color: #333333;

    span {
        font-size: 1rem;
        color: #EB5757;
    }

    @media (min-width: 768px) {
        margin-left: 3.5vw;
    }
`;

export const InputContainer = styled.div`
    width: 382px;
    max-width: 90%;
    height: 60px;
    padding: 0px 10px 0px 15px;

    font-family: 'Inter', sans-serif;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border: 2px solid #E0E0E0;
    border-radius: 8px;
    background: #FFFFFF;

    &:hover {
        outline: 2px solid #333333;
    }

    input {
        border: none;
        
        color: #E0E0E0;
        
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        
        &:focus {
            outline: none;
        }
    }

    @media (min-width:768px) {
        width: 353px;
        margin-right: 2.5vw;
    }
`;