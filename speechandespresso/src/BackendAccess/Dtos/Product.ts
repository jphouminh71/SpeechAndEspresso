
/**
 * Interface Object for a standard shop product that is communicated from server to here 
 */
interface Product {
    id: number;
    price: number;
    title: string;
    imgs: string[];
    listingDate: string;
    description: string;
};

export default Product; 