
// import React, { useEffect, useState } from 'react';
// import { MaterialReactTable } from 'material-react-table'; // Corrected import
// import axios from 'axios';

// const StaffData = () => {
//     const [staffs, setStaffs] = useState([]);
   

//     useEffect(() => {
//         fetchStaffs();
//     }, []);

//     const fetchStaffs = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/staffs');
//             setStaffs(response.data);
//         } catch (error) {
//             console.error('Error fetching staffs:', error);
//         }
//     };


//     return (
//         <div>
//             <h2>Staffs</h2>
//             <MaterialReactTable
//                 columns={[
//                     { accessorKey: 'first_name', header: 'First Name' },
//                     { accessorKey: 'last_name', header: 'Last Name' },
//                     { accessorKey: 'phone', header: 'Phone' },
//                     { accessorKey: 'email', header: 'Email' },
//                     { accessorKey: 'role', header: 'Role' },
//                 ]}
//                 data={staffs}
//                 enableColumnOrdering
//                 enableSorting
//             />

            
//         </div>
//     );
// };

// export default StaffData;

// import React, { useEffect, useMemo, useState } from 'react';
// import { Container, Typography, Button } from '@mui/material';
// import { MaterialReactTable } from 'material-react-table';
// import axios from 'axios';

// const StaffData = () => {
//     const [staffs, setStaffs] = useState([]);

//     useEffect(() => {
//         fetchStaffs();
//     }, []);

//     const fetchStaffs = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/staffs');
//             setStaffs(response.data);
//         } catch (error) {
//             console.error('Error fetching staffs:', error);
//         }
//     };

//     const handleActivate = (staffId) => {
//         alert(`Activating staff ID: ${staffId} is still in development`);
//         // Add activation logic here
//     };

//     const handleDeactivate = (staffId) => {
//         alert(`Deactivating staff ID: ${staffId} is still in development`);
//         // Add deactivation logic here
//     };

//     const handleContact = (staff) => {
//         alert(`Contacting ${staff.first_name} ${staff.last_name} at ${staff.phone} is still in development`);
//     };

//     const AddStaff = () => {
//         alert(`add staff`);
//     };

//     const columns = useMemo(
//         () => [
//             { accessorKey: 'first_name', header: 'First Name' },
//             { accessorKey: 'last_name', header: 'Last Name' },
//             { accessorKey: 'phone', header: 'Phone' },
//             { accessorKey: 'email', header: 'Email' },
//             { accessorKey: 'role', header: 'Role' },
//             {
//                 id: 'actions',
//                 header: 'Actions',
//                 Cell: ({ row }) => (
//                     <div>
//                         <Button
//                             variant="outlined"
//                             color="primary"
//                             onClick={() => alert(`Viewing profile for ${row.original.first_name} ${row.original.last_name} is still in development`)}
//                         >
//                             View
//                         </Button>
//                     </div>
//                 ),
//             },
//         ],
//         []
//     );

//     return (
//         <>
//             <Container>
//                 <Typography variant="h2" align="center" gutterBottom>
//                     Staff Data
//                 </Typography>
//                 <MaterialReactTable
//                     columns={columns}
//                     data={staffs}
//                     enableColumnOrdering
//                     enableSorting
//                     enableRowActions
//                     enableRowSelection
//                     initialState={{ showColumnFilters: true }}
//                     positionToolbarAlertBanner="bottom"
//                     renderTopToolbarCustomActions={({ table }) => (
//                         <div style={{ display: 'flex', gap: '0.5rem' }}>
//                             <Button
//                                 color="error"
//                                 disabled={!table.getIsSomeRowsSelected()}
//                                 onClick={() => {
//                                     table.getSelectedRowModel().flatRows.forEach((row) => handleDeactivate(row.original.id));
//                                 }}
//                                 variant="contained"
//                             >
//                                 Deactivate
//                             </Button>
//                             <Button
//                                 color="success"
//                                 disabled={!table.getIsSomeRowsSelected()}
//                                 onClick={() => {
//                                     table.getSelectedRowModel().flatRows.forEach((row) => handleActivate(row.original.id));
//                                 }}
//                                 variant="contained"
//                             >
//                                 Activate
//                             </Button>
//                             <Button
//                                 color="info"
//                                 disabled={!table.getIsSomeRowsSelected()}
//                                 onClick={() => {
//                                     table.getSelectedRowModel().flatRows.forEach((row) => handleContact(row.original));
//                                 }}
//                                 variant="contained"
//                             >
//                                 Contact
//                             </Button>
//                             <Button
//                                 color="info"
//                                 onClick={() => {
//                                      AddStaff();
//                                 }}
//                                 variant="contained"
//                             >
//                                 Add Staff
//                             </Button>
//                         </div>
//                     )}
//                 />
//             </Container>
//         </>
//     );
// };

// export default StaffData;
//add



import React, { useEffect, useMemo, useState } from 'react';
import { Container, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { MaterialReactTable } from 'material-react-table';
import axios from 'axios';
import StaffRegistration from './StaffRegistration'; // Import the StaffRegistration component

const StaffData = () => {
    const [staffs, setStaffs] = useState([]);
    const [dialogOpen, setDialogOpen] = useState(false);

    useEffect(() => {
        fetchStaffs();
    }, []);

    const fetchStaffs = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/staffs');
            setStaffs(response.data);
        } catch (error) {
            console.error('Error fetching staffs:', error);
        }
    };

    const handleDialogOpen = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
        fetchStaffs(); // Refresh the staff list after closing
    };

    const handleActivate = (staffId) => {
        alert(`Activating staff ID: ${staffId} is still in development`);
        // Add activation logic here
    };

    const handleDeactivate = (staffId) => {
        alert(`Deactivating staff ID: ${staffId} is still in development`);
        // Add deactivation logic here
    };

    const handleContact = (staff) => {
        alert(`Contacting ${staff.first_name} ${staff.last_name} at ${staff.phone} is still in development`);
    };

    const columns = useMemo(
        () => [
            { accessorKey: 'first_name', header: 'First Name' },
            { accessorKey: 'last_name', header: 'Last Name' },
            { accessorKey: 'phone', header: 'Phone' },
            { accessorKey: 'email', header: 'Email' },
            { accessorKey: 'role', header: 'Role' },
            {
                id: 'actions',
                header: 'Actions',
                Cell: ({ row }) => (
                    <div>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => alert(`Viewing profile for ${row.original.first_name} ${row.original.last_name} is still in development`)}
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
                    Staff Data
                </Typography>
                <MaterialReactTable
                    columns={columns}
                    data={staffs}
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
                            <Button
                                color="info"
                                onClick={handleDialogOpen}
                                variant="contained"
                            >
                                Add Staff
                            </Button>
                        </div>
                    )}
                />
                <Dialog open={dialogOpen} onClose={handleDialogClose}>
                    <DialogTitle>Staff Registration</DialogTitle>
                    <DialogContent>
                        <StaffRegistration onClose={handleDialogClose} />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleDialogClose} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </Container>
        </>
    );
};

export default StaffData;