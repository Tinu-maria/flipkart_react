import './product.css';
import React from 'react';
import logo1 from './logos/amazon-great-indian-festival-sale-best-deals-and-offers.webp';
import logo2 from './logos/jpg.webp';
import logo3 from './logos/amazon-sale-mobile-offers-.webp';

function Home() {

    return(
      <div>
      <div className='container'>
        <div className="row">

        <div id="carouselExampleIndicators" class="carousel slide mt-4 mb-4">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
            <img src={logo1} class="d-block w-100" height='600px' alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={logo2} class="d-block w-100" height='600px' alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={logo3} class="d-block w-100" height='600px' alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>     
      </div>
      </div>

      <div className='about p-4'>
      <b>Explore Electronics on Gadget Store</b>
      <p>Browse through a range of high-quality electronic items cherry-picked from some of the most popular and prestigious names in the industry. 
        We specialize in a wide array of products comprising categories like mobile phones, laptops, tablets, cameras, TVs, headphones, home speakers, home entertainment systems, musical instruments, telephones, camera and more.

        Have a passion to own the latest electronic gadgets? Love to explore the unending possibilities the modern-day devices unravel for you? Wait no further. 
        Our electronic store has got everything in it for you, that too, at the most compelling price. We have gone that extra mile to source the most popular and reliable electronic items to fulfil all your requirements well. 
        All the leading brands like Apple, Samsung, Micromax, LG, HTC, Lenovo, HP, Dell, Acer, Nikon, Sony, Canon, Panasonic, Philips, Sennheiser, JBL, Casio, Denon, Creative, Boston Acoustics, Logitech, Seagate, SanDisk, and more. 
        You can buy them online right at the comfort zone of your home, without any hassles.</p>

      <b>Buy Electronic Devices for Home and Office</b>
      <p>We believe that customers’ requirements need to be met under all circumstances. That is why we have always been practising a fully customer-centric approach, thus, giving full freedom to all our customers so that they can check and buy their necessary products online on our user-friendly website. 
        Whether you are an individual or a business enterprise, you can shop for your electronic items from virtually anywhere you like. Our multiple product categories enable you to easily find all items in just a matter of few clicks. 
        Looking for mobile phones and tablets? You would love to browse through different categories including Android, iOS, Windows and more. 
        Computer seekers have easy access to desktops and laptops featuring different operating systems like Windows, Mac, DOS and Linux. DSLRs, Point & Shoots, Mirrorless and camcorders fall under the camera category comprising some of the biggest names of brands. LCD, LED, Plasma are the filters which you can use while browsing through our large collection of TVs. 
        We brings to you a great selection of wired and wireless headphones which can be easily found under headphone types such as in-ear, on-ear, over-ear and earbud.</p>
      </div>

      <div className="footer">
        <p>© 2023 Copyright : GadgetStore.com</p>
      </div>
    </div>
)
}
export default Home;