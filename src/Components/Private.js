import { useEffect, useState } from "react";
import Authdata from "./authservice";
import Postheader from "./Postheader";
import { Link, useNavigate } from "react-router-dom";
import decode from "./Timeout";
import axios from "axios";
import Adminproducts from "./Adminproducts";


const Private = () => {
    const [pdfrsdisplay, setPdfrsdisplay] = useState("none")
    const [frmbtn, setFrmbtn] = useState("block")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [pname, setPname] = useState("")
    const [pdis, setPdis] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        Postheader.postedData().then((response) => {
            // console.log(response)
        },
            (error) => {
                console.log(error.response)
                Authdata.logout()
                navigate('/home')
                window.location.reload()
            })
    }, [])

    const handleonsubmit = async (e) => {
        e.preventDefault()
        decode.getUser().then((result) => {
            // console.log(result.email)
        const email=result.email
        decode.postPlist(category,email,pname,pdis,price).then((response)=>{
        // console.log(response)
       })})
    }
    // adding button features
    const pdfrisplay = () => {
        setFrmbtn('none')
        if (pdfrsdisplay === "none") {
            setPdfrsdisplay('block')
        }
        else {
            setPdfrsdisplay('none')
        }
    }
    // timeout for the logout 
    decode.Decoder()
    return (<>
        <br />
        This is the private page which is admin pannel.
        <div>
            <button style={{ display: `${frmbtn}` }} onClick={pdfrisplay}>Add a product</button>
            <form style={{ display: `${pdfrsdisplay}` }} action="" onSubmit={handleonsubmit}>
                Category:<select value={category} onChange={(e) => { setCategory(e.target.value) }} name="Category" id="abcd">
                    <option value="Category1">Category1</option>
                    <option value="Category2">Category2</option>
                    <option value="Category3">Category3</option>
                    <option value="Category4">Category4</option>
                    <option value="Category5">Category5</option>
                    <option value="Category6">Category6</option>
                    <option value="Category7">Category7</option>
                </select>
                <input type="text"
                    placeholder="product name"
                    value={pname}
                    onChange={(e) => { setPname(e.target.value) }}
                />
                <input type="text"
                    placeholder="product description"
                    value={pdis}
                    onChange={(e) => { setPdis(e.target.value) }}
                />
                <input type="text"
                    placeholder="product price"
                    value={price}
                    onChange={(e) => { setPrice(e.target.value) }}
                />
                <button type="submit">Submit </button>
            </form>

            <Link to={'/adminproduct'}>See my products</Link>
        </div>
    </>)
}
export default Private