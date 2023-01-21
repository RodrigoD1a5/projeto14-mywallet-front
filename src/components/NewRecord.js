import styled from "styled-components";

export default function NewRecord({ type }) {

    return (
        <StyleNewRecord>
            <h1>{type === "collection" ? "Nova Entrada" : "Nova Saída"} </h1>
            <input placeholder="Valor" />
            <input placeholder="Descrição" />
            <button>{type === "collection" ? "Salvar entrada" : "Salvar saída"} </button>
        </StyleNewRecord>
    );
}

const StyleNewRecord = styled.div`
    width: 100%;
    min-height: 675px;
    display: flex;
    flex-direction: column;
    padding: 25px 20px;
    h1{
        margin-bottom: 40px;
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 26px;
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
`;
