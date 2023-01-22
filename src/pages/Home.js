import { Link } from "react-router-dom";
import styled from "styled-components";
import ButtonsHome from "../components/ButtonsHome";
import HomeHeader from "../components/HomeHeader";

export default function Home() {
    return (
        <HomeContainer>
            <HomeHeader />

            <HomeRecords>
                <p>
                    Não há registros de entrada ou saída
                </p>
            </HomeRecords>

            <HomeFooter>
                <Link to="/nova-entrada">
                    <ButtonsHome key={"Add"} type={"Add"} />
                </Link>
                <Link to="/nova-saida">
                    <ButtonsHome key={"Remove"} type={"Remove"} />
                </Link>
            </HomeFooter>
        </HomeContainer>
    );
}

const HomeContainer = styled.div`
    width: 100%;
    min-height: 675px;
    display: flex;
    flex-direction: column;
    padding: 20px 20px;
    justify-content: space-between;
`;
const HomeFooter = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const HomeRecords = styled.div`
    min-width: 326px;
    height: 446px;
    background-color: #FFFFFF;
    border-radius: 5px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        width: 180px;
        font-family: 'Raleway';
        font-weight: 400;
        font-size: 20px;
        text-align: center;
        color: #868686;
    }
`;