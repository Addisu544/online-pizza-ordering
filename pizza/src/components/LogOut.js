import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear user data from local storage
        localStorage.removeItem('token');
        localStorage.removeItem('userEmail');

        // Redirect to home page
        navigate('/');
    }, [navigate]);

    return null; // No UI is needed for this component
};

export default LogOut;