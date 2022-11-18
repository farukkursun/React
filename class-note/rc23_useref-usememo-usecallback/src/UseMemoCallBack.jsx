import axios from "axios";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Users from "./components/Users";

const UseMemoCallBack = () => {
  const [kullanici, setUsers] = useState([]);
  const [text, setText] = useState("");
  const [arama, setArama] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);
  //   console.log(users);

  const filtreli = useMemo(
    () =>
      kullanici.filter((i) =>
        i.name.toLowerCase().includes(arama.toLowerCase())
      ),
    [kullanici, arama]
  );

    const ekle = useCallback(()=>{
      setUsers([...kullanici,{id:kullanici.length+1, name:'osman'}])
    },[kullanici])

  return (
    <div>
      <input type="search" onChange={(e) => setText(e.target.value)} />

      <button onClick={() => setArama(text)}>Search User</button>
      <button onClick={ekle} id="add-button">Add User</button>
      {/* <Users kullanici={kullanici}/> */}
      <Users kullanici={filtreli} />
    </div>
  );
};

export default UseMemoCallBack;
