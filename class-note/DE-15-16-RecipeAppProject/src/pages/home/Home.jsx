import { useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import { HomeImg, ImgDiv, MainContainer } from "./HomeStyles";
import RecipeCard from "./RecipeCard";
import homeSvg from "../../assets/home.svg";

const APP_ID = "497a376c";

const APP_KEY = "3d263c2d049932a23e00bd1436bd7449";

/****buraya kendi id ve key imizi yaziyoruz**********/

const Home = () => {
  const [query, setQuery] = useState("");
  const [ögün, setOgun] = useState("breakfast");
  const [yemekler, setYemekler] = useState();

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${ögün}`;
  //! normalde useState ile yemekler adında boş bir dizi oluşturmamız, return den sonra map işleminde hata almamak için önemli, boş dizi oluşturmazsak, dizi varsa map le dememiz gerekir. bu örnekte dizi varsa dizi elemanlarını dizi yoksa aşçı resmini bastır diyeceğim için, yani dizinin varlığını kontrol ederek işlem yaptığım için, en başta yemekler i dizi değil boşluk yaptım
  const getData = async () => {
    const data = await axios.get(url);
    setYemekler(data.data.hits);
  };

  console.log(yemekler);
  // const ögünTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

  return (
    <>
      <Header
        ögün={ögün}
        query={query}
        setQuery={setQuery}
        setOgun={setOgun}
        getData={getData}
      />
      
      {yemekler ? (
        <MainContainer>
          {yemekler.map((i, index) => (
            <RecipeCard key={index} recipe1={i.recipe} />
          ))}
        </MainContainer>
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )} 
      
    </>
  );
};

export default Home;
