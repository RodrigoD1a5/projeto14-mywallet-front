import { Link } from "react-router-dom";
import { StyledLink, StyledLoginSignUp } from "../styles/StyleLoginSignUp";

export default function Login() {
    return (
        <StyledLoginSignUp>
            <h1>MyWallet</h1>
            <input placeholder="E-mail" />
            <input placeholder="Senha" />
            <Link to="/home">
                <button>Entrar</button>
            </Link>
            <StyledLink to="/cadastro">
                Primeira vez? Cadastre-se!
            </StyledLink>

        </StyledLoginSignUp>
    );
}