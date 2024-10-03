// import React from 'react';
// import { Container, Typography } from '@mui/material';
// const SuperChefPageOne = () => {
 
//   return (
//     <>
      
    
//     <Container>
//       <Typography variant="h2" align="center" gutterBottom>
//        super chef page one
//       </Typography>
     
     
//     </Container>
//     </>
//   );
// };

// export default SuperChefPageOne;






// import React, { useEffect, useState } from 'react';
// import { Container, Typography, Select, MenuItem } from '@mui/material';
// import { MaterialReactTable } from 'material-react-table';
// import axios from 'axios';

// const SuperChefPageOne = () => {
//     const [orders, setOrders] = useState([]);

//     useEffect(() => {
//         fetchOrders();
//     }, []);

//     const fetchOrders = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/orders');
//             setOrders(response.data);
//         } catch (error) {
//             console.error('Error fetching orders:', error);
//         }
//     };

//     const handleStatusChange = async (orderId, newStatus) => {
//         try {
//             await axios.put(`http://localhost:5000/api/orders/${orderId}/status`, { status: newStatus });
//             setOrders(prevOrders => prevOrders.map(order => 
//                 order.order_id === orderId ? { ...order, status: newStatus } : order
//             ));
//         } catch (error) {
//             console.error('Error updating status:', error);
//         }
//     };

//     return (
//         <>
//             <Container>
//                 <Typography variant="h2" align="center" gutterBottom>
//                     Super Chef Page One
//                 </Typography>
//                 <MaterialReactTable
//                     columns={[
//                         { accessorKey: 'order_id', header: 'Order ID' },
//                         { accessorKey: 'pizza_name', header: 'Pizza Name' },
//                         { accessorKey: 'toppings', header: 'Toppings', cell: ({ cell }) => (cell.getValue() ? cell.getValue().join(', ') : 'None') },
//                         { accessorKey: 'phobia', header: 'Phobia', cell: ({ cell }) => (cell.getValue() ? cell.getValue() : 'None') },
//                         { 
//                             accessorKey: 'status', 
//                             header: 'Status',
//                             cell: ({ row }) => (
//                                 <Select
//                                     value={row.original.status}
//                                     onChange={(e) => handleStatusChange(row.original.order_id, e.target.value)}
//                                 >
//                                     <MenuItem value="preparing">Preparing</MenuItem>
//                                     <MenuItem value="on route">On Route</MenuItem>
//                                 </Select>
//                             )
//                         },
//                         { accessorKey: 'fname', header: 'First Name' },
//                         { accessorKey: 'lname', header: 'Last Name' },
//                         { accessorKey: 'phone_number', header: 'Phone Number' },
//                     ]}
//                     data={orders}
//                     enableColumnOrdering
//                     enableSorting
//                 />
//             </Container>
//         </>
//     );
// };

// export default SuperChefPageOne;

//template
import React, { useEffect, useMemo, useState } from 'react';
import { Container, Typography, Select, MenuItem, Button, FormControl } from '@mui/material';
import { MaterialReactTable } from 'material-react-table';
import axios from 'axios';

const SuperChefPageOne = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/orders');
            console.log('Fetched orders:', response.data); // Log the fetched data
            setOrders(response.data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    const handleStatusChange = async (orderId, newStatus) => {
        try {
            await axios.put(`http://localhost:5000/api/orders/${orderId}/status`, { status: newStatus });
            setOrders(prevOrders => 
                prevOrders.map(order => 
                    order.order_id === orderId ? { ...order, status: newStatus } : order
                )
            );
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    const handleActivate = (orderId) => {
        alert(`Activating order ID: ${orderId}`);
    };

    const handleDeactivate = (orderId) => {
        alert(`Deactivating order ID: ${orderId}`);
    };

    const handleContact = (order) => {
        alert(`Contacting ${order.fname} ${order.lname} at ${order.phone_number}`);
    };

    const columns = useMemo(
        () => [
            { accessorKey: 'order_id', header: 'Order ID' },
            { accessorKey: 'pizza_name', header: 'Pizza Name' },
            { accessorKey: 'toppings', header: 'Toppings', Cell: ({ cell }) => (cell.getValue() ? cell.getValue().join(', ') : 'None') },
            { accessorKey: 'phobia', header: 'Phobia', Cell: ({ cell }) => (cell.getValue() ? cell.getValue() : 'None') },
            { 
                accessorKey: 'status', 
                header: 'Status',
                Cell: ({ row }) => (
                    <FormControl variant="outlined" size="small" style={{ minWidth: 120 }}>
                        <Select
                            value={row.original.status}
                            onChange={(e) => handleStatusChange(row.original.order_id, e.target.value)}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="preparing">Preparing</MenuItem>
                            <MenuItem value="on route">On Route</MenuItem>
                            <MenuItem value="delivered">Delivered</MenuItem>
                            <MenuItem value="queued">Queued</MenuItem>
                        </Select>
                    </FormControl>
                )
            },
            { accessorKey: 'fname', header: 'First Name' },
            { accessorKey: 'lname', header: 'Last Name' },
            { accessorKey: 'phone_number', header: 'Phone Number' },
            {
                id: 'actions',
                header: 'Actions',
                Cell: ({ row }) => (
                    <div>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => alert(`Viewing profile for ${row.original.fname} ${row.original.lname}`)}
                        >
                            View
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={() => alert(`Sending email to ${row.original.email}`)}
                            style={{ marginLeft: '8px' }}
                        >
                            Email
                        </Button>
                    </div>
                ),
            },
        ],
        []
    );

    return (
        <>
            <Container>
                <Typography variant="h2" align="center" gutterBottom>
                    SuperChef Page 
                </Typography>
                <MaterialReactTable
                    columns={columns}
                    data={orders}
                    enableColumnOrdering
                    enableSorting
                    enableRowActions
                    enableRowSelection
                    initialState={{ showColumnFilters: true }}
                    positionToolbarAlertBanner="bottom"
                    renderTopToolbarCustomActions={({ table }) => (
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <Button
                                color="error"
                                disabled={!table.getIsSomeRowsSelected()}
                                onClick={() => {
                                    table.getSelectedRowModel().flatRows.forEach((row) => handleDeactivate(row.original.order_id));
                                }}
                                variant="contained"
                            >
                                Deactivate
                            </Button>
                            <Button
                                color="success"
                                disabled={!table.getIsSomeRowsSelected()}
                                onClick={() => {
                                    table.getSelectedRowModel().flatRows.forEach((row) => handleActivate(row.original.order_id));
                                }}
                                variant="contained"
                            >
                                Activate
                            </Button>
                            <Button
                                color="info"
                                disabled={!table.getIsSomeRowsSelected()}
                                onClick={() => {
                                    table.getSelectedRowModel().flatRows.forEach((row) => handleContact(row.original));
                                }}
                                variant="contained"
                            >
                                Contact
                            </Button>
                        </div>
                    )}
                />
            </Container>
        </>
    );
};

export default SuperChefPageOne;

