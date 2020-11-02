import axios from "axios";


const API_URL = "http://localhost:8081/api/";

const getAllRecipes = () => {
    return axios.get(API_URL);
};

const getSingleRecipe = (id) => {
    return axios.get(API_URL + id);
};


export default {
    getAllRecipes,
    getSingleRecipe,
};