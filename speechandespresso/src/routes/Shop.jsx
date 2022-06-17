import { Outlet } from 'react-router-dom';

function Shop(){
    return (
        <div> 
                <h1> Shop Category Banner </h1> 
                <Outlet /> 
            </div>
    );
}
export default Shop;