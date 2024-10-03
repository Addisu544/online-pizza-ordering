// import React, { useEffect, useMemo, useState } from 'react';
// import { Container, Typography, Button } from '@mui/material';
// import { MaterialReactTable } from 'material-react-table';
// import axios from 'axios';

// const PizzaTable = () => {
//     const [pizzas, setPizzas] = useState([]);

//     useEffect(() => {
//         fetchPizzas();
//     }, []);

//     const fetchPizzas = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/pizzas');
//             setPizzas(response.data);
//         } catch (error) {
//             console.error('Error fetching pizzas:', error);
//         }
//     };

//     const handleEdit = (pizzaId) => {
//         alert(`Editing pizza ID: ${pizzaId}`);
//         // Add edit logic here
//     };

//     const handleDelete = (pizzaId) => {
//         alert(`Deleting pizza ID: ${pizzaId}`);
//         // Add delete logic here
//     };

//     const handleContact = (pizza) => {
//         alert(`Contacting for pizza: ${pizza.name}`);
//     };
//     const handleActive = (pizza) => {
//         alert(`Activing for pizza: ${pizza.name}`);
//     };

//     const handleDeactive = (pizza) => {
//         alert(`Dectiving for pizza: ${pizza.name}`);
//     };

//     const AddInformation = () => {
//         alert(`to try`);
//     };

//     const columns = useMemo(
//         () => [
//             { accessorKey: 'name', header: 'Name' },
//             { accessorKey: 'description', header: 'Description' },
//             { accessorKey: 'toppings', header: 'Toppings', Cell: ({ cell }) => (cell.getValue() ? cell.getValue().join(', ') : 'None') },
//             { accessorKey: 'price', header: 'Price' },
//             {
//                 id: 'actions',
//                 header: 'Actions',
//                 Cell: ({ row }) => (
//                     <div>
//                         <Button
//                             variant="outlined"
//                             color="primary"
//                             onClick={() => handleEdit(row.original.id)}
//                         >
//                             Edit
//                         </Button>
//                         <Button
//                             variant="outlined"
//                             color="error"
//                             onClick={() => handleDelete(row.original.id)}
//                             style={{ marginLeft: '8px' }}
//                         >
//                             Delete
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
//                     Pizza Menu
//                 </Typography>
//                 <MaterialReactTable
//                     columns={columns}
//                     data={pizzas}
//                     enableColumnOrdering
//                     enableSorting
//                     enableRowActions
//                     enableRowSelection
//                     initialState={{ showColumnFilters: true }}
//                     positionToolbarAlertBanner="bottom"
//                     renderTopToolbarCustomActions={({ table }) => (
//                         <div style={{ display: 'flex', gap: '0.5rem' }}>
//                            <Button
//                                 color="info"
//                                 disabled={!table.getIsSomeRowsSelected()}
//                                 onClick={() => {
//                                     table.getSelectedRowModel().flatRows.forEach((row) => handleActive(row.original));
//                                 }}
//                                 variant="contained"
//                             >
//                                 Active
//                             </Button>
//                            <Button
//                                 color="info"
//                                 disabled={!table.getIsSomeRowsSelected()}
//                                 onClick={() => {
//                                     table.getSelectedRowModel().flatRows.forEach((row) => handleDeactive(row.original));
//                                 }}
//                                 variant="contained"
//                             >
//                                 Deactive
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
//                                     AddInformation();
//                                 }}
//                                 variant="contained"
//                             >
//                                 AddInformation
//                             </Button>

//                         </div>
//                     )}
//                 />
//             </Container>
//         </>
//     );
// };

// export default PizzaTable;



//add
import React, { useEffect, useMemo, useState } from 'react';
import { Container, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { MaterialReactTable } from 'material-react-table';
import axios from 'axios';
import AddPizza from './AddPizza'; // Import the AddPizza component

const PizzaTable = () => {
    const [pizzas, setPizzas] = useState([]);
    const [dialogOpen, setDialogOpen] = useState(false);

    useEffect(() => {
        fetchPizzas();
    }, []);

    const fetchPizzas = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/pizzas');
            setPizzas(response.data);
        } catch (error) {
            console.error('Error fetching pizzas:', error);
        }
    };

    const handleDialogOpen = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
        fetchPizzas(); // Refresh the pizza list after closing
    };

    const handleEdit = (pizzaId) => {
        alert(`Editing pizza ID: ${pizzaId}`);
        // Add edit logic here
    };

    const handleDelete = (pizzaId) => {
        alert(`Deleting pizza ID: ${pizzaId}`);
        // Add delete logic here
    };

    const handleContact = (pizza) => {
        alert(`Contacting for pizza: ${pizza.name}`);
    };

    const handleActive = (pizza) => {
        alert(`Activating pizza: ${pizza.name}`);
    };

    const handleDeactive = (pizza) => {
        alert(`Deactivating pizza: ${pizza.name}`);
    };

    const columns = useMemo(
        () => [
            { accessorKey: 'name', header: 'Name' },
            { accessorKey: 'description', header: 'Description' },
            { accessorKey: 'toppings', header: 'Toppings', Cell: ({ cell }) => (cell.getValue() ? cell.getValue().join(', ') : 'None') },
            { accessorKey: 'price', header: 'Price' },
            {
                id: 'actions',
                header: 'Actions',
                Cell: ({ row }) => (
                    <div>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => handleEdit(row.original.id)}
                        >
                            Edit
                        </Button>
                        <Button
                            variant="outlined"
                            color="error"
                            onClick={() => handleDelete(row.original.id)}
                            style={{ marginLeft: '8px' }}
                        >
                            Delete
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
                    Pizza Menu
                </Typography>
                <MaterialReactTable
                    columns={columns}
                    data={pizzas}
                    enableColumnOrdering
                    enableSorting
                    enableRowActions
                    enableRowSelection
                    initialState={{ showColumnFilters: true }}
                    positionToolbarAlertBanner="bottom"
                    renderTopToolbarCustomActions={({ table }) => (
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <Button
                                color="info"
                                disabled={!table.getIsSomeRowsSelected()}
                                onClick={() => {
                                    table.getSelectedRowModel().flatRows.forEach((row) => handleActive(row.original));
                                }}
                                variant="contained"
                            >
                                Active
                            </Button>
                            <Button
                                color="info"
                                disabled={!table.getIsSomeRowsSelected()}
                                onClick={() => {
                                    table.getSelectedRowModel().flatRows.forEach((row) => handleDeactive(row.original));
                                }}
                                variant="contained"
                            >
                                Deactive
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
                                Add Information
                            </Button>
                        </div>
                    )}
                />
                <Dialog open={dialogOpen} onClose={handleDialogClose}>
                    <DialogTitle>Add New Pizza</DialogTitle>
                    <DialogContent>
                        <AddPizza onClose={handleDialogClose} />
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

export default PizzaTable;