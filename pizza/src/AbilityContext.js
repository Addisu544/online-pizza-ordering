// // AbilityContext.js
// import React, { createContext, useContext } from 'react';
// import { Ability } from '@casl/ability';

// const AbilityContext = createContext(new Ability());

// export const AbilityProvider = ({ ability, children }) => {
//     return (
//         <AbilityContext.Provider value={ability}>
//             {children}
//         </AbilityContext.Provider>
//     );
// };

// export const useAbility = () => {
//     return useContext(AbilityContext);
// };
//mesqel mata
import React, { createContext, useContext, useState } from 'react';
import { Ability } from '@casl/ability';

const AbilityContext = createContext();

export const AbilityProvider = ({ children }) => {
    const [ability, setAbility] = useState(new Ability());

    return (
        <AbilityContext.Provider value={{ ability, setAbility }}>
            {children}
        </AbilityContext.Provider>
    );
};

export const useAbility = () => {
    return useContext(AbilityContext);
};