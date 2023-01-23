import styled from "styled-components";

export default function HomeRecords(props) {
    const { date, text, value, type, message } = props;
    if (message) {
        return (
            <StyledTextNoRecords>{props.message}</StyledTextNoRecords>
        );
    }
    return (
        <StyledRecords>
            <div>
                <StyleDate>{date}</StyleDate>
                <StyledText>{text}</StyledText>
            </div>
            <StyleValue type={type}>{value}</StyleValue>
        </StyledRecords>
    );

}


const StyledRecords = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    
    font-family: 'Raleway';
    font-size: 16px;
    font-weight: 400;
    div{
        display: flex;
        gap: 10px;
    }
`;

const StyleDate = styled.p`
    color: #C6C6C6;
`;

const StyledText = styled.p`
    color: #000000;
`;

const StyleValue = styled.p`
    color: ${props => props.type === "collection" ? "#03AC00" : "#C70000"}
`;

const StyledTextNoRecords = styled.p`
    width: 180px;
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    color: #868686;
`;