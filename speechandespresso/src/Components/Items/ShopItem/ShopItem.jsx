import './ShopItem.css';

function ShopItem(props) {
    return (
        <div className="grid-item">
            <p> {props.itemName} </p>
        </div>
    )
}
export default ShopItem; 