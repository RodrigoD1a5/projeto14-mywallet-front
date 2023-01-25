import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ButtonsHome from "../components/ButtonsHome";
import HomeBalance from "../components/HomeBalance";
import HomeHeader from "../components/HomeHeader";
import HomeRecords from "../components/HomeRecords";
import { UserContext } from "../contexts/UserContext";
import apiRecords from "../services/apiRecords";

export default function Home() {
    const message = "Não há registros de entrada ou saída";
    const { user } = useContext(UserContext);
    const [records, setRecords] = useState(undefined);

    const isThereRecords = (records?.length > 0);


    useEffect(getTransations, []);

    function getTransations() {
        apiRecords.getRecords(user.token)
            .then((response) => {
                setRecords(response.data);
            })
            .catch((error) => {
                if (!user.token) {
                    alert("Faça Login");
                }
                else {
                    alert(error.response.data);
                };

            });
    }
    return (
        <HomeContainer>
            <HomeHeader />
            <StyledHomeRecords isThereRecords={isThereRecords}>
                {(!isThereRecords) ?
                    <HomeRecords message={message} />
                    :
                    <div className="records">
                        {records?.map((r, idx) => <HomeRecords key={idx} date={r.date} text={r.text} value={r.value} type={r.type} />)}
                    </div>
                }

                {isThereRecords ? <HomeBalance records={records} /> : ""}
            </StyledHomeRecords>
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

const StyledHomeRecords = styled.div`
    min-width: 326px;
    height: 446px;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 15px;
    
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.isThereRecords ? "space-between" : "center"};
    align-items: center;  
    .records{
        width: 100%;
        height: 350px;
        overflow-y: scroll;
        gap: 10px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }  
`;