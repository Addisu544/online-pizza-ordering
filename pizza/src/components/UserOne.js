// import React from 'react';
// import { Container, Typography } from '@mui/material';
// const UserOne = () => {
 
//   return (
//     <>
      
    
//     <Container>
//       <Typography variant="h2" align="center" gutterBottom>
//       UserOne
//       </Typography>
     
     
//     </Container>
//     </>
//   );
// };

// export default UserOne;



// import React, { useEffect, useState } from 'react';
// import { Container, Typography } from '@mui/material';
// import { MaterialReactTable } from 'material-react-table';
// import axios from 'axios';

// const UserOne = () => {
//     const [orderHistory, setOrderHistory] = useState([]);
    
//     useEffect(() => {
//         fetchOrderHistory();
//     }, []);

//     const fetchOrderHistory = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/orderhistory', {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem('token')}`, // Token from localStorage
//                 },
//             });
//             console.log('Order history response:', response.data);
//             setOrderHistory(response.data);
//         } catch (error) {
//             console.error('Error fetching order history:', error);
//         }
//     };

//     return (
//         <Container>
//             <Typography variant="h2" align="center" gutterBottom>
//                 User Order History
//             </Typography>
//             <MaterialReactTable
//                 columns={[
                    
//                     { accessorKey: 'pizza_name', header: 'Pizza Name' },
//                     { accessorKey: 'price', header: 'Price' },
//                     { accessorKey: 'order_date', header: 'Order Date' },
                    
//                 ]}
//                 data={orderHistory}
//                 enableColumnOrdering
//                 enableSorting
//             />
//         </Container>
//     );
// };

// export default UserOne;


//add order status
import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import { MaterialReactTable } from 'material-react-table';
import axios from 'axios';

const UserOne = () => {
    const [orderHistory, setOrderHistory] = useState([]);
    
    useEffect(() => {
        fetchOrderHistory();
    }, []);

    const fetchOrderHistory = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/orderhistory', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`, // Token from localStorage
                },
            });
            console.log('Order history response:', response.data);
            setOrderHistory(response.data);
        } catch (error) {
            console.error('Error fetching order history:', error);
        }
    };

    return (
        <Container>
            <Typography variant="h2" align="center" gutterBottom>
                User Order History
            </Typography>
            <MaterialReactTable
                columns={[
                    { accessorKey: 'pizza_name', header: 'Pizza Name' },
                    { accessorKey: 'price', header: 'Price' },
                    { accessorKey: 'order_date', header: 'Order Date' },
                    { accessorKey: 'order_status', header: 'Status' },  // Add status column
                ]}
                data={orderHistory}
                enableColumnOrdering
                enableSorting
            />
        </Container>
    );
};

export default UserOne;