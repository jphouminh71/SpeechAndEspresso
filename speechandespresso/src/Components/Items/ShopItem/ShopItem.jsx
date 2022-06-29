import { useEffect } from "react";
import AddToCartButton from "../../Buttons/AddToCart/AddToCartButton";
import CarouselComponent from "../../Carousel/Carousel";
import "./ShopItem.css";

function ItemPreview(props) {
    function navigateToItemDetails(e) {
        e.preventDefault();
        console.log(props);
    }

    function addToCart(e) {
        console.log("Adding to cart!");
        console.log(props);
    }

    useEffect(() => {
        console.log("item loaded!");
        console.log(props);
    });

    return (
        <div className="preview-background-container">
            <div>
                <AddToCartButton action={addToCart} />
            </div>
            <div className="information-container">
                <div className="title-content">
                    <h1> {props.title} </h1>
                </div>
                <div className="image-carousel-container">
                    <CarouselComponent imgs={props.imgs} />
                </div>
                <p className="item-price"> ${props.price} </p>
                <button onClick={navigateToItemDetails} className="shopnow-btn">
                    {" "}
                    SHOP NOW{" "}
                </button>
            </div>
        </div>
    );
}

export default ItemPreview;
