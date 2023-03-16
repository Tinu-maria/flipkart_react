import './css/product.css';
import { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';

function CustomersList() {
  const [customer, setCustomer] = useState([])
  const [order, setOrder] = useState("ASC")

  // The useState hook is used for storing variables that are part of your application's state and will change as the user interacts with your website.
  // The useEffect hook allows components to react to lifecycle events such as mounting to the DOM, re-rendering, and unmounting

  useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/api/customers/`)
    // Axios allows you to fetch data and make HTTP requests
    .then(res=>{
        console.log(res.data);
        setCustomer(res.data)
    })
    .catch(err=>{
        console.log(err);
    })
  },[])

  const sorting=(col)=>{
    if (order==="ASC"){
      const sorted = [...customer].sort((a,b)=>
        a[col] > b[col] ? 1 : -1);
        setCustomer(sorted);
        setOrder("DSC")
    }
    if (order==="DSC"){
      const sorted = [...customer].sort((a,b)=>
        a[col] < b[col] ? 1 : -1);
        setCustomer(sorted);
        setOrder("ASC")
    }
  }

  return (  
  <div className="container">
    <div className="row">
      <div className="col-2"></div>
      <div className="col-8 mt-4">

        <h2 className='mt-5 mb-4'>Customers List</h2>
        <Table striped bordered hover>
        <thead>
            <tr>
              <th>ID<button className='btn dropdown-toggle' onClick={()=>sorting("id")}></button></th>
              <th>First Name<button className='btn dropdown-toggle' onClick={()=>sorting("first_name")}></button></th>
              <th>Last Name<button className='btn dropdown-toggle' onClick={()=>sorting("last_name")}></button></th>
              <th>Username<button className='btn dropdown-toggle' onClick={()=>sorting("username")}></button></th>
              <th>Email Address<button className='btn dropdown-toggle me-5' onClick={()=>sorting("email")}></button></th>
              <th>Joined Date<button className='btn dropdown-toggle me-5' onClick={()=>sorting("date_joined")}></button></th>
            </tr>
            </thead>
            <tbody>
            {
              customer.map((customer, i)=>{
                return(
                  <tr key={i}>
                    <td>{customer.id}</td>
                    <td>{customer.first_name}</td>
                    <td>{customer.last_name}</td>
                    <td>{customer.username}</td>
                    <td>{customer.email}</td>
                    <td>{customer.date_joined}</td>
                  </tr>
                )
              })
            }
            </tbody>
          </Table>
      </div>
      <div className="col-2"></div>
    </div>
    
  </div>
  );
}

export default CustomersList;
