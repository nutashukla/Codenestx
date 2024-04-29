import { useEffect, useState } from "react"
import Authdata from "./authservice"
import { useNavigate } from "react-router-dom"
const Register = () => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [cpassword, setCpassword] = useState("")
    const [errror, setErrror] = useState("")

    const navigate = useNavigate()
    useEffect(() => {
        if (Authdata.getuserdata())
            navigate('/home')
    }, [])

    const handleregister = async (e) => {
        e.preventDefault()

        try {
            await Authdata.register(name, email, password, cpassword)
                .then((response) => {
                    if (response.message) {
                        setErrror(response.message)
                    }
                    if (!response.message)
                    {
                        // console.log(response.accessToken)
                        navigate('/home')
                    window.location.reload()
                    }
                },
                    (error) => {
                        console.log(error);
                    }
                )
        }
        catch (error) {
            console.log(error)
        }
    }
    return <>


        <form onSubmit={handleregister}>
            <input type="text"
                value={name}
                placeholder="name"
                onChange={(e) => setName(e.target.value)} />
            <input type="email"
                value={email}
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)} />
            <input type="password"
                value={password}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)} />
            <input type="password"
                value={cpassword}
                placeholder="confirm password"
                onChange={(e) => setCpassword(e.target.value)} />
            <button type="submit">Login</button>
            <p>{errror}</p>
        </form>
    </>
}

export default Register