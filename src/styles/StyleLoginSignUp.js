import styled from "styled-components";

export const StyleLoginSignUp = styled.div`
    width: 100%;
    min-height: 675px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        margin-bottom: 24px;

        font-family: 'Saira Stencil One', cursive;
        font-size: 32px;
        color: #FFFFFF;
       
    }
    input{
        width: 326px;
        height: 56px;
        margin-bottom: 13px;

        border-radius: 5px;
        border: none;


        text-indent: 15px;
        font-size: 20px;
        font-family: 'Raleway', sans-serif;
    }
    input::placeholder{
        color: #000000;
    }
    button{
        cursor: pointer;
        width: 326px;
        height: 46px;
        margin-bottom: 36px;

        font-size: 20px;
        font-family: 'Raleway', sans-serif;
        color: #FFFFFF;

        background-color: #A328D6;
        border-radius: 5px;
        border: none;
    }
    p{  
        cursor: pointer;
        font-family: 'Raleway';
        font-size: 15px;
        font-weight: 700;
        color: #FFFFFF;
    }
    `;