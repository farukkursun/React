import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";

const TextFieldComp = () => {
  let error1 = true;
  return (
    <div>
      <Container maxWidth="md">
        <Typography variant="h3" align="center">
          Text-Field
        </Typography>
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <TextField
            id="email"
            type="email"
            placeholder="Hello World"
            fullWidth
            margin="dense"
          />
          <TextField
            error={error1}
            id="password"
            type="password"
            defaultValue="Hello World"
            helperText={error1 && "yanlis girdiniz"}
            fullWidth
          />
          <Button variant="contained">Submit</Button>
        </Box>
      </Container>
    </div>
  );
};

export default TextFieldComp;
