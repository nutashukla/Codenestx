
import axios from "axios";
const sevurl = "http://localhost:5000/Aauth"

const register = (name, email, password, cpassword) => {
    return axios.post(sevurl + "/register",
        { name, email, password, cpassword })
        .then((response) => {
            if (response.data.details[0])
                return response.data.details[0]
            if (response.data.message)
                return response.data
            if (response.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data))
                console.log(response)
                return response.data
            }
        })
}
const login = (email, password) => {
    return axios.post(sevurl + "/login",
        { email, password })
        .then((response) => {
            if (response.data.details)
                return response.data.details[0]
            if (response.data.message)
                return response.data
            if (response.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data))
            }
            // console.log(response)
            return response.data
        })
}
// removing the token data
const logout = () => {
    localStorage.removeItem('user')
}
// getting the token data
const getuserdata = () => {
    return JSON.parse(localStorage.getItem('user'))
}
    

// exporting data
const authdata = { register, login, logout, getuserdata }
export default authdata