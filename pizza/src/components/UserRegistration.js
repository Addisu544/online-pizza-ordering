


// UserRegistration.js
import React from 'react';
import {  Typography, Grid, Box } from '@mui/material';
import { TextField, Button, Container } from '@mui/material';
import axios from 'axios';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

const passwordSchema = z.string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[!@#$%^&*]/, "Password must contain at least one special character");

const registrationSchema = z.object({
    first_name: z.string().min(1, "First name is required"),
    last_name: z.string().min(1, "Last name is required"),
    phone_number: z.string().min(10, "Phone number must be at least 10 characters"),
    address: z.string().min(1, "Address is required"),
    email: z.string().email("Invalid email format"),
    country: z.string().min(1, "Country is required"),
    subcity: z.string().min(1, "Subcity is required"),
    kebele: z.string().min(1, "Kebele is required"),
    phobia: z.string().optional(),
    password: passwordSchema, // Add password validation
});

const UserRegistration = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registrationSchema),
    });

    const navigate = useNavigate();


    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:5000/api/register', data);
            console.log('Customer registered:', response.data);
           alert("you are registered");
            navigate('/login');
            // Clear form or show success message here
        } catch (error) {
            console.error('Error registering customer:', error);
        }
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 4, mb: 4 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    User Registration
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="First Name"
                                fullWidth
                                {...register('first_name')}
                                error={!!errors.first_name}
                                helperText={errors.first_name ? errors.first_name.message : ''}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Last Name"
                                fullWidth
                                {...register('last_name')}
                                error={!!errors.last_name}
                                helperText={errors.last_name ? errors.last_name.message : ''}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Phone Number"
                                fullWidth
                                {...register('phone_number')}
                                error={!!errors.phone_number}
                                helperText={errors.phone_number ? errors.phone_number.message : ''}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Address"
                                fullWidth
                                {...register('address')}
                                error={!!errors.address}
                                helperText={errors.address ? errors.address.message : ''}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Email"
                                fullWidth
                                {...register('email')}
                                error={!!errors.email}
                                helperText={errors.email ? errors.email.message : ''}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Country"
                                fullWidth
                                {...register('country')}
                                error={!!errors.country}
                                helperText={errors.country ? errors.country.message : ''}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Subcity"
                                fullWidth
                                {...register('subcity')}
                                error={!!errors.subcity}
                                helperText={errors.subcity ? errors.subcity.message : ''}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Kebele"
                                fullWidth
                                {...register('kebele')}
                                error={!!errors.kebele}
                                helperText={errors.kebele ? errors.kebele.message : ''}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Phobia"
                                fullWidth
                                {...register('phobia')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Password"
                                type="password"
                                fullWidth
                                {...register('password')}
                                error={!!errors.password}
                                helperText={errors.password ? errors.password.message : ''}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary" fullWidth>
                                Register
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    );
};

export default UserRegistration;