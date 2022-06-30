
import AddToCartButton from "../../Buttons/AddToCart/AddToCartButton";
import CarouselComponent from "../../Carousel/Carousel";
import ShopButton from "../../Buttons/ShopButton/ShopButton";
import "./ShopItem.css";

function ItemPreview(props) {
    function navigateToItemDetails(e) {
        console.log("Shop now!");
        console.log(props);
    }

    function addToCart(e) {
        console.log("Adding to cart!");
        console.log(props);
    }

    return (
        <div className="preview-background-container">
            <div>
                <AddToCartButton action={addToCart} />
            </div>
            <div className="information-container">
                <div className="title-content">
                    <h1> {props.title.slice(0, 50)} </h1>
                </div>
                <div className="image-carousel-container">
                    <CarouselComponent imgs={props.imgs} />
                </div>
                <p className="item-price"> ${props.price} </p>
                <ShopButton action={navigateToItemDetails} />
            </div>
        </div>
    );
}

export default ItemPreview;
