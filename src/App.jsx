import React from 'react'
import Home from './Home/Home'
import {Route, Routes} from 'react-router-dom'
import Books from './Books/Books'
import Signup from './components/Signup'
import Contact from './components/Contact'
import  { Toaster } from 'react-hot-toast';
import {useAuth} from './context/AuthProvider'
import { Navigate } from 'react-router-dom'
function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Books"
            element={authUser ? <Books /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path='/Contact' element={<Contact/>}></Route>
        </Routes>
        <Toaster />
      </div>
    </>
  );
}


export default App