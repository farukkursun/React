import React from 'react'
import { Table } from "react-bootstrap";



const NewTable = () => {
  return (
    <div>
    <div className='contact'>CONTACT</div>
    <Table striped bordered hover className='bg-white' >
    <thead>
      <tr>
        <th>Username</th>
        <th>Phone Number</th>
        <th>Gender</th>
        <th>Delete</th>
        <th>Edit</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      
    </tbody>
  </Table>
  </div>
  )
}

export default NewTable