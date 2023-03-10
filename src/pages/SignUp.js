import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiAuth from "../services/apiAuth";
import { StyledButton } from "../styles/StyledButton";
import { StyledForm } from "../styles/StyledForm";
import { StyledInput } from "../styles/StyledInput";
import { StyledLink } from "../styles/StyledLink";
import { StyledLoginSignUp } from "../styles/StyledLoginSignUp";

export default function SignUp() {
    const [form, setForm] = useState({ nome: "", email: "", password: "", passwordConfirmation: "" });
    const navigate = useNavigate();
    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSignUp(e) {
        e.preventDefault();
        if (form.password != form.passwordConfirmation) {
            return alert("Senhas diferentes");
        }
        apiAuth.signUp(form)
            .then((response) => {
                alert(response.data);
                navigate("/");
            })
            .catch((error) => {
                alert(error.response.data);
            });
    }

    return (
        <StyledLoginSignUp>
            <h1>MyWallet</h1>
            <StyledForm onSubmit={handleSignUp}>
                <StyledInput
                    name="nome"
                    type="text"
                    required
                    placeholder="Nome"
                    value={form.nome}
                    onChange={handleForm}
                />
                <StyledInput
                    name="email"
                    type="email"
                    required
                    placeholder="E-mail"
                    value={form.email}
                    onChange={handleForm}
                />

                <StyledInput
                    name="password"
                    type="password"
                    required
                    placeholder="Senha"
                    value={form.password}
                    onChange={handleForm}
                />
                <StyledInput
                    name="passwordConfirmation"
                    type="password"
                    required
                    placeholder="Confirme a senha"
                    value={form.passwordConfirmation}
                    onChange={handleForm}
                />
                <StyledButton>Cadastrar</StyledButton>
            </StyledForm>

            <StyledLink to="/">
                J?? tem uma conta? Entre agora!
            </StyledLink>
        </StyledLoginSignUp>
    );
}