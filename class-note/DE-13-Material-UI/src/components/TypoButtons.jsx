import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
const TypoButtons = () => {
  return (
    <div>
      <Container maxWidth="sm">
        <Typography
          variant="h1"
          sx={{ background: "#eee", marginTop: 4, border: "1px solid red" }}
          color="error"
          align="center"
        >
          Typography, button, container, box
        </Typography>
        <Typography variant="button" color="primary.light" align="center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </Typography>
        <Typography variant="body1" align="center" color="red">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Minima, deleniti.
        </Typography>
      </Container>
      <Box sx={{ display: "flex", flexDirection: "column", gap:2, marginTop:4}}>
        <Button variant="contained" color="error" startIcon={<SendIcon/>}>
          Send
        </Button>
        <Button variant="outlined" color="success" endIcon={<DeleteIcon/>}>
          Delete
        </Button>
      </Box>
    </div>
  );
};

export default TypoButtons;
