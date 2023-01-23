import styled from "styled-components";

export default function HomeBalance(props) {
    const { records } = props;
    let balance = 0;

    function result(records) {
        const collection = records.filter((r) => r.type === "collection");
        const expense = records.filter((r) => r.type === "expense");

        let somaCollection = 0;
        let somaExpense = 0;

        for (let i = 0; i < collection.length; i++) {
            somaCollection += collection[i].value;
        }

        for (let i = 0; i < expense.length; i++) {
            somaExpense += expense[i].value;
        }
        if (collection.length > 0 && expense.length > 0) {
            return balance = (somaCollection - somaExpense);
        }
        else if (collection.length === 0) {
            return balance = somaExpense;
        }
        else if (expense.length === 0) {
            return balance = somaCollection;
        }

    }
    result(records);

    return (
        <StyledBalance balance={balance}>
            <span>SALDO</span>
            <p>{balance.toLocaleString("pt-br", { minimumFractionDigits: 2 })}</p>
        </StyledBalance>
    );

}

const StyledBalance = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-family: "Raleway";
    font-weight: 700;
    font-size: 17px;
    span{
        font-weight:700;
        color: #000000;
    }
    p{
        font-weight: 400;
        color: ${props => props.balance > 0 ? "#03AC00" : "#C70000"}
    }

`;