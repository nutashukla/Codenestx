import { useEffect, useState } from "react"
import decode from "./Timeout"
import Postheader from "./Postheader"
import authdata from "./authservice"
import { useNavigate } from "react-router-dom"

function Adminproducts() {
    const navigate = useNavigate()
    useEffect(() => {
        Postheader.postedData().then((response) => {
        },
            (error) => {
                console.log(error.response)
                authdata.logout()
                navigate('/home')
                window.location.reload()
            })
    }, [])
    const [alldataa, setAlldataa] = useState("")
    useEffect(() => {
        decode.getUser().then((result) => {
            decode.Getadmin(result.email).then((response) => {
                setAlldataa(response.data)
            })
        })
    }, [])
    return (<>
        <h1>
            this is admin product page
            <br />

        </h1>
        {alldataa && alldataa.map((element, index) => <div key={index}>
            <div className="card" style={{ border: '2px solid black' }}>
                <div className="card-body">
                    <h5 className="card-title">{element.pname}</h5>
                    <p className="card-text">{element.pdis}</p>
                    <p className="card-text">&#8377; {element.price}</p>
                    <p href="#" className="btn btn-primary">{element.category}</p>
                </div>
            </div>
        </div>)}
    </>)
}
export default Adminproducts