import "./AddToCartButton.css";

function AddToCartButton(props) {
    function takeAction(e) {
        e.preventDefault();
        props.action();
    }

    return (
        <div onClick={takeAction}>
            <div className="AddToCart-Circle">
                <span class="material-symbols-outlined">
                    shopping_bag
                </span>
            </div>
        </div>
    );
}
export default AddToCartButton;
