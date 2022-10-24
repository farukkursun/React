import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const PeopleAxiou = () => {
  const [insanlar, setInsanlar] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")

      .then((res) => setInsanlar(res.data))
      .catch((error) => console.log(error));
  }, []);
  // console.log(insanlar);
  const postInsan = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        name: "ayse",
        phone: 11111122233,
      })
      .then((res) => setInsanlar([...insanlar, res.data]));
  };
  console.log(insanlar);

  return (
    <div className="container text-center mt-4">
      <button className="btn btn-success" onClick={postInsan}>
        POST DATA
      </button>
      <div className="row">
        {insanlar.map((insan) => {
          const { id, name, phone } = insan;
          return (
            <div className="col-sm-6 col-md-4 col-lg-2" key={id}>
              {/* https://avatars.dicebear.com/styles */}
              <img
                src={`https://avatars.dicebear.com/api/avataaars/${id}.svg`}
                alt=""
              />
              <h5>{name}</h5>
              <h6> {phone}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PeopleAxiou;
