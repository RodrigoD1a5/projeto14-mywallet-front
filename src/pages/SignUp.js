import { StyleLoginSignUp } from "../styles/StyleLoginSignUp";

export default function SignUp() {
    return (
        <StyleLoginSignUp>
            <h1>MyWallet</h1>
            <input placeholder="Nome" />
            <input placeholder="E-mail" />
            <input placeholder="Senha" />
            <input placeholder="Confirme a senha" />
            <button>Cadastrar</button>
            <p>Já tem uma conta? Entre agora!</p>
        </StyleLoginSignUp>
    );
}