


// UserRegistration.js
import React from 'react';
import { TextField, Button, Container } from '@mui/material';
import axios from 'axios';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:5000/api/register', data);
            console.log('Customer registered:', response.data);
            // Clear form or show success message here
        } catch (error) {
            console.error('Error registering customer:', error);
        }
    };

    return (
        <Container>
            <h1>User Registration</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    label="First Name"
                    {...register('first_name')}
                    error={!!errors.first_name}
                    helperText={errors.first_name ? errors.first_name.message : ''}
                    required
                />
                <TextField
                    label="Last Name"
                    {...register('last_name')}
                    error={!!errors.last_name}
                    helperText={errors.last_name ? errors.last_name.message : ''}
                    required
                />
                <TextField
                    label="Phone Number"
                    {...register('phone_number')}
                    error={!!errors.phone_number}
                    helperText={errors.phone_number ? errors.phone_number.message : ''}
                    required
                />
                <TextField
                    label="Address"
                    {...register('address')}
                    error={!!errors.address}
                    helperText={errors.address ? errors.address.message : ''}
                    required
                />
                <TextField
                    label="Email"
                    {...register('email')}
                    error={!!errors.email}
                    helperText={errors.email ? errors.email.message : ''}
                    required
                />
                <TextField
                    label="Country"
                    {...register('country')}
                    error={!!errors.country}
                    helperText={errors.country ? errors.country.message : ''}
                    required
                />
                <TextField
                    label="Subcity"
                    {...register('subcity')}
                    error={!!errors.subcity}
                    helperText={errors.subcity ? errors.subcity.message : ''}
                    required
                />
                <TextField
                    label="Kebele"
                    {...register('kebele')}
                    error={!!errors.kebele}
                    helperText={errors.kebele ? errors.kebele.message : ''}
                    required
                />
                <TextField
                    label="Phobia"
                    {...register('phobia')}
                />
                <TextField
                    label="Password"
                    type="password"
                    {...register('password')}
                    error={!!errors.password}
                    helperText={errors.password ? errors.password.message : ''}
                    required
                />
                <Button type="submit" variant="contained" color="primary">
                    Register
                </Button>
            </form>
        </Container>
    );
};

export default UserRegistration;