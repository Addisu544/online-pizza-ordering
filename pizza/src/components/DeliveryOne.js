// import React from 'react';
// import { Container, Typography } from '@mui/material';
// const DeliveryOne = () => {
 
//   return (
//     <>
      
    
//     <Container>
//       <Typography variant="h2" align="center" gutterBottom>
//        delivery one
//       </Typography>
     
     
//     </Container>
//     </>
//   );
// };

// export default DeliveryOne;



// import React, { useEffect, useState } from 'react';
// import { Container, Typography } from '@mui/material';
// import { MaterialReactTable } from 'material-react-table';
// import axios from 'axios';

// const DeliveryOne = () => {
//     const [deliveries, setDeliveries] = useState([]);

//     useEffect(() => {
//         fetchDeliveries();
//     }, []);

//     const fetchDeliveries = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/deliveries');
//             setDeliveries(response.data);
//         } catch (error) {
//             console.error('Error fetching deliveries:', error);
//         }
//     };

//     return (
//         <>
//             <Container>
//                 <Typography variant="h2" align="center" gutterBottom>
//                     Delivery One
//                 </Typography>
//                 <MaterialReactTable
//                     columns={[
//                         { accessorKey: 'pizza_name', header: 'Pizza Name' },
//                         { accessorKey: 'price', header: 'Price' },
//                         { accessorKey: 'country', header: 'Country' },
//                         { accessorKey: 'subcity', header: 'Subcity' },
//                         { accessorKey: 'kebele', header: 'Kebele' },
//                         { accessorKey: 'fname', header: 'First Name' },
//                         { accessorKey: 'lname', header: 'Last Name' },
//                         { accessorKey: 'phone_number', header: 'Phone Number' },
//                         { accessorKey: 'status', header: 'Status' },
//                     ]}
//                     data={deliveries}
//                     enableColumnOrdering
//                     enableSorting
//                 />
//             </Container>
//         </>
//     );
// };

// export default DeliveryOne;

// dropdown


// import React, { useEffect, useState } from 'react';
// import { Container, Typography } from '@mui/material';
// import { MaterialReactTable } from 'material-react-table';
// import axios from 'axios';

// const DeliveryOne = () => {
//     const [deliveries, setDeliveries] = useState([]);

//     useEffect(() => {
//         fetchDeliveries();
//     }, []);

//     const fetchDeliveries = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/deliveries');
//             setDeliveries(response.data);
//         } catch (error) {
//             console.error('Error fetching deliveries:', error);
//         }
//     };

//     const handleStatusChange = async (deliveryId, newStatus) => {
//         try {
//             await axios.put(`http://localhost:5000/api/deliveries/${deliveryId}`, { status: newStatus });
//             // Update local state to reflect the change
//             setDeliveries((prevDeliveries) =>
//                 prevDeliveries.map((delivery) =>
//                     delivery.id === deliveryId ? { ...delivery, status: newStatus } : delivery
//                 )
//             );
//         } catch (error) {
//             console.error('Error updating delivery status:', error);
//         }
//     };

//     return (
//         <Container>
//             <Typography variant="h2" align="center" gutterBottom>
//                 Delivery One
//             </Typography>
//             <MaterialReactTable
//                 columns={[
//                     { accessorKey: 'pizza_name', header: 'Pizza Name' },
//                     { accessorKey: 'price', header: 'Price' },
//                     { accessorKey: 'country', header: 'Country' },
//                     { accessorKey: 'subcity', header: 'Subcity' },
//                     { accessorKey: 'kebele', header: 'Kebele' },
//                     { accessorKey: 'fname', header: 'First Name' },
//                     { accessorKey: 'lname', header: 'Last Name' },
//                     { accessorKey: 'phone_number', header: 'Phone Number' },
//                     {
//                         accessorKey: 'status',
//                         header: 'Status',
//                         Cell: ({ row }) => (
//                             <select
//                                 value={row.original.status}
//                                 onChange={(e) => handleStatusChange(row.original.id, e.target.value)}
//                             >
//                                 <option value="preparing">Preparing</option>
//                                 <option value="delivered">Delivered</option>
//                             </select>
//                         ),
//                     },
//                 ]}
//                 data={deliveries}
//                 enableColumnOrdering
//                 enableSorting
//             />
//         </Container>
//     );
// };

// export default DeliveryOne;






//alert


// import React, { useEffect, useMemo, useState } from 'react';
// import { MaterialReactTable } from 'material-react-table';
// import { Box, Button, MenuItem, FormControl, Select } from '@mui/material';
// import axios from 'axios';

// const SuperChefPageOne = () => {
//     const [orders, setOrders] = useState([]);

//     useEffect(() => {
//         fetchOrders();
//     }, []);

//     const fetchOrders = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/deliveries'); // Update the endpoint
//             setOrders(response.data);
//         } catch (error) {
//             console.error('Error fetching orders:', error);
//         }
//     };

//     const columns = useMemo(
//         () => [
//             {
//                 accessorKey: 'pizza_name',
//                 header: 'Pizza Name',
//                 size: 200,
//             },
//             {
//                 accessorKey: 'price',
//                 header: 'Price',
//                 size: 100,
//                 Cell: ({ cell }) => (
//                     <span>
//                         {cell.getValue().toLocaleString('en-US', {
//                             style: 'currency',
//                             currency: 'USD',
//                         })}
//                     </span>
//                 ),
//             },
//             {
//                 accessorKey: 'country',
//                 header: 'Country',
//                 size: 150,
//             },
//             {
//                 accessorKey: 'subcity',
//                 header: 'Subcity',
//                 size: 150,
//             },
//             {
//                 accessorKey: 'kebele',
//                 header: 'Kebele',
//                 size: 150,
//             },
//             {
//                 accessorFn: (row) => `${row.fname} ${row.lname}`,
//                 id: 'fullName',
//                 header: 'Full Name',
//                 size: 200,
//             },
//             {
//                 id: 'status',
//                 header: 'Status',
//                 Cell: ({ row }) => {
//                     const currentStatus = row.original.status;
//                     return (
//                         <FormControl variant="outlined" size="small" style={{ minWidth: 120 }}>
//                             <Select
//                                 value={currentStatus}
//                                 onChange={(event) => {
//                                     const value = event.target.value;
//                                     handleStatusChange(row.original.order_id, value);
//                                 }}
//                                 displayEmpty
//                                 inputProps={{ 'aria-label': 'Without label' }}
//                             >
//                                 <MenuItem value="preparing">Preparing</MenuItem>
//                                 <MenuItem value="On Route">On Route</MenuItem>
//                                 <MenuItem value="Delivered">Delivered</MenuItem>
//                                 <MenuItem value="queued">Queued</MenuItem>
//                             </Select>
//                         </FormControl>
//                     );
//                 },
//             },
//             {
//                 id: 'actions',
//                 header: 'Actions',
//                 Cell: ({ row }) => (
//                     <div>
//                         <Button
//                             variant="outlined"
//                             color="primary"
//                             onClick={() => alert(`Viewing profile for ${row.original.fname} ${row.original.lname}`)}
//                         >
//                             View
//                         </Button>
//                         <Button
//                             variant="outlined"
//                             color="secondary"
//                             onClick={() => alert(`Sending email to ${row.original.email}`)}
//                             style={{ marginLeft: '8px' }}
//                         >
//                             Email
//                         </Button>
//                     </div>
//                 ),
//             },
//         ],
//         []
//     );

//     const handleStatusChange = (orderId, newStatus) => {
//         // Alert when the status is changed
//         alert(`${newStatus} clicked`);
//     };

//     const handleActivate = (orderId) => {
//         alert(`Activating order ID: ${orderId}`);
//     };

//     const handleDeactivate = (orderId) => {
//         alert(`Deactivating order ID: ${orderId}`);
//     };

//     const handleContact = (order) => {
//         alert(`Contacting ${order.fname} ${order.lname} at ${order.phone_number}`);
//     };

//     return (
//         <>
//             <MaterialReactTable
//                 columns={columns}
//                 data={orders}
//                 enableColumnFilterModes
//                 enableColumnOrdering
//                 enableRowActions
//                 enableRowSelection
//                 initialState={{ showColumnFilters: true }}
//                 positionToolbarAlertBanner="bottom"
//                 renderTopToolbarCustomActions={({ table }) => (
//                     <div style={{ display: 'flex', gap: '0.5rem' }}>
//                         <Button
//                             color="error"
//                             disabled={!table.getIsSomeRowsSelected()}
//                             onClick={() => {
//                                 table.getSelectedRowModel().flatRows.forEach((row) => handleDeactivate(row.original.order_id));
//                             }}
//                             variant="contained"
//                         >
//                             Deactivate
//                         </Button>
//                         <Button
//                             color="success"
//                             disabled={!table.getIsSomeRowsSelected()}
//                             onClick={() => {
//                                 table.getSelectedRowModel().flatRows.forEach((row) => handleActivate(row.original.order_id));
//                             }}
//                             variant="contained"
//                         >
//                             Activate
//                         </Button>
//                         <Button
//                             color="info"
//                             disabled={!table.getIsSomeRowsSelected()}
//                             onClick={() => {
//                                 table.getSelectedRowModel().flatRows.forEach((row) => handleContact(row.original));
//                             }}
//                             variant="contained"
//                         >
//                             Contact
//                         </Button>
//                     </div>
//                 )}
//             />
//         </>
//     );
// };

// export default SuperChefPageOne;









// copy form chef


import React, { useEffect, useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { Box, Button, MenuItem, FormControl, Select, Typography} from '@mui/material';
import axios from 'axios';

const DeliveryOne = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/deliveries'); // Update the endpoint
            setOrders(response.data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    const handleStatusChange = async (orderId, newStatus) => {
        console.log('Updating order ID:', orderId, 'to status:', newStatus); // Add this line
        try {
            await axios.put(`http://localhost:5000/api/orders/${orderId}/status`, { status: newStatus });
            // Update the local state to reflect the new status
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
        // alert(`Activating order ID: ${orderId}`);
        alert (`activating/diactivating/contacting id ${orderId} is in development`)
    };

    const handleDeactivate = (orderId) => {
        // alert(`Deactivating order ID: ${orderId}`);
        alert (`activating/diactivating/contacting id ${orderId} is in development`)

    };

    const handleContact = (order) => {
        // alert(`Contacting ${order.fname} ${order.lname} at ${order.phone_number}`);
        alert (`activating/diactivating/contacting ${order.fname} is still in the development`)

    };

    const columns = useMemo(
        () => [
            {
                accessorKey: 'pizza_name',
                header: 'Pizza Name',
                size: 200,
            },
            {
                accessorKey: 'price',
                header: 'Price',
                size: 100,
                Cell: ({ cell }) => (
                    <span>
                        {cell.getValue().toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                        })}
                    </span>
                ),
            },
            {
                accessorKey: 'country',
                header: 'Country',
                size: 150,
            },
            {
                accessorKey: 'subcity',
                header: 'Subcity',
                size: 150,
            },
            {
                accessorKey: 'kebele',
                header: 'Kebele',
                size: 150,
            },
            {
                accessorFn: (row) => `${row.fname} ${row.lname}`,
                id: 'fullName',
                header: 'Full Name',
                size: 200,
            },
            {
                id: 'status',
                header: 'Status',
                Cell: ({ row }) => {
                    const currentStatus = row.original.status;
                    return (
                        <FormControl variant="outlined" size="small" style={{ minWidth: 120 }}>
                            <Select
                                value={currentStatus}
                                onChange={async (event) => {
                                    const value = event.target.value;
                                    await handleStatusChange(row.original.order_id, value);
                                }}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="preparing">Preparing</MenuItem>
                                <MenuItem value="on_route">On Route</MenuItem>
                            <MenuItem value="delivered">Delivered</MenuItem>
                                <MenuItem value="queued">Queued</MenuItem>
                            </Select>
                        </FormControl>
                    );
                },
            },
            {
                id: 'actions',
                header: 'Actions',
                Cell: ({ row }) => (
                    <div>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => alert(`Viewing profile for ${row.original.fname} ${row.original.lname} is still in development`)}
                        >
                            View
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={() => alert(`Sending email to ${row.original.fname} is still in development`)}
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
        <Typography variant="h2" align="center" gutterBottom>
                    DeliveryMan Page
                </Typography>
            <MaterialReactTable
                columns={columns}
                data={orders}
                enableColumnFilterModes
                enableColumnOrdering
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
        </>
    );
};

export default DeliveryOne;