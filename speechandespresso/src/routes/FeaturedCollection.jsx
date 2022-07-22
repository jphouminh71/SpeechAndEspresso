import ShopItem from '../Components/Items/ShopItem/ShopItem';
import ItemRepository from '../BackendAccess/ItemRepository.ts';
import routeConfig from './routeconfig.json';
import { useEffect, useState, useRef } from 'react';
import './route.styles/Products.css';

// place in config  
const maxItemsPerPage = routeConfig.maxItemsPerPage.featuredCollection;

function FeaturedCollection() {
    const [displayedProducts, setDisplayedProducts] = useState([]);
    const [subsetIndex, setSubsetIndex] = useState(0);
    const ProductSet = useRef([]);

    function navigateTo(path) {
        // navigate to the /allproducts
        console.log("navigating to: " + path);
    }

    function loadPreviousItemSubset() {
        if (subsetIndex > 0) {
            setSubsetIndex(subsetIndex - 1);
            setDisplayedProducts(ProductSet.current[subsetIndex - 1])
        }
    }

    function loadNextItemSubset() {
        if (subsetIndex < ProductSet.current.length - 1) {
            setSubsetIndex(subsetIndex + 1);
            setDisplayedProducts(ProductSet.current[subsetIndex + 1]);
        }
    }

    function getInitialItems() {
        let repo = new ItemRepository();
        let allProducts = repo.getProducts();
        ProductSet.current = repo.getProductsInSubsets(maxItemsPerPage, allProducts);
        setDisplayedProducts(ProductSet.current[0]);
    }

    useEffect(() => {
        getInitialItems();
    }, []);

    return (
        <div>
            <div className="shopitem-grid">
                {displayedProducts.map((item, index) => {
                    return <ShopItem
                        key={index}
                        title={item.title}
                        imgs={item.imgs}
                        price={item.price.toFixed(2)} />
                })}
                <button onClick={loadPreviousItemSubset}> prev </button>
                <button onClick={loadNextItemSubset}> next </button>
                <button onClick={navigateTo}> All Products </button>
            </div>
        </div>
    );
}

export default FeaturedCollection;