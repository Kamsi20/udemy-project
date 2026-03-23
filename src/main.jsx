import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import AuthState from './context/FormControlContext'



createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AuthState>
            <App />
        </AuthState>
    </BrowserRouter>
)
