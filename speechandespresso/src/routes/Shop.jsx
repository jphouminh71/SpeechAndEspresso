import { Outlet, useLocation } from 'react-router-dom';
import './route.styles/Shop.css';
import '../Components/Banner/banner.css';
import routeConfig from './routeconfig.json';

function configureBannerNameByPath(currentLocation) {

    // pull this out into the shop controller? 
    const regexExpr = routeConfig.regexPatterns.EndOfURL;
    const currentLocationName = currentLocation.pathname.match(regexExpr)[0];
    let name = "";
    switch (currentLocationName) {
        case "featuredcollection":
            name = "Featured Collection";
            break;
        case "products":
            name = routeConfig.staticBannerNames.AllProductsTitle;
            break;
        case "cart":
            name = routeConfig.staticBannerNames.ShoppingCartTitle;
            break;
        case "checkout":
            name = routeConfig.staticBannerNames.CheckoutTitle;
            break;
        default:
            if (currentLocation.pathname.match("/itemdetails/")) {
                name = currentLocationName;
            } else {
                name = "configureBannerName(): Invalid path: /" + currentLocationName;
            }
            break;
    }
    return name;
}

function Shop() {
    const location = useLocation();
    return (
        <div>
            <div className="banner-container">
                <h1 className="banner-text"> {configureBannerNameByPath(location)}  </h1>
            </div>
            <div className="testContainer">
                <Outlet />
            </div>
        </div>
    );
}
export default Shop;