import './CertificateForm.css';
import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";

const CertificateForm = ({ onGenerate }) => {
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(formData);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Generate Certificate
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Name" name="name" onChange={handleChange} margin="normal" required />
        <TextField fullWidth label="Course" name="course" onChange={handleChange} margin="normal" required />
        <TextField fullWidth label="Date" name="date" type="date" onChange={handleChange} margin="normal" required InputLabelProps={{ shrink: true }} />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Generate
        </Button>
      </form>
    </Container>
  );
};

export default CertificateForm;
