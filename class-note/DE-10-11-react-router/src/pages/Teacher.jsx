import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
//!useEffect teki People.jsx componenti

const Teacher = () => {
  const [insanlar, setInsan] = useState([]);
const navigate = useNavigate()

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setInsan(data));
  }, []);
  console.log(insanlar);

  // const getir = (id) => {
  //   fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setInsan([data]));
  // };

  return (
    <Container className="text-center">
      <Row>
        {insanlar.map((insan) => {
          const { id, name, phone } = insan;
          return (
            <Col sm={12} md={6} lg={4} key={id}>
              <img
                src={`https://avatars.dicebear.com/api/avataaars/${id}.svg`}
                alt=""
                style={{ cursor: "pointer" }}
                // onClick={() => {
                //   getir(id);
                // }}
                onClick={()=>navigate(`/teacher/${id}`)}
              />
              <h5>{name}</h5>
              <h6>{phone}</h6>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Teacher;
