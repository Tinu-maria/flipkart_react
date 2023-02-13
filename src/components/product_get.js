import './product.css';
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 

const GetProducts = () => {

  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(false);
  const [searchName, setSearchName] = useState("");

  /* Obtains list of all products */
  const GetProductsInfo = async() =>{
    const res = await axios.get(`http://localhost:8000/api/product/`)
    setProduct(res.data)
  }
  
  useEffect(() => {
    GetProductsInfo();
  },[])

  /* Search for particular product */
  const SearchProductInfo = async () => {
    setLoading(true);
    const response = await axios.get(`http://localhost:8000/api/product/search`);
    setProduct(response.data);
    setLoading(false);
  };

  useEffect(() => {
    SearchProductInfo();
  },[])

  return (  
  <div className="container">
    <div className="row">

      <div className='input mt-4'><input
        style={{ width: "30%", height: "40px" }}
        type="text" className='form-control mb-3'
        placeholder="Search..."
        onChange={(e) => setSearchName(e.target.value)}
      /></div>

      {loading ? (<h4>Loading ...</h4>) 
      : (
        product
        .filter((value) => {
            if (searchName === "") {
              return value;
            } else if (
              value.name.toLowerCase().includes(searchName.toLowerCase())
            ) {
              return value;
            }
          })
        .map((product, item) => 
          /* Added list code inside search code */
          <div className='column'>
            <div class="card me-4 mb-3" >
              <img className='ms-5 mt-4' src={product.image} alt="" height="200" width="250" />
              <div class="card-body">
                <b className='mt-3'>{product.name}</b>
                <p>Rs. {product.price}</p>            
                <Link className="btn btn-secondary mb-3" to={`/product/${product.id}/`}>View Detail</Link>
              </div>
            </div>      
          </div>
        )
      )}

      <nav aria-label='Page navigation example mt-5'>
        <ul className='pagination justify-content-center'>
          <li className='page-item'><button className='page-link'><i class="bi bi-arrow-left"></i>Previous</button></li>
          <li className='page-item'><button className='page-link'>Next<i class="bi bi-arrow-right"></i></button></li>
        </ul>
      </nav>
      
    </div>
  </div>
  );
}

export default GetProducts;