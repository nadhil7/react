//components import 
import Header from "./components/Header";
import Card from './components/card'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from './components/Slider.jsx'
import BestDeal from "./components/bestdeals.jsx";

//category images
import category1 from './assets/imgi_18_a22a213ca6221b65.png'
import category2 from './assets/imgi_19_5f2ee7f883cdb774.png'
import category3 from './assets/imgi_20_ff559cb9d803d424.png'
import category4 from './assets/imgi_21_af646c36d74c4be9.png'
import category5 from './assets/imgi_22_1788f177649e6991.png'
import category6 from './assets/category9.jpg'
import category7 from './assets/imgi_24_3c647c2e0d937dc5.png'
import category8 from './assets/imgi_25_b3020c99672953b9.png'
import category9 from './assets/imgi_26_e730a834ad950bae.png'

//slider images
import slider1 from './assets/slider1.jpg'
import slider2 from './assets/slider2.jpg'
import slider3 from './assets/slider3.jpg'
import slider4 from './assets/slider4.jpg'
import slider5 from './assets/slider5.jpg'
import slider6 from './assets/slider6.jpg'
import slider7 from './assets/slider7.jpg'

//bestdeal images
import staticimage from './assets/staticimage.webp'
import BestDeal1 from './assets/bestdeal1.jpg'
import BestDeal2 from './assets/bestdeal2.jpg'
import BestDeal3 from './assets/bestdeal3.jpg'
import BestDeal4 from './assets/bestdeal4.jpg'
import BestDeal5 from './assets/bestdeal5.jpg'
import BestDeal6 from './assets/bestdeal6.jpg'

//category array
const array = [
  { image: category1, name: "Minutes" }, { image: category2, name: "Mobile & Tablets" },
  { image: category3, name: "Fashion" }, { image: category4, name: "Electronics" },
  { image: category5, name: "Home & Furniture" }, { image: category6, name: "TV & Appliances" },
  { image: category7, name: "Flight Bookings" }, { image: category8, name: "Beauty & Foods" },
  { image: category9, name: "gocery" }]

//image slider array
const arrays = [
  { images: slider1 }, { images: slider2 },
  { images: slider3 }, { images: slider4 },
  { images: slider5 }, { images: slider6 },
  { images: slider7 }]

//images of bestdeal
const array1 = [
  { image: BestDeal1, name: "Motorola edge20", price: 15000 }, { image: BestDeal2, name: "vivo v19", price: 40000 },
  { image: BestDeal3, name: "realme GT60", price: 18000 }, { image: BestDeal4, name: "Poco C4", price: 14000 },
  { image: BestDeal5, name: "Samsung A10", price: 24000 }]


//image slider
var settings = {
  dots: true,
  speed: 1000,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,

};

//function
export default function App() {
  return (
    <>
      <div className='w-full  bg-gray-200 h-full' >
        <Header />
        <section className='m-5 h-40 flex justify-center gap-15  my-2 items-center bg-white'>
          {array.map((i, index) =>
            <Card key={index} image={i.image} name={i.name} />)}
        </section>
        <section className="w-full p-6">
          <section className="bg-white  ">
            <Slider {...settings}>
              {arrays.map((i, index) =>
                <ImageSlider key={index} images={i.images} />)}
            </Slider>
          </section>
        </section>
        <section className="w-full flex gap-4 p-6">
          <section className="  bg-white w-10/12">
            <h2 className='font-bold p-6 text-2xl'>Best Deals On SmartPhones</h2>
            <div className="flex px-10 gap-20 ">
              {array1.map((i, index) =>
                <BestDeal key={index} image={i.image} name={i.name} price={i.price} />)}
            </div>
          </section>
          <div className="w-2/12 ">
            <img src={staticimage} alt="" />
          </div>
        </section>
      </div >
    </>
  );
}
