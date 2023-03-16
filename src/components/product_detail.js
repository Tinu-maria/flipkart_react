import axios from "axios";
import React, {useState, useEffect, useContext} from "react";
import {useNavigate} from 'react-router-dom';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductDetail = () => {

    const [product, setProduct] = useState("")
    const navigate = useNavigate();
    const { id } = useParams();

    const getSingleProduct = async () => {
        /* Obtains a particular product */
        const res = await axios.get(`http://127.0.0.1:8000/api/productset/${id}/`)
        setProduct(res.data)
    }

    useEffect(() => {
        getSingleProduct();
    },[])

    const deleteProduct = async() => {
        /* Deletes a particular product */
        await axios.delete(`http://127.0.0.1:8000/api/productset/${id}/`)
        // NotificationManager.success("Product is deleted")
        navigate('/product/get')
    }

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-1"></div>
                <div className="col-10 mt-4">

                    <div className="column1">
                        <img src={product.image} alt="" height="250" width="250" />
                    </div>
                    
                    <div className="column2 mt-4">
                        <h5 className="mb-3">{product.name}</h5>
                
                        <h5 className="mb-3">₹ {product.price}</h5>
                        <p className="about mb-3">{product.description}</p>
                        <div>
                            <Link className="btn btn-dark me-3" to={`/product/${product.id}/update`}>Update</Link>
                            <Link className="btn btn-dark me-3" onClick={() => deleteProduct(product.id)}>Delete</Link>
                        </div>
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
        </div>
    )
}

export default ProductDetail;
