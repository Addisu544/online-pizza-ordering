// // StaffRegistration.js
// import React from 'react';
// import { Container, Typography, TextField, Button, Grid, Box, MenuItem } from '@mui/material';
// import axios from 'axios';
// import { z } from 'zod';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';

// const passwordSchema = z.string()
//     .min(8, "Password must be at least 8 characters long")
//     .regex(/[a-z]/, "Password must contain at least one lowercase letter")
//     .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
//     .regex(/[0-9]/, "Password must contain at least one number")
//     .regex(/[!@#$%^&*]/, "Password must contain at least one special character");

// const registrationSchema = z.object({
//     first_name: z.string().min(1, "First name is required"),
//     last_name: z.string().min(1, "Last name is required"),
//     phone: z.string().min(10, "Phone number must be at least 10 characters"),
//     email: z.string().email("Invalid email format"),
//     password: passwordSchema, // Password validation
//     role: z.string().min(1, "Role is required"), // Role validation
// });

// const StaffRegistration = () => {
//     const { register, handleSubmit, formState: { errors } } = useForm({
//         resolver: zodResolver(registrationSchema),
//     });

//     const onSubmit = async (data) => {
//         try {
//             const response = await axios.post('http://localhost:5000/api/register-staff', data);
//             console.log('Staff registered:', response.data);
//            alert('new staff registered')
//             // Clear form or show success message here
//         } catch (error) {
//             console.error('Error registering staff:', error);
//         }
//     };

//     return (
    
//         <Container maxWidth="sm">
//         <Box sx={{ mt: 4, mb: 4 }}>
//             <Typography variant="h4" align="center" gutterBottom>
//                 Staff Registration
//             </Typography>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <Grid container spacing={2}>
//                     <Grid item xs={12} sm={6}>
//                         <TextField
//                             label="First Name"
//                             variant="outlined"
//                             fullWidth
//                             {...register('first_name')}
//                             error={!!errors.first_name}
//                             helperText={errors.first_name ? errors.first_name.message : ''}
//                             required
//                         />
//                     </Grid>
//                     <Grid item xs={12} sm={6}>
//                         <TextField
//                             label="Last Name"
//                             variant="outlined"
//                             fullWidth
//                             {...register('last_name')}
//                             error={!!errors.last_name}
//                             helperText={errors.last_name ? errors.last_name.message : ''}
//                             required
//                         />
//                     </Grid>
//                     <Grid item xs={12}>
//                         <TextField
//                             label="Phone"
//                             variant="outlined"
//                             fullWidth
//                             {...register('phone')}
//                             error={!!errors.phone}
//                             helperText={errors.phone ? errors.phone.message : ''}
//                             required
//                         />
//                     </Grid>
//                     <Grid item xs={12}>
//                         <TextField
//                             label="Email"
//                             variant="outlined"
//                             fullWidth
//                             {...register('email')}
//                             error={!!errors.email}
//                             helperText={errors.email ? errors.email.message : ''}
//                             required
//                         />
//                     </Grid>
//                     <Grid item xs={12}>
//                         <TextField
//                             label="Password"
//                             type="password"
//                             variant="outlined"
//                             fullWidth
//                             {...register('password')}
//                             error={!!errors.password}
//                             helperText={errors.password ? errors.password.message : ''}
//                             required
//                         />
//                     </Grid>
//                     <Grid item xs={12}>
//                         <TextField
//                             label="Role"
//                             select
//                             variant="outlined"
//                             fullWidth
//                             {...register('role')}
//                             error={!!errors.role}
//                             helperText={errors.role ? errors.role.message : ''}
//                             required
//                         >
//                             <MenuItem value="Administrator">Administrator</MenuItem>
//                             <MenuItem value="Super Chef">Super Chef</MenuItem>
//                             <MenuItem value="Food Delivery">Food Delivery</MenuItem>
//                         </TextField>
//                     </Grid>
//                     <Grid item xs={12}>
//                         <Button type="submit" variant="contained" color="primary" fullWidth>
//                             Register
//                         </Button>
//                     </Grid>
//                 </Grid>
//             </form>
//         </Box>
//     </Container>
//     );
// };

// export default StaffRegistration;
//add

import React from 'react';
import { Container, Typography, TextField, Button, Grid, Box, MenuItem } from '@mui/material';
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
    phone: z.string().min(10, "Phone number must be at least 10 characters"),
    email: z.string().email("Invalid email format"),
    password: passwordSchema, // Password validation
    role: z.string().min(1, "Role is required"), // Role validation
});

const StaffRegistration = ({ onClose }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registrationSchema),
    });

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:5000/api/register-staff', data);
            console.log('Staff registered:', response.data);
            alert('New staff registered');
            onClose(); // Close the dialog after successful registration
        } catch (error) {
            console.error('Error registering staff:', error);
        }
    };

    return (
        <Container>
            <Box sx={{ mt: 4, mb: 4 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Staff Registration
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="First Name"
                                variant="outlined"
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
                                variant="outlined"
                                fullWidth
                                {...register('last_name')}
                                error={!!errors.last_name}
                                helperText={errors.last_name ? errors.last_name.message : ''}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Phone"
                                variant="outlined"
                                fullWidth
                                {...register('phone')}
                                error={!!errors.phone}
                                helperText={errors.phone ? errors.phone.message : ''}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Email"
                                variant="outlined"
                                fullWidth
                                {...register('email')}
                                error={!!errors.email}
                                helperText={errors.email ? errors.email.message : ''}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                {...register('password')}
                                error={!!errors.password}
                                helperText={errors.password ? errors.password.message : ''}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Role"
                                select
                                variant="outlined"
                                fullWidth
                                {...register('role')}
                                error={!!errors.role}
                                helperText={errors.role ? errors.role.message : ''}
                                required
                            >
                                <MenuItem value="Administrator">Administrator</MenuItem>
                                <MenuItem value="Super Chef">Super Chef</MenuItem>
                                <MenuItem value="Food Delivery">Food Delivery</MenuItem>
                            </TextField>
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

export default StaffRegistration;