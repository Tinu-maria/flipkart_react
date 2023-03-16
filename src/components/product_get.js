import './css/product.css';
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 

const GetProducts = () => {

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchName, setSearchName] = useState("");

  const [prevurl, setPrevurl] = useState()
  const [nexturl, setNexturl] = useState()

  /* Obtains list of all products */
  const GetProductsInfo = async() =>{
    const res = await axios.get(`http://localhost:8000/api/product/`)
    setProduct(res.data.results)
    setPrevurl(res.data.previous)
    setNexturl(res.data.next)
  }
  
  useEffect(() => {
    GetProductsInfo();
  },[])

  /* Search for particular product */
  const SearchProductInfo = async () => {
    setLoading(true);
    const res = await axios.get(`http://localhost:8000/api/product/search`);
    setProduct(res.data);
    setLoading(false);
  };

  useEffect(() => {
    SearchProductInfo();
  },[])

  /* Listt product with pagination */
  const PaginationHolder = (url) => {
    axios.get(url).then((res)=>{
      setProduct(res.data.results)
      setPrevurl(res.data.previous)
      setNexturl(res.data.next)
    })
  }

  return (  
  <div className="container">
    <div className="row">

      <div className='input mt-3'><input
        style={{ width: "30%", height: "40px" }}
        type="text" className='form-control mb-2'
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
            <div className="mb-2" >
              <img src={product.image} alt="" height="200" width="250" />
              <div class="card-body">
                <Link to={`/product/${product.id}/`}>
                  <p>{product.name}</p>
                </Link>
                <h6 className='mb-0'>₹ {product.price}</h6>            
              </div>
            </div>      
          </div>
        )
      )}

      <div aria-label='Page navigation example mt-5'>
        <ul className='pagination justify-content-center'>
          {prevurl &&
          <li className='page-item'><button className='btn btn-dark' onClick={()=>PaginationHolder(prevurl)}>
            <i class="bi bi-arrow-left"></i> Previous</button>
          </li>
        }
        {nexturl &&
          <li className='page-item'><button className='btn btn-dark' onClick={()=>PaginationHolder(nexturl)}>
            Next <i class="bi bi-arrow-right"></i></button>
          </li>
        }
        </ul>
      </div>
      
    </div>
  </div>
  );
}

export default GetProducts;