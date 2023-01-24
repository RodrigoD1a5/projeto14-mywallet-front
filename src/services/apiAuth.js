import axios from "axios";

function login(body) {
    const promise = axios.post("http://localhost:5000/login", body);
    return promise;
}

function signUp(body) {
    const promise = axios.post("http://localhost:5000/sign-up", body);
    return promise;
}

const apiAuth = { login, signUp };
export default apiAuth;