
import { useNavigate } from "react-router-dom"
import Authdata from "./authservice"
import jwtDecode from "jwt-decode"
import axios from "axios"

function Decoder(){
    const navigate=useNavigate()
    
    const user=Authdata.getuserdata()
    if(user){
        try{
    const accessTokens=user.accessToken
    const decoded=jwtDecode(accessTokens)
    const exp=decoded.exp*1000  
    const nowdate=Date.now()
    // console.log("Expiration time",new Date(exp))
    // console.log("Present date",new Date(nowdate))
    if(nowdate>exp)
    {
        Authdata.logout()
        navigate('/home')
        window.location.reload()
    }}catch(error){
        console.log(error.message)
    }
}
    
   

}
function getUser(){
    // const navigate=useNavigate()
    const userurl="http://localhost:5000/Aauth"
    const user=Authdata.getuserdata()
    if(user){
        try{
        const accessTokens=user.accessToken
        const decoded=jwtDecode(accessTokens)
        const aud=decoded.aud
        // console.log(aud)
        return axios.post(userurl+'/username',{aud})
        .then((response)=>{
            // console.log(response.data)
            return response.data
            
        })
        }
        catch(error){
            console.log(error.message)
        }

    }    
    

}
const Getadmin=(email)=>{
    const userurl="http://localhost:5000/Aauth"
    // console.log("we have arrived to this section now")
    return axios.post(userurl+'/adminmdata',{email})
    .then((response)=>{
        // console.log(response)
        return response
        
    })
}

const postPlist=async(category,email,pname,pdis,price)=>{
    const userurl="http://localhost:5000/Aauth"
    await axios.post(userurl + '/adminmodels', { category, email, pname, pdis, price })
            .then((response) => {

                console.log(response)
                return(response)
            })
}

const decode={Decoder,getUser,Getadmin,postPlist}
export default decode