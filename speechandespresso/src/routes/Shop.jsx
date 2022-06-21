import { Outlet, useLocation } from 'react-router-dom';
import './route.styles/Shop.css';
import routeConfig from './routeconfig.json';

function configureBannerNameByPath(currentLocation) {
    const regexExpr = routeConfig.regexPatterns.EndOfURL;
    const currentLocationName = currentLocation.pathname.match(regexExpr)[0];
    console.log(currentLocationName);
    let name = "";
    switch (currentLocationName) {
        case "shop":
            name = "Featured Collection"; // ideally want to query db here
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
                name = "something went wrong in configureBannerName()!";
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
                <h1> {configureBannerNameByPath(location)}  </h1>
            </div>
            <div className="testContainer">
                <Outlet />
            </div>
        </div>
    );
}
export default Shop;