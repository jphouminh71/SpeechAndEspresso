import "./AddToCartButton.css";

function AddToCartButton(props) {
    function takeAction(e) {
        props.action();
    }

    return (
        <button className="AddToCart-Circle" onClick={takeAction}>
            <span className="material-symbols-outlined">
                local_mall
            </span>
        </button>
    );
}
export default AddToCartButton;
