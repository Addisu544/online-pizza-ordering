// // ProtectedRoute.js
// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAbility } from './AbilityContext'; // Import useAbility from your context

// const ProtectedRoute = ({ children, requiredAction, resource }) => {
//     const ability = useAbility();

//     if (!ability.can(requiredAction, resource)) {
//         return <Navigate to="/unauthorized" replace />;
//     }

//     return children;
// };

// export default ProtectedRoute;

//mesqell mata

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAbility } from './AbilityContext';

const ProtectedRoute = ({ children, requiredAction, resource }) => {
    const { ability } = useAbility();

    if (!ability.can(requiredAction, resource)) {
        return <Navigate to="/unauthorized" />;
    }

    return children;
};

export default ProtectedRoute;