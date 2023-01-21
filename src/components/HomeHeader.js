import { LogOutOutline } from "react-ionicons";
import styled from "styled-components";

export default function HomeHeader() {
    return (
        <StyleHomeHeader>
            <h1>Olá, Fulano</h1>
            <LogOutOutline
                color={'#ffffff'}
                title={LogOutOutline}
                height="24px"
                width="25px"
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
`;