import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledButton } from "../styles/StyledButton";
import { StyledForm } from "../styles/StyledForm";
import { StyledInput } from "../styles/StyledInput";
import { StyledLink } from "../styles/StyledLink";
import { StyledLoginSignUp } from "../styles/StyledLoginSignUp";


export default function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleLogin(e) {
        e.preventDefault();
        console.log(form);
        navigate("/home");
    }

    return (
        <StyledLoginSignUp>
            <h1>MyWallet</h1>
            <StyledForm onSubmit={handleLogin}>
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
                <StyledButton type="submit"     >Entrar</StyledButton>
            </StyledForm>

            <StyledLink to="/cadastro">
                Primeira vez? Cadastre-se!
            </StyledLink>

        </StyledLoginSignUp>
    );
}