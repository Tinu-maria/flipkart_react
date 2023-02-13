import axios from "axios";
import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import { useParams } from "react-router-dom";

const ProductUpdate = () => {

    const [image, setImage] = useState(null)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const navigate = useNavigate();
    const { id } = useParams();

    const updateSingleProduct = async () => {
        /* Obtains a particular product */
        const { data } = await axios.get(`http://localhost:8000/api/productset/${id}/`)
        console.log(data)
        setImage(data.image)
        setName(data.name)
        setPrice(data.price)
        setDescription(data.description)
    }

    useEffect(() => {
        updateSingleProduct()
    },[])

    const UpdateProductInfo = async () => {
        let formfield = new FormData()
        formfield.append('name', name)
        formfield.append('price', price)
        formfield.append('description', description)
        if(image != null) {
            formfield.append('image', image)
        }

        /* Updates a particular product */
        await axios({
            method: 'PUT',
            url: `http://localhost:8000/api/productset/${id}/`,
            data: formfield
            }).then(res => {
                console.log(res.data);
                navigate('/product/get')
            })
        }
    
    return(
        <div className="container">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    
                    <div className="center mt-3">
                    <img src={image} height="150" width="200" alt="" />
                    
                    <div className="form-group">
                    <label className="column">Upload Product Image</label>
                        <input className='form-control mb-3' 
                        type="file" src={image} 
                        onChange={(e)=> setImage(e.target.files[0])}/>
                    </div>
                    <div className="form-group">
                        <input className='form-control mb-3' type="text" 
                        placeholder='Enter Product Name' value={name} 
                        onChange={(e)=> setName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <input className='form-control mb-3' type="text" 
                        placeholder='Enter Product Price' value={price} 
                        onChange={(e)=> setPrice(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <textarea className='form-control' type="text" 
                        placeholder='Enter Product Description' value={description} 
                        onChange={(e)=> setDescription(e.target.value)}/>
                    </div>

                    <button onClick={UpdateProductInfo} className='btn btn-secondary mt-3'>Edit</button>
                    </div>

                </div>
                <div className="col-3"></div>
            </div>
        </div>
    )
}

export default ProductUpdate;
