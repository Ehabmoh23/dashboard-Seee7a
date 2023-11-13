import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Logout() {
    const navigate = useNavigate();
    function logoutfunc(){
        localStorage.clear();
        navigate("/")
    }
  return (
    <>
    <button onClick={logoutfunc}>
        LogOut
    </button>
    </>
  )
}
