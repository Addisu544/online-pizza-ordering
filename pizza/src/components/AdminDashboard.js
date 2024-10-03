import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import axios from 'axios';

const AdminDashboard = () => {
    const [statusCounts, setStatusCounts] = useState({
        queued: 0,
        preparing: 0,
        on_route: 0,
        delivered: 0,
    });

    useEffect(() => {
        fetchOrderStatusCounts();
    }, []);

    const fetchOrderStatusCounts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/admin/order-status-counts');
            setStatusCounts(response.data);
        } catch (error) {
            console.error('Error fetching order status counts:', error);
        }
    };

    return (
        <Container>
            <Typography variant="h2" align="center" gutterBottom>
                Admin Dashboard
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" align="center">Queued Foods</Typography>
                            <Typography variant="h4" align="center">{statusCounts.queued}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" align="center">Preparing Foods</Typography>
                            <Typography variant="h4" align="center">{statusCounts.preparing}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" align="center">On Route Foods</Typography>
                            <Typography variant="h4" align="center">{statusCounts.on_route}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" align="center">Delivered Foods</Typography>
                            <Typography variant="h4" align="center">{statusCounts.delivered}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AdminDashboard;