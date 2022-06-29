import ShopItem from '../Components/Items/ShopItem/ShopItem';
import stickerData from '../Assets/a_mockData/StickerData';
import stickerData2 from '../Assets/a_mockData/StickerData2';
import ItemRepository from '../BackendAccess/ItemRepository.ts';
import './route.styles/Products.css';

function Products() {

    const data = null;

    /* Call back to the /BackendAccess controllers  */
    let fetchedData = stickerData;
    let fetchedData2 = stickerData2;

    /* Filtering options for the data */

    /* Show all items: 20 items on a page max? */
    return (
        <div>
            <div className="shopitem-grid">
                <ShopItem title={fetchedData.title} imgs={fetchedData.imgs} price={fetchedData.price.toFixed(2)} />
                <ShopItem title={fetchedData2.title} imgs={fetchedData2.imgs} price={fetchedData2.price.toFixed(2)} />
                <ShopItem title={fetchedData.title} imgs={fetchedData.imgs} price={fetchedData.price.toFixed(2)} />

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