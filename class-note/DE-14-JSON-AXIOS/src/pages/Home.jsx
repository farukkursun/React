import { useEffect, useState } from "react";
import AddBilgi from "../components/AddBilgi";
import BilgiList from "../components/BilgiList";
import axios from "axios";
const Home = () => {
  const [bilgiler, setBilgiler] = useState([]);
  const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials";
  //! GET (Read)

  const getBilgiler = async () => {
    const { data } = await axios.get(url);
    setBilgiler(data);
  };

  //? Sadece Component mount oldugunda istek yapar

  useEffect(() => {
    getBilgiler();
  }, []);
  console.log(bilgiler);

  //! POST (Create)

  const postBilgi = async (yeniVeri) => {
    await axios.post(url, yeniVeri);
    getBilgiler();
  };

  //! DELETE (delete)
  const deleteBilgi = async (id) => {
    await axios.delete(`${url}/${id}`);
    getBilgiler();
  };

  //! Update (PUT:tüm Update,PATCH :kısmen Update)
  const putBilgi = async (bilgi) => {
    await axios.put(`${url}/${bilgi.id}`, bilgi);
    getBilgiler()
  };

  return (
    <>
      <AddBilgi postBilgi={postBilgi} />
      <BilgiList
        deleteBilgi={deleteBilgi}
        bilgiler={bilgiler}
        putBilgi={putBilgi}
      />
    </>
  );
};

export default Home;
