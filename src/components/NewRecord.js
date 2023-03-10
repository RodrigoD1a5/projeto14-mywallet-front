import { useContext, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../contexts/UserContext";
import { StyledButton } from "../styles/StyledButton";
import { StyledForm } from "../styles/StyledForm";
import { StyledInput } from "../styles/StyledInput";
import apiRecords from "../services/apiRecords";
import { useNavigate } from "react-router-dom";


export default function NewRecord({ type }) {
    const { user } = useContext(UserContext);
    const [form, setForm] = useState({ type, value: "", text: "" });
    const navigate = useNavigate();

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleNewRecords(e) {
        e.preventDefault();

        apiRecords.newRecord(form, user.token)
            .then((response) => {
                alert(response.data);
                navigate("/home");
            })
            .catch((error) => {
                alert(error.response.data);
            });

    }
    return (
        <StyleNewRecord>
            <h1>{type === "collection" ? "Nova Entrada" : "Nova Saída"} </h1>
            <StyledForm onSubmit={handleNewRecords}>
                <StyledInput
                    name="value"
                    type="number"
                    required
                    value={form.value}
                    onChange={handleForm}
                    placeholder="Valor" />
                <StyledInput
                    name="text"
                    type="text"
                    required
                    value={form.text}
                    onChange={handleForm}
                    placeholder="Descrição" />
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
