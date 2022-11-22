import React, { useState } from "react";

import { Button, Form, FormGroup } from "react-bootstrap";

import { getDatabase, ref, set } from "firebase/database";





const NevForm = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [gender, setGender] = useState('')

 const handelSubmit= (e)=>{
  e.preventDefault()
  writeUserData(name, number,gender)
  console.log(name,number,gender);
 }
  
 function writeUserData( name, number, gender) {
  const db = getDatabase();
  set(ref(db, 'users/'), {
    username: name,
    phonenumber: number,
    cinsiyet: gender,
  });
}

  return (
    <div>
      <div className="addcontact">ADD CONTACT</div>
      <Form onSubmit={handelSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control onChange={(e)=>setNumber(e.target.value)} type="text" placeholder="phonenumber" />
        </Form.Group>
        <FormGroup>
          <Form.Select onChange={(e)=>setGender(e.target.value)} aria-label="Default select example">
            <option>gender</option>
            <option value="1">male</option>
            <option value="2">female</option>
            <option value="3">other</option>
          </Form.Select>
        </FormGroup>

        <Button className="mt-4" variant="primary" type="submit">
         Add
        </Button>
      </Form>
    </div>
  );
};

export default NevForm;
