// // src/context/AuthContext.js
// import React, { createContext, useContext, useState } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [userRole, setUserRole] = useState(null);
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     return (
//         <AuthContext.Provider value={{ userRole, setUserRole, isLoggedIn, setIsLoggedIn }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => {
//     return useContext(AuthContext);
// };




import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userRole, setUserRole] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [firstName, setFirstName] = useState(null); // New state for first name
    const [lastName, setLastName] = useState(null);   // New state for last name

    return (
        <AuthContext.Provider value={{ 
            userRole, 
            setUserRole, 
            isLoggedIn, 
            setIsLoggedIn, 
            firstName, 
            setFirstName, 
            lastName, 
            setLastName 
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};