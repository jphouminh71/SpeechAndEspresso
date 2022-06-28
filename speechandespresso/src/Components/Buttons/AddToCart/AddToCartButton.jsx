import "./AddToCartButton.css";

function AddToCartButton(props) {
    function takeAction(e) {
        e.preventDefault();
        props.action();
    }

    return (
        <div onClick={takeAction}>
            <p className="AddToCart-Circle"> + </p>
        </div>
    );
}
export default AddToCartButton;
