import { StyleLoginSignUp } from "../styles/StyleLoginSignUp";

export default function Login() {
    return (
        <StyleLoginSignUp>
            <h1>MyWallet</h1>
            <input placeholder="E-mail" />
            <input placeholder="Senha" />
            <button>Entrar</button>
            <p>Primeira vez? Cadastre-se!</p>
        </StyleLoginSignUp>
    );
}