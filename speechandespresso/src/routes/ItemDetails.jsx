import { useParams } from "react-router-dom";
import ItemList from "../Components/ItemList/ItemList";

/*  Body Component that renders the ItemDetails inside of the shop page  */
function ItemDetails()
{
    let params = useParams(); 
    return (
        <div>
            <h1> itemDetails for { params.itemId } </h1>
            <hr/>
            <ItemList /> 
        </div>
    );
}
export default ItemDetails;
