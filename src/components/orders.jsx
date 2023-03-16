import './css/product.css';
import { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';

function OrdersList() {
  const [orders, setOrders] = useState([])
  const [order, setOrder] = useState("ASC")

  useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/api/orders/`)
    .then(res=>{
        console.log(res.data);
        setOrders(res.data)
    })
    .catch(err=>{
        console.log(err);
    })
  },[])

  const sorting=(col)=>{
    if (order==="ASC"){
      const sorted = [...orders].sort((a,b)=>
        a[col] > b[col] ? 1 : -1);
        setOrders(sorted);
        setOrder("DSC")
    }
    if (order==="DSC"){
      const sorted = [...orders].sort((a,b)=>
        a[col] < b[col] ? 1 : -1);
        setOrders(sorted);
        setOrder("ASC")
    }
  }

  return (  
  <div className="container">
    <div className="row">
      <div className="col-2"></div>
      <div className="col-8 mt-4">

        <h2 className='mt-5 mb-4'>Orders List</h2>
        <Table striped bordered hover>
        <thead>
            <tr>
              <th>OID<button className='btn dropdown-toggle' onClick={()=>sorting("id")}></button></th>
              <th>UID<button className='btn dropdown-toggle' onClick={()=>sorting("id")}></button></th>
              <th>PID<button className='btn dropdown-toggle' onClick={()=>sorting("id")}></button></th>
              <th>Ordered Date<button className='btn dropdown-toggle' onClick={()=>sorting("ordered_date")}></button></th>
              <th>Address<button className='btn dropdown-toggle' onClick={()=>sorting("address")}></button></th>
              <th>Pincode<button className='btn dropdown-toggle' onClick={()=>sorting("zipcode")}></button></th>
            </tr>
            </thead>
            <tbody>
            {
              orders.map((orders, i)=>{
                return(
                  <tr key={i}>
                    <td>{orders.id}</td>
                    <td>{orders.user}</td>
                    <td>{orders.product}</td>
                    <td>{orders.ordered_date}</td>
                    <td>{orders.address}, {orders.city}, {orders.state}</td>
                    <td>{orders.zipcode}</td>
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

export default OrdersList;
