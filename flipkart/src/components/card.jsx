 
function Card({image,name}){
    return(
        <div  className="Card">
            <img src={image} alt="profilepic" />
            <h2>{name}</h2>
        </div>
    );
}
export default Card;