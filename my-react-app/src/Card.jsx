import profilepic from './assets/cat.jpg'
function Card(){
    return(
        <div  className="Card">
            <img src={profilepic} alt="profilepic" />
            <h2>my card</h2>
            <p>i am learning react</p>
        </div>
    );
}
export default Card;