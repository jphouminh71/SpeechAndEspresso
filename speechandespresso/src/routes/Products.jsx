import ShopItem from '../Components/Items/ShopItem/ShopItem';
import ItemRepository from '../BackendAccess/ItemRepository.ts';
import './route.styles/Products.css';
import { useEffect, useState } from 'react';

function Products() {
    const [items, setItems] = useState([]);

    function getItems() {
        let repo = new ItemRepository();
        let data = repo.getProducts();
        console.log(data)
        setItems(data);
    }

    // You might have to end up changing how this is used in the future 
    // since you might need to refresh data every now and then idk yet 
    useEffect(() => {
        getItems();
    }, []);

    return (
        <div>
            <div className="shopitem-grid">
                {items.map((item, index) => {
                    return <ShopItem
                        key={index}
                        title={item.title}
                        imgs={item.imgs}
                        price={item.price.toFixed(2)} />
                })}
            </div>
        </div>
    );
}
export default Products; 