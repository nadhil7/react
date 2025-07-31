import category1 from './assets/imgi_18_a22a213ca6221b65.png'
import category2 from './assets/imgi_19_5f2ee7f883cdb774.png'
import category3 from './assets/imgi_20_ff559cb9d803d424.png'
import category4 from './assets/imgi_21_af646c36d74c4be9.png'
import category5 from './assets/imgi_22_1788f177649e6991.png'
import category6 from './assets/category9.jpg'
import category7 from './assets/imgi_24_3c647c2e0d937dc5.png'
import category8 from './assets/imgi_25_b3020c99672953b9.png'
import category9 from './assets/imgi_26_e730a834ad950bae.png'
import Header from "./components/Header";
import Card from './components/card'

const array = [{ image: category1, name: "Minutes" }, { image: category2, name: "Mobile & Tablets" },
{ image: category3, name: "Fashion" }, { image: category4, name: "Electronics" },
{ image: category5, name: "Home & Furniture" }, { image: category6, name: "TV & Appliances" },
{ image: category7, name: "Flight Bookings" }, { image: category8, name: "Beauty & Foods" },
{image:category9,name:"gocery"}]


function App() {
  return (
    <>
      <div className='w-full  bg-gray-200 h-screen' >
        <Header></Header>
        <section className='m-5 h-40 flex justify-center gap-15  my-2 items-center bg-white'>
          {array.map((i, index) =>
            <Card key={index} image={i.image} name={i.name} />)}
        </section>
      </div>
    </>
  );
}
export default App
