// src/components/DataTable.js

// import React, { useEffect, useState } from 'react';
// import { MaterialReactTable } from 'material-react-table'; // Corrected import
// import axios from 'axios';

// const DataTable = () => {
//     const [customers, setCustomers] = useState([]);

//     useEffect(() => {
//         fetchCustomers();
//     }, []);

    

//     const fetchCustomers = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/customers');
//             setCustomers(response.data);
//         } catch (error) {
//             console.error('Error fetching customers:', error);
//         }
//     };

//     return (
//         <div>
           

//             <h2>Customers</h2>
//             <MaterialReactTable
//                 columns={[
//                     { accessorKey: 'first_name', header: 'First Name' },
//                     { accessorKey: 'last_name', header: 'Last Name' },
//                     { accessorKey: 'phone_number', header: 'Phone Number' },
//                     { accessorKey: 'email', header: 'Email' },
//                     { accessorKey: 'country', header: 'Country' },
//                     { accessorKey: 'subcity', header: 'Subcity' },
//                     { accessorKey: 'kebele', header: 'Kebele' },
//                 ]}
//                 data={customers}
//                 enableColumnOrdering
//                 enableSorting
//             />
//         </div>
//     );
// };

// export default DataTable;

//template



import React, { useEffect, useMemo, useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import { MaterialReactTable } from 'material-react-table';
import axios from 'axios';

const DataTable = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetchCustomers();
    }, []);

    const fetchCustomers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/customers');
            setCustomers(response.data);
        } catch (error) {
            console.error('Error fetching customers:', error);
        }
    };

    const handleActivate = (customerId) => {
        alert(`Activating customer ID: ${customerId}`);
        // Add activation logic here
    };

    const handleDeactivate = (customerId) => {
        alert(`Deactivating customer ID: ${customerId}`);
        // Add deactivation logic here
    };

    const handleContact = (customer) => {
        alert(`Contacting ${customer.first_name} ${customer.last_name} at ${customer.phone_number}`);
    };

    const columns = useMemo(
        () => [
            { accessorKey: 'first_name', header: 'First Name' },
            { accessorKey: 'last_name', header: 'Last Name' },
            { accessorKey: 'phone_number', header: 'Phone Number' },
            { accessorKey: 'email', header: 'Email' },
            { accessorKey: 'country', header: 'Country' },
            { accessorKey: 'subcity', header: 'Subcity' },
            { accessorKey: 'kebele', header: 'Kebele' },
            {
                id: 'actions',
                header: 'Actions',
                Cell: ({ row }) => (
                    <div>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => alert(`Viewing profile for ${row.original.first_name} ${row.original.last_name}`)}
                        >
                            View
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
                    Customers
                </Typography>
                <MaterialReactTable
                    columns={columns}
                    data={customers}
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
                                    table.getSelectedRowModel().flatRows.forEach((row) => handleDeactivate(row.original.id));
                                }}
                                variant="contained"
                            >
                                Deactivate
                            </Button>
                            <Button
                                color="success"
                                disabled={!table.getIsSomeRowsSelected()}
                                onClick={() => {
                                    table.getSelectedRowModel().flatRows.forEach((row) => handleActivate(row.original.id));
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

export default DataTable;