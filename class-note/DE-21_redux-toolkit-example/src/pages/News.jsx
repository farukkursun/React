import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import loadingGif from "../assets/loading.gif";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../features/haberSlice";

const News = () => {
const dispatch = useDispatch()
const {haberler,loading}=  useSelector((state)=>state.haberSlice)
// const haberler= useSelector((state)=>state.haberSlice.haberler)
// const loading= useSelector((state)=>state.haberSlice.loading)

  useEffect(() => {
    dispatch(getData())
  }, [dispatch]);

console.log(haberler);
  return (
    <>
      {loading ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <img src={loadingGif} alt="gif" width="90%" height="800px" />
        </Box>
      ) : (
        <Box
          xs={{ d: "flex" }}
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          flexWrap="wrap"
        >
          {haberler.map((item, index) => (
            <Card sx={{ maxWidth: 345, m: 5, maxHeight: 600 }} key={index}>
              <CardMedia
                component="img"
                height="250"
                image={item?.urlToImage}
                alt="img"
              />
              <CardContent>
                <Typography gutterBottom sx={{height:120}} variant="h6" component="div">
                  {item?.title}
                </Typography>
                <Typography variant="body2" sx={{height:120}} color="text.secondary">
                  {item?.description}
                </Typography>
              </CardContent>
              <CardActions>
               
                <Button size="small" href={item?.url} target="_blank">
                  Detail
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      )}
    </>
  );
};

export default News;
