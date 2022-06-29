import ShopItem from '../Components/Items/ShopItem/ShopItem';
import stickerData from '../Assets/a_mockData/StickerData';
import './route.styles/Products.css';

/*  Body Component for shop that displays all elements */
function Products() {

    /* Call back to the /BackendAccess controllers  */
    let fetchedData = stickerData;

    return (
        <div>
            <div className="shopitem-grid">
                <ShopItem title={fetchedData.title} imgs={fetchedData.imgs} price={fetchedData.price.toFixed(2)} />
                <ShopItem title={fetchedData.title} imgs={fetchedData.imgs} price={fetchedData.price.toFixed(2)} />
                <ShopItem title={fetchedData.title} imgs={fetchedData.imgs} price={fetchedData.price.toFixed(2)} />

                <ShopItem title={fetchedData.title} imgs={fetchedData.imgs} price={fetchedData.price.toFixed(2)} />
                <ShopItem title={fetchedData.title} imgs={fetchedData.imgs} price={fetchedData.price.toFixed(2)} />
                <ShopItem title={fetchedData.title} imgs={fetchedData.imgs} price={fetchedData.price.toFixed(2)} />
            </div>
        </div>
    );
}
export default Products; 