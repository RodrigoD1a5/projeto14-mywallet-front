import { useContext } from "react";
import { LogOutOutline } from "react-ionicons";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../contexts/UserContext";

export default function HomeHeader() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    function handleLogOut() {
        localStorage.clear();
        navigate("/");

    };

    return (
        <StyleHomeHeader>
            <h1>Olá, {user.nome}</h1>
            <LogOutOutline
                color={'#ffffff'}
                title={LogOutOutline}
                height="24px"
                width="25px"
                onClick={handleLogOut}
            />
        </StyleHomeHeader>
    );
}

const StyleHomeHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
        font-family: 'Raleway';
        font-size: 26px;
        font-weight: 700;
        color: #FFFFFF
    }
    span {
    cursor: pointer;
    }

`;