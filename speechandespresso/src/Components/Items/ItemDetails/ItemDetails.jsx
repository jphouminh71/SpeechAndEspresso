
// Pure View Component for Item Details
function ItemDetails(props) {
    return (
        <div className="item-details-container">
            <h1 style={{ marginBottom: "400px" }}> itemDetails for {props.itemName} </h1>
        </div>
    );
}
export default ItemDetails;
