import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import auth from "../config/FirebaseAuth";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext(null);

export default function AuthState({ children }) {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [registerFormData, setRegisterFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  useEffect(() => {
    const checkAuthState = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })

    return () => {
      checkAuthState()
    }
  }, [])

  useEffect(() => {
    if (user) {
      navigate("/")
    }
  }, [user])

  if (loading) return <h1>Loading! Please wait</h1>


  function registerWithFirebase() {
    setLoading(true)
    const { email, password } = registerFormData
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function loginWithFirebase() {
    setLoading(true)
    const { email, password } = loginFormData
    return signInWithEmailAndPassword(auth, email, password)
  }

  function handleLogout() {
    return signOut(auth)
  }


  return <AuthContext.Provider value={{
    registerFormData,
    setRegisterFormData,
    registerWithFirebase,
    loginWithFirebase,
    user,
    loading,
    loginFormData,
    setLoginFormData,
    handleLogout,
    setLoading
  }}>

    {children}
  </AuthContext.Provider>
}
