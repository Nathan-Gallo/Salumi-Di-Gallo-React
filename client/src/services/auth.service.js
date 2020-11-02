import axios from "axios";

const API_URL = "http://localhost:8081/api/";

const register = (username , password) => {
    return axios.post(API_URL + "users", {
        username,
        password,
    });
};

const login = (username, password) => {
    return axios
        .post(API_URL + "login", {
            username,
            password,
        })
        .then((response) => {
            if (response.data) {
                sessionStorage.setItem("user", JSON.stringify(response.data.message));
            }

            return response.data;
        });
};

const logout = () => {
    sessionStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(sessionStorage.getItem("user"));
};

export default {
    register,
    login,
    logout,
    getCurrentUser,
};