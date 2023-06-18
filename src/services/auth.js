import axios from "axios";
const loginUrl = '/api/login'
const usersUrl = '/api/users'

// const baseUrl = 'http://localhost:3003/'

const login = async credentials => {
    try {
        const response = await axios.post(loginUrl, credentials)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

const signup = async credentials => {
    try {
        const response = await axios.post(usersUrl, credentials)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export default { login, signup }