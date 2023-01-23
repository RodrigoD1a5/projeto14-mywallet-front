import styled from "styled-components";
import { StyledButton } from "../styles/StyledButton";
import { StyledForm } from "../styles/StyledForm";
import { StyledInput } from "../styles/StyledInput";

export default function NewRecord({ type }) {

    return (
        <StyleNewRecord>
            <h1>{type === "collection" ? "Nova Entrada" : "Nova Saída"} </h1>
            <StyledForm>
                <StyledInput placeholder="Valor" />
                <StyledInput placeholder="Descrição" />
                <StyledButton>{type === "collection" ? "Salvar entrada" : "Salvar saída"} </StyledButton>
            </StyledForm>

        </StyleNewRecord>
    );
}

const StyleNewRecord = styled.div`
    width: 100%;
    min-height: 675px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 25px 20px;
    h1{
        margin-bottom: 40px;
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 26px;
        color: #FFFFFF;
       
    };`;
