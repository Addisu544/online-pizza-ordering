// AddPersonForm.js
import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import axios from 'axios';

const AddPersonForm = () => {
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/people', {
                age: parseInt(age),
                sex,
            });
            console.log('Person added:', response.data);
            // Clear form fields
            setAge('');
            setSex('');
        } catch (error) {
            console.error('Error adding person:', error);
        }
    };

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Age"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                />
                <TextField
                    label="Sex"
                    value={sex}
                    onChange={(e) => setSex(e.target.value)}
                    required
                />
                <Button type="submit" variant="contained" color="primary">
                    Add Person
                </Button>
            </form>
        </Container>
    );
};

export default AddPersonForm;