import { useContext } from "react"
import { LoginContext } from "../Context/LoginContext"
import "./pages.css";
import { useNavigate } from "react-router-dom"

export default function Login() {
    const { setlogin } = useContext(LoginContext)
    const Navigate = useNavigate()
    function handleclick(){
        setlogin(true)
        Navigate('/')
    }
    return (
        <div id="login" >
            <div>
                <h2>Ready to take the next step?</h2>
            <p>Create an account or sign in.</p>
            </div>
            <div>
                <p style={{fontSize:"12px",lineHeight:"18px"}}>
                By creating an account or signing in, you understand and agree to Indeed’s Terms. You also acknowledge our Cookie and Privacy policies. You will receive marketing messages from Indeed and may opt out at any time by following the unsubscribe link in our messages, or as detailed in our terms.
                </p>
            </div>
            
            <button onClick={handleclick}><img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" /> Continu with Google</button>
            <button onClick={handleclick}><img style={{ width: '40px' }} src="https://w7.pngwing.com/pngs/48/384/png-transparent-apple-logo-business-desktop-apple-heart-computer-logo.png" alt="" /> Continu with Apple</button>
        </div>
    )
}
