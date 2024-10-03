import styled from "styled-components";

export const ButtonContainer = styled.div`

    background-color: #FAFAFA;
    border: 1px solid #FAFAFA;
    border-radius: 20px;

    height: 40px;
    width: 80%;

    margin: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: #22272e;

    &: hover {
        background-color: #FAFAFA40;
        cursor: pointer;
    }

`