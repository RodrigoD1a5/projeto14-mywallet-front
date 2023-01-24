import axios from "axios";

function createConfig(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
}

function getRecords(token) {
    const promise = axios.get("http://localhost:5000/records", createConfig(token));
    return promise;
}

function newRecord(body, token) {
    const promise = axios.post("http://localhost:5000/records", body, createConfig(token));
    return promise;
}

const apiRecords = { getRecords, newRecord };
export default apiRecords;