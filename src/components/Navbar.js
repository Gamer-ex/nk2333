import { Link } from "react-router-dom"
import { useAppData } from "../AppContext/AppContext"
import { signInWithPopup } from 'firebase/auth'
import { auth,provider } from '../Firebase/config'
import { useNavigate } from "react-router-dom"
import '../Styles_temp/nav.css'
import { useState } from "react"

export const Navbar=()=>{
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuClick = () => {
      setShowMenu(!showMenu);
    };
    const navigate=useNavigate()
    const [{user},dispatch]=useAppData()

    const googleLogin=async()=>{
        try{
            const res=await signInWithPopup(auth,provider)

            dispatch({
                type:'SET_USER',
                user:res.user
            })

            navigate("/dashboard")
        }

        catch(e){
            console.log(`Google sign in failed: ${e}`)
            alert("Oops server down please try again after some time!")
        }
    }

    return(
        <nav >
        <div className="logo"><img src="https://firebasestorage.googleapis.com/v0/b/nakshatra2k23.appspot.com/o/n.png?alt=media&token=f9c6b41d-2a00-437c-8dfd-4d489e481402" alt="nklogo"></img></div>
        <div className={`menu-container ${showMenu ? "show" : ""}`}>
          <ul id="links">
          <li ><Link  to="/" className="list">Home</Link></li>
          <li><Link to="/events" className="list">Events</Link></li>
          <li>{user.uid?<Link to="/dashboard" className="list">Dashboard</Link>:<button id="signin" onClick={googleLogin}>Sign In</button>}</li>
          </ul>
        </div>
        <div className="hamburger" onClick={handleMenuClick}>
          <div className={`bar ${showMenu ? "open" : ""}`} />
          <div className={`bar ${showMenu ? "open" : ""}`} />
          <div className={`bar ${showMenu ? "open" : ""}`} />
        </div>
      </nav>
    )
}
