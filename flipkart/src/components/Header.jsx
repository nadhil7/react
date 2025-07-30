import flipkarthead from '../assets/flipkart.png'
import dpicon from '../assets/dpicon.svg'
import arrowicon from '../assets/arrowimage.svg'
import carticon from '../assets/carticon.svg'
import 
export default function Header() {
    return (
        <header className='flex'>
            <div><img src={flipkarthead} alt="refresh icon flipkart" /></div>
            <div> <input type="text" /></div>
            <div>
                {/* <ul>
               <li><a href=""></a></li>
               <li><a href=""></a></li>
               <li><a href=""></a></li>
               <li><a href=""></a>
               
               </li>
            </ul> */}
                <div className='flex'><img src={dpicon} alt="" /><h3>Login</h3><img src={arrowicon} alt="" /></div>
                <div><img src={carticon} alt="" /></div>
                <div><img src={} alt="" /></div>
                <div><img src="" alt="" /></div>
            </div>
        </header>
    );
};