import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import {Rating} from "@mui/material"
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";

const RatingReview = (props) => {

    const [rating, setRating] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [review, setReview] = useState([]);

    // const { id } = useParams();

    const PostRatingInfo = async() =>{
  
      let formfield = new FormData()
      formfield.append('rating', rating)
      formfield.append('title', title)
      formfield.append('description', description)
  
      await axios({
        method: 'POST',
        url: `http://localhost:8000/api/rating/`,
        data: formfield,
      }).then(res => {
          console.log(res.data);
        })
    }

    useEffect(()=>{
      axios.get(`http://127.0.0.1:8000/api/rating/`)
      .then(res=>{
          console.log(res.data);
          setReview(res.data)
      })
      .catch(err=>{
          console.log(err);
      })
    },[])

  //   const deleteReview = async() => {
  //     /* Deletes a particular review */
  //     await axios.delete(`http://127.0.0.1:8000/api/rating/${id}/`)
  // }
    
    return (  
    <div className="container">
      <div className="row mt-5">
        <div className="col-3"></div>
        <div className="col-6 p-4,5">
  
          <h3>Reviews</h3>
          <hr className='mb-4'/>
  
          <form>
            <p className='mb-1'>Post a review :</p>

            <Rating
              value={rating}
              name="rating"
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
              onClick={props.handleInputChange}
            />
  
              <input className='form-control mb-2 mt-2' type="text" 
              placeholder='Tiltle' value={title} 
              onChange={(e)=> setTitle(e.target.value)}/>
  
              <textarea className='form-control' type="text" 
              placeholder='Description' value={description} 
              onChange={(e)=> setDescription(e.target.value)}/>
  
              <button onClick={PostRatingInfo} className='btn btn-dark mt-3 mb-4'>Post</button>
              
              <div>
                {
                review.map((review, item) => 
                <div>  
                  <Rating value={review.rating}/>
                  <h6>{review.title}</h6> 
                  <p>{review.description}</p>  
                </div>     
                )
                }
              </div>
          </form>
          
        </div>
        <div className="col-3">
        </div>
      </div>
      
    </div>
    );
}

export default RatingReview;
