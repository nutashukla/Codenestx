import axios from "axios";
import Setheader from "./Setheader";

const sevurl = "http://localhost:5000/Aauth"

const postedData = () => {
    // console.log("inside post header")
    return axios.get(sevurl + "/private", { headers: Setheader() });

}
const Postheader = { postedData }
export default Postheader