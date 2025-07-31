import flipkarthead from '../assets/flipkart.png'
import dpicon from '../assets/dpicon.svg'
import arrowicon from '../assets/arrowimage.svg'
import carticon from '../assets/carticon.svg'
import headericon from '../assets/headericons.svg'
import menudots from '../assets/menuicon.svg'
export default function Header() {
    return (
        <header className='flex justify-between'>
            <div><img src={flipkarthead} alt="refresh icon flipkart" /></div>
            <div><input type="text" className='border rounded-2xl ' /></div>
            <div className='flex justify-evenly w-full'>
                {/* <ul>
               <li><a href=""></a></li>
               <li><a href=""></a></li>
               <li><a href=""></a></li>
               <li><a href=""></a>
               
               </li>
            </ul> */}
                <div className=''><img src={dpicon} alt="" /><h3>Login</h3><img src={arrowicon} alt="" /></div>
                <div><img src={carticon} alt="" /></div>
                <div><img src={headericon} alt="" /></div>
                <div><img src={menudots} alt="" /></div>
            </div>
        </header>
    );
};