import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import auth from "../config/FirebaseAuth";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

export default function AuthState({ children }) {
  const [formData, setFormData] = useState({
    fullname:'',
    email: '',
    password: ''
  })
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

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


  function registerWithFirebase(email, password) {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // function loginWithFirebase() {
  //   setLoading(true)
  //   const { email, password } = loginFormData
  //   return signInWithEmailAndPassword(auth, email, password)
  // }

  function loginWithFirebase(email, password) {
  setLoading(true)
  return signInWithEmailAndPassword(auth, email, password)
}

  function handleLogout() {
    return signOut(auth)
  }


  return <AuthContext.Provider value={{
    setFormData,
    registerWithFirebase,
    loginWithFirebase,
    user,
    loading,
    formData,
    handleLogout,
    setLoading
  }}>

    {children}
  </AuthContext.Provider>
}
