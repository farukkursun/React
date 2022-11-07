import React from "react";
import { HomeImg, ImgDiv, MainContainer } from "./HomeStyles";
import homeSvg from "../../assets/home.svg";
import { useState } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import Header from "../../components/header/Header";
const APP_ID = "497a376c";

const APP_KEY = "3d263c2d049932a23e00bd1436bd7449";

const Home = () => {
  const [query, setQuery] = useState("");
  const [ögün, setOgun] = useState("Breakfast");
  const [yemekler, setYemekler] = useState([]);
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${ögün}`;

  const getData = async () => {
    const veri = await axios.get(url);

    setYemekler(veri.data.hits);
  };

  // console.log(yemekler);

  return (
    <div>
      <Header setQuery={setQuery} setOgun={setOgun} getData={getData} />

      {yemekler.length > 0 ? (
        <MainContainer>
          {yemekler.map((i, index) => (
            <RecipeCard key={index} i={i.recipe} />
          ))}
        </MainContainer>
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
    </div>
  );
};

export default Home;
