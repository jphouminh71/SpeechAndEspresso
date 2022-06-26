import ShopItem from '../Components/Items/ShopItem/ShopItem';
import './route.styles/Products.css';

/*  Body Component for shop that displays all elements */
function Products() {
    const stickerNames = [
        "sticker 1",
        "sticker 2",
        "sticker 3",
        "sticker 4",
        "sticker 5",
        "sticker 6",
        "sticker 7",
        "sticker 8",
        "sticker 9"
    ]
    return (
        <div>
            <div className="shopitem-grid">
                {
                    stickerNames.map((name) => {
                        return <ShopItem itemName={name} />
                    })
                }
            </div>
            <h1 style={{ textAlign: "center", backgroundColor: "pink" }}> All Products : List </h1>
        </div>
    );
}
export default Products; 