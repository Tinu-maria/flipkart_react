import './css/product.css';
import React from 'react';
import logo1 from './logos/logo2.jpeg';
import logo2 from './logos/logo3.jpeg';
import logo3 from './logos/logo1.jpeg';
import { Link } from "react-router-dom";

function Home() {

    return(
      <div>
        
      <div className='container'>
        <div className="row">

        <div id="carouselExampleDark" class="carousel carousel-dark slide mt-2">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          
          <div className="carousel-inner">
            <div className="carousel-item active">
            <div className='justify'  style={{ position: 'relative', width: '100%' }}>
            <img src={logo1} class="d-block w-100" height='600px' alt="..."/>
              <div style={{ position: 'absolute', top: '50%', left: '25%', transform: 'translate(-50%, -50%)' }}>
                  <p className="text-muted small text-uppercase mb-2">New Inspiration 2023</p>
                  <h1 className="h2 text-uppercase mb-3">Add-on to new season</h1>
                  <Link className="btn btn-dark" to={`/product/post`}>Add collections</Link>    
              </div>
            </div>      
            </div>

            <div className="carousel-item">
            <div className='justify'  style={{ position: 'relative', width: '100%' }}>
            <img src={logo2} class="d-block w-100" height='600px' alt="..."/>
              <div style={{ position: 'absolute', top: '50%', left: '25%', transform: 'translate(-50%, -50%)' }}>
                  <p className="text-muted small text-uppercase mb-2">New Inspiration 2023</p>
                  <h1 className="h2 text-uppercase mb-3">Add-on to new season</h1>
                  <Link className="btn btn-dark" to={`/product/post`}>Add collections</Link>    
              </div>
            </div>              
            </div>

            <div className="carousel-item">
            <div className='justify'  style={{ position: 'relative', width: '100%' }}>
            <img src={logo3} class="d-block w-100" height='600px' alt="..."/>
              <div style={{ position: 'absolute', top: '50%', left: '25%', transform: 'translate(-50%, -50%)' }}>
                  <p className="text-muted small text-uppercase mb-2">New Inspiration 2023</p>
                  <h1 className="h2 text-uppercase mb-3">Add-on to new season</h1>
                  <Link className="btn btn-dark" to={`/product/post`}>Add collections</Link>    
              </div>
            </div>  
            </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>     
      </div>
      </div>

      <section className="bg-light mt-5 pt-5">
          <div className="row text-center gy-3 mt-5">
              <div className="col-lg-4">
                  <div className="d-inline-block">

                          <div className="text-start">
                              <h6 className="text-uppercase mb-1">Free shipping</h6>
                              <p className="text-sm mb-3 text-muted">Free shipping worldwide</p>
                          </div>
                  </div>
              </div>
              <div className="col-lg-4">
                  <div className="d-inline-block">

                          <div className="text-start">
                              <h6 className="text-uppercase mb-1">24 x 7 service</h6>
                              <p className="text-sm mb-3 text-muted">Free shipping worldwide</p>
                          </div>
                  </div>
              </div>
              <div className="col-lg-4">
                  <div className="d-inline-block">
                          <div className="text-start">
                              <h6 className="text-uppercase mb-1">Festival offers</h6>
                              <p className="text-sm mb-3 text-muted">Free shipping worldwide</p>
                          </div>
                  </div>
              </div>
          </div>
  </section>
    </div>
)
}
export default Home;