import ItemDetails from '../Components/Items/ItemDetails/ItemDetails';
import ItemList from "../Components/Items/ItemList/ItemList";
import { useParams } from "react-router-dom";

// Controller component for a /ItemDetails page
// goal of this controller is just pass down processed data to the pure ui components 
function ItemDetailsController() {
    let params = useParams();
    return (
        <div>
            <ItemDetails itemName={params.itemId} />
            <hr />
            <ItemList />
        </div>
    );
}
export default ItemDetailsController;