function Food(){
    const food1= "Apple";
    const food2="Grapes";
    const food3="Orange";

    return(
        <ul>
            <li>Banana</li>
            <li>{food1.toUpperCase()}</li>
            <li>Papaya</li>
            <li>{food2.toLowerCase()}</li>
            <li>{food3}</li>
        </ul>
    );
}
export default Food;