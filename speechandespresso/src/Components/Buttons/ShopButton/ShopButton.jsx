import './ShopButton.css';

function ShopButton(props) {
    return (
        <button onClick={props.action} className="shopnow-btn">
            {" "}
            SHOP NOW{" "}
        </button>
    );
}
export default ShopButton;
