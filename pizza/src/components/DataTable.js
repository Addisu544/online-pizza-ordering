// src/components/DataTable.js

import React, { useEffect, useState } from 'react';
import { MaterialReactTable } from 'material-react-table'; // Corrected import
import axios from 'axios';

const DataTable = () => {
    const [staffs, setStaffs] = useState([]);
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetchStaffs();
        fetchCustomers();
    }, []);

    const fetchStaffs = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/staffs');
            setStaffs(response.data);
        } catch (error) {
            console.error('Error fetching staffs:', error);
        }
    };

    const fetchCustomers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/customers');
            setCustomers(response.data);
        } catch (error) {
            console.error('Error fetching customers:', error);
        }
    };

    return (
        <div>
            <h2>Staffs</h2>
            <MaterialReactTable
                columns={[
                    { accessorKey: 'first_name', header: 'First Name' },
                    { accessorKey: 'last_name', header: 'Last Name' },
                    { accessorKey: 'phone', header: 'Phone' },
                    { accessorKey: 'email', header: 'Email' },
                    { accessorKey: 'role', header: 'Role' },
                ]}
                data={staffs}
                enableColumnOrdering
                enableSorting
            />

            <h2>Customers</h2>
            <MaterialReactTable
                columns={[
                    { accessorKey: 'first_name', header: 'First Name' },
                    { accessorKey: 'last_name', header: 'Last Name' },
                    { accessorKey: 'phone_number', header: 'Phone Number' },
                    { accessorKey: 'email', header: 'Email' },
                    { accessorKey: 'country', header: 'Country' },
                    { accessorKey: 'subcity', header: 'Subcity' },
                    { accessorKey: 'kebele', header: 'Kebele' },
                ]}
                data={customers}
                enableColumnOrdering
                enableSorting
            />
        </div>
    );
};

export default DataTable;