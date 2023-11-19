import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { LoginContextProvider } from './Context/LoginContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <LoginContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </LoginContextProvider>

)
