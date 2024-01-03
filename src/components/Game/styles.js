import styled from "styled-components";

export const StyledGame = styled.main`

    background-color: transparent;
    border: solid 2px #fb21dd;
    border-radius: 10px;
    height: 350px;
    width: 80%;
    max-width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 50px;
    margin-top: 30px;
    transition: 2s;

    img{
        width: 100%;
        max-width: 450px;
    }

    &:hover{
        background-color: #1C1C1C;
        
    }
    
`