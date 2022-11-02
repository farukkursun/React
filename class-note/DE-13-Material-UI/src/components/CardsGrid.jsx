import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import data from "../data";
const CardsGrid = () => {
  // grid container=row, grid item=col
  return (
    <Container>
      <Typography variant="h4" align="center" color="error">
        CARD & GRIDS
      </Typography>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {data.map((a) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={a.id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia component="img" image={a.img} alt="resim" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {a.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {a.text}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default CardsGrid;
