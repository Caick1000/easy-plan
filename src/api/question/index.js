import axios from "axios";

async function createQuestion(question) {
    const config = {
        method: "POST",
        baseURL: `${process.env.REACT_APP_REQUEST_URL}/question`,
        headers: {
            "Content-Type": "application/json"
        },
        data: question
    }
    return await axios.request(config);
};

async function getAllQuestions() {
    const config = {
        baseURL: `${process.env.REACT_APP_REQUEST_URL}/question`,
        headers: {
            "Content-Type": "application/json"
        }
    }
    return await axios.request(config);
};

async function getOneQuestion(id) {
    const config = {
        baseURL: `${process.env.REACT_APP_REQUEST_URL}/question/${id}`,
        headers: {
            "Content-Type": "application/json"
        }
    }
    return await axios.request(config);
};

async function deleteAllQuestions() {
    const config = {
        method: "DELETE",
        baseURL: `${process.env.REACT_APP_REQUEST_URL}/question`,
        headers: {
            "Content-Type": "application/json"
        }
    }
    return await axios.request(config);
};

async function deleteOneQuestion(id) {
    const config = {
        method: "DELETE",
        baseURL: `${process.env.REACT_APP_REQUEST_URL}/question/${id}`,
        headers: {
            "Content-Type": "application/json"
        }
    }
    return await axios.request(config);
};

export {
    createQuestion,
    getAllQuestions,
    getOneQuestion,
    deleteAllQuestions,
    deleteOneQuestion
};