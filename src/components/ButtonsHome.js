import { AddCircleOutline, RemoveCircleOutline } from "react-ionicons";
import styled from "styled-components";

export default function ButtonsHome({ type }) {
    if (type === "Add") {
        return (
            <StyleButtonsHome>
                <AddCircleOutline
                    color={'#ffffff'}
                    title={AddCircleOutline}
                    height="22px"
                    width="22px"
                />
                <p>Nova Entrada</p>
            </StyleButtonsHome>
        );
    }
    else {
        return (
            <StyleButtonsHome>
                <RemoveCircleOutline
                    color={'#ffffff'}
                    title={RemoveCircleOutline}
                    height="22px"
                    width="22px"
                />
                <p>Nova Saída</p>
            </StyleButtonsHome>
        );
    }
}

const StyleButtonsHome = styled.button`
    width: 155px;
    height: 114px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 9px;
    
    background-color: #A328D6;
    border: none;
    border-radius: 5px;

    cursor: pointer;
    p{  
        width : 40px ;
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 17px;
        color: #FFFFFF;
    }
    `;