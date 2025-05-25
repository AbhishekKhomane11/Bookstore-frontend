import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'
import { Navigate } from 'react-router-dom'
function Logout() {
    const [authUser, setAuthUser] = useAuth()
    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null,
            });
            localStorage.removeItem("Users")
            toast.success("Logout successfully");
            // document.getElementById("my_modal_5").close()
            
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        } catch (error) {
            toast.error("Error: " + error.message)
            setTimeout(() => {}, 2000)
        }
    }
    return (
        <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
            onClick={handleLogout}>
            Logout
        </button>
    )
}

export default Logout