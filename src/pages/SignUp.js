import { Link } from "react-router-dom";
import { StyledLink, StyledLoginSignUp } from "../styles/StyleLoginSignUp";

export default function SignUp() {
    return (
        <StyledLoginSignUp>
            <h1>MyWallet</h1>
            <input placeholder="Nome" />
            <input placeholder="E-mail" />
            <input placeholder="Senha" />
            <input placeholder="Confirme a senha" />
            <Link to="/">
                <button>Cadastrar</button>
            </Link>
            <StyledLink to="/">
                Já tem uma conta? Entre agora!
            </StyledLink>
        </StyledLoginSignUp>
    );
}