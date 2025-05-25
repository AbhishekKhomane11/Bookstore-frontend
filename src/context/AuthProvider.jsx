import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("Users");

  // Safely parse the localStorage value
  const parseUser = (user) => {
    try {
      return JSON.parse(user);
    } catch (error) {
      console.error("Error parsing user from localStorage:", error);
      return undefined; // Return undefined if parsing fails
    }
  };

  const [authUser, setAuthUser] = useState(
    initialAuthUser ? parseUser(initialAuthUser) : undefined
  );

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);




// import React, { createContext, useContext, useState } from "react";

// export const AuthContext = createContext();
// export default function AuthProvider({ children }) {
//   const initialAuthUser = localStorage.getItem("Users");
//   const [authUser, setAuthUser] = useState(
//     initialAuthUser ? JSON.parse(initialAuthUser) : undefined
//   );
//   return (
//     <AuthContext.Provider value={[authUser, setAuthUser]}>
//       {children}
//     </AuthContext.Provider>
//   );
// }
// export const useAuth = () => useContext(AuthContext);















// import React, { createContext, useState, useContext } from 'react';

// // Create the AuthContext
// export const AuthContext = createContext();

// // Helper function to safely parse JSON
// const safelyParseJSON = (json) => {
//   try {
//     return JSON.parse(json);
//   } catch (e) {
//     return undefined; // Return undefined if JSON is invalid
//   }
// };

// export default function AuthProvider({ children }) {
//   const initialAuthUser = localStorage.getItem('Users');
  
//   // Use the helper function to parse the initial user
//   const [authUser, setAuthUser] = useState(
//     initialAuthUser ? safelyParseJSON(initialAuthUser) : undefined
//   );

//   return (
//     <AuthContext.Provider value={[authUser, setAuthUser]}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// // Custom hook to use the AuthContext
// export const useAuth = () => useContext(AuthContext);






// import React, { createContext, useState, useContext } from 'react';

// // Create the AuthContext
// export const AuthContext = createContext();

// // AuthProvider component
// export default function AuthProvider({ children }) {
//   const initialAuthUser = localStorage.getItem('Users');
//   const [authUser, setAuthUser] = useState(
//     initialAuthUser ? JSON.parse(initialAuthUser) : undefined
//   );

//   return (
//     <AuthContext.Provider value={[authUser, setAuthUser]}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// // Custom hook to use the AuthContext
// export const useAuth = () => useContext(AuthContext);









// import React ,{createContext, useState} from 'react'
// export const AuthContext=createContext()

// export default function AuthProvider({childern}) {
  
//     const initialAuthUser=localStorage.getItem("Users");
//     const [authUser, setAuthUser]= useState(
//         initialAuthUser? JSON.parse(initialAuthUser) : undefined
//     )
//     return(
//         <AuthContext.Provider value={[authUser,setAuthUser]}>
//            {children} 
//         </AuthContext.Provider>
//     )
  
// }
// export const useAuth=()=>useContext(AuthContext);
