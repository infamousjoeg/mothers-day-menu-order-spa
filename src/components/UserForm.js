import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const UserForm = ({ selectedItems }) => {
  const initialFormState = {
    name: "",
    email: "",
  };

  const [values, setValues] = useState(initialFormState);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: values.name,
      email: values.email,
      selectedItems: selectedItems,
    };

    try {
      const response = await fetch("http://localhost:3001/api/sendOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      alert(response.ok);

      if (!response.ok) {
        const error = await response.text();
        console.error("Error:", error);
        alert("Error: Failed to send the order. Please try again.");
        return;
      }

      // No need to use response.json() here
      console.log("Email sent successfully.");
      alert("Your order has been sent successfully!");
      setValues(initialFormState);
    } catch (error) {
      console.error("Error:", error);
      alert("Error: Failed to send the order. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField
          label="Name"
          name="name"
          variant="outlined"
          value={values.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Email"
          name="email"
          variant="outlined"
          type="email"
          value={values.email}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default UserForm;
