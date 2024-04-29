import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Authdata from "./authservice"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errror, setErrror] = useState("")

    const navigate = useNavigate()

    useEffect(() => {
        if (Authdata.getuserdata()) {
            navigate('/home')
        }
    }, [])

    const handlelogin = async (e) => {
        e.preventDefault();
        try {
            await Authdata.login(email, password)
                .then((response) => {
                    if (response.message) {
                        setErrror(response.message)
                    }
                    if (!response.message)
                        {  navigate('/home')
                    window.location.reload()
                    // console.log(response.accessToken)
                }
                },
                    (error) => {
                        console.log(error);
                    }
                )
        }
        catch (error) {
            console.log(error);
        }
    }
    return <>
        <form onSubmit={handlelogin}>
            <input type="email"
                value={email}
                placeholder="email"
                onChange={(e) => {
                    setEmail(e.target.value)
                }} />
            <input type="password"
                value={password}
                placeholder="password"
                onChange={(e) => {
                    setPassword(e.target.value)
                }} />
            <button type="submit">Login</button>
            <p>{errror}</p>
        </form>

    </>
}
export default Login