import flipkarthead from '../assets/flipkart.png'
import dpicon from '../assets/dpicon.svg'
import arrowicon from '../assets/arrowimage.svg'
import carticon from '../assets/carticon.svg'
import headericon from '../assets/headericons.svg'
import menudots from '../assets/menuicon.svg'
export default function Header() {
    return (
        <header className='flex bg-white gap-10 h-16 w-full mb-4 justify-center items-center'>
            <div><img src={flipkarthead} alt="refresh icon flipkart" /></div>
            <div><input type="text" className='border w-2xl' placeholder='Search for Products, Brands and More' /></div>
            <div className='flex gap-20 items-center'>
                <a href="#" className='flex'><img src={dpicon} alt="" /><h3>Login</h3><img src={arrowicon} alt="" /></a>
                <a href="#"><img src={carticon} alt="" /></a>
                <a href="#"><img src={headericon} alt="" /></a>
                <a href="#"><img src={menudots} alt="" /></a>
            </div>
        </header>
    );
};