// // abilities.js
// import { AbilityBuilder, Ability } from '@casl/ability';

// const defineAbilitiesFor = (role) => {
//     const { can, cannot, build } = new AbilityBuilder(Ability);

//     if (role === 'Administrator') {
//         can('manage', 'all');
//     } else if (role === 'Super Chef') {
//         can('read', 'Order');
//         can('update', 'Order');
//     } else if (role === 'Food Delivery') {
//         can('read', 'Order', { status: 'assigned' });
//     }
//     else if (role === 'customer') {
//         can('read', 'Order', { status: 'assigned' });
//     }

//     return build();
// };

// export default defineAbilitiesFor;
// mesqel mata

import { Ability, AbilityBuilder } from '@casl/ability';

export default function defineAbilitiesFor(role) {
    const { can, cannot, build } = new AbilityBuilder(Ability);

    if (role === 'Administrator') {
        can('manage', 'all'); // Admin can manage everything
    } else if (role === 'Super Chef') {
        can('read', 'Order'); // Can read orders
    } else if (role === 'Food Delivery') {
        can('read', 'Order'); // Can read orders
    } else if (role === 'customer') {
        can('read', 'Menu'); // Can read the menu
    }

    return build(); // Return the constructed Ability instance
}