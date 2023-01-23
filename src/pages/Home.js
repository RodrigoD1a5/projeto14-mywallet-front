import { Link } from "react-router-dom";
import styled from "styled-components";
import ButtonsHome from "../components/ButtonsHome";
import HomeBalance from "../components/HomeBalance";
import HomeHeader from "../components/HomeHeader";
import HomeRecords from "../components/HomeRecords";

export default function Home() {
    const message = "Não há registros deentrada ou saída";
    const records = [
        { date: "30/11", text: "Almoço mãe", value: "39.90", type: "expense" },
        { date: "30/11", text: "Almoço mãe", value: "39.90", type: "expense" },
        { date: "30/11", text: "Almoço mãe", value: "39.90", type: "expense" },
        { date: "30/11", text: "Almoço mãe", value: "39.90", type: "expense" },
        { date: "30/11", text: "Almoço mãe", value: "39.90", type: "expense" },
        { date: "30/11", text: "Almoço mãe", value: "39.90", type: "collection" },
        { date: "30/11", text: "Almoço mãe", value: "39.90", type: "collection" },
        { date: "30/11", text: "Almoço mãe", value: "39.90", type: "collection" }
    ];
    return (
        <HomeContainer>
            <HomeHeader />
            <StyledHomeRecords records={records}>
                <div className="records">
                    {(!records) ?
                        <HomeRecords message={message} />
                        :
                        records.map((r) => <HomeRecords date={r.date} text={r.text} value={r.value} type={r.type} />)
                    }
                </div>

                {records ? <HomeBalance records={records} /> : ""}
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
    justify-content: ${props => props.records ? "space-between" : "center"};
    align-items: center;  
    .records{
        width: 100%;
        max-height: 420px;
        gap: 10px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }  
`;