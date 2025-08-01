export default function ImageSlider({images}){
    return(
        <div className="w-full h-fit p-4 ">
            <img src={images} alt="image slider" />
        </div>
    );
}