import './product.css';
import {useState} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

const PostProducts = () => {
  
  const [image, setImage] = useState(null)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  const navigate = useNavigate()

  const PostProductsInfo = async() =>{

    let formfield = new FormData()
    formfield.append('name', name)
    formfield.append('price', price)
    formfield.append('description', description)
    if(image != null) {
      formfield.append('image', image)
    }

    /* Creates a product and redirect to list of products */
    await axios({
      method: 'POST',
      url: `http://localhost:8000/api/productset/`,
      data: formfield
    }).then(res => {
        console.log(res.data);
        navigate('/product/get')
      })
  }
  
  return (  
  <div className="container">
    <div className="row">
      <div className="col-3"></div>
      <div className="col-6">

        <h2>Add Product</h2>
        <label>Browse Product Image :</label>

        <form action="">
            <input className='form-control mb-3' 
            type="file" src={image} 
            onChange={(e)=> setImage(e.target.files[0])}/>

            <input className='form-control mb-3' type="text" 
            placeholder='Enter Product Name' value={name} 
            onChange={(e)=> setName(e.target.value)}/>

            <input className='form-control mb-3' type="text" 
            placeholder='Enter Product Price' value={price} 
            onChange={(e)=> setPrice(e.target.value)}/>

            <textarea className='form-control' type="text" 
            placeholder='Enter Product Description' value={description} 
            onChange={(e)=> setDescription(e.target.value)}/>

            <button onClick={PostProductsInfo} className='btn btn-secondary mt-3'>Upload</button>
        </form>
        
      </div>
      <div className="col-3"></div>
    </div>
    
  </div>
  );
}

export default PostProducts;