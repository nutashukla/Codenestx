import Authdata from "./authservice";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import decode from "./Timeout";
function Navbar() {
  const [currentUser, setCurrentUser] = useState(null);
  const [usernamee, setUsernamee] = useState(null);
  useEffect(() => {
    if(decode.getUser())
    decode.getUser().then((result) => {
        // console.log(result.email)
        setUsernamee(result.name)
    })
}, [])
  useEffect(() => {
    const user = Authdata.getuserdata();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    Authdata.logout();
    window.location.reload(); // reload the page after logging out so that it updates state and
  };
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="nvbar">
        <div className="navbar-nav mr-auto " >
          <li>
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>

          {currentUser && (
            <li >
              <Link to={"/private"} className="nav-link">
                Private
              </Link>
            </li>)}
        </div>
        {currentUser ? (
          <div className="navbar-nav ms-auto">
            <li >
              <Link to={"/login"} className="nav-link" onClick={logOut}>
                Logout
              </Link>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ms-auto">
            <li >
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li >
              <Link to={"/register"} className="nav-link">
                Register
              </Link>
            </li>
          </div>
        )}
        {usernamee && (<p>Hi! {usernamee}</p>)}
        
      </div>
    </nav>
  )
}
export default Navbar