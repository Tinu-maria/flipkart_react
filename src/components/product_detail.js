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
        navigate('/product/get')
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <h3>{product.name}</h3>
                
                    <div className="center">
                        <img src={product.image} alt="" height="200" width="300" />
                        <p className="mt-4">Rs.{product.price}</p>
                        <p>{product.description}</p>

                        <Link className="btn btn-secondary me-3" to={`/product/${product.id}/update`}>Update</Link>
                        <Link className="btn btn-secondary me-3" onClick={() => deleteProduct(product.id)}>Delete</Link>

                    </div>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    )
}

export default ProductDetail;
