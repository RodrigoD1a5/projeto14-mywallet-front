import axios from "axios";

function createConfig(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
}

function getRecords(token) {
    const promise = axios.get(`${process.env.REACT_APP_API_URL}/entries`, createConfig(token));
    return promise;
}

function newRecord(body, token) {
    const promise = axios.post(`${process.env.REACT_APP_API_URL}/new-entry`, body, createConfig(token));
    return promise;
}