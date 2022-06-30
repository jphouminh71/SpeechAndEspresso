import stickerData from "../Assets/a_mockData/StickerData";
import IItemRepository from "./Interfaces/ItemRepository";
import Product from "./Dtos/Product";

// Need to make this an interface that will match back to how the backend will look
class ItemRepository implements IItemRepository {
    public getProducts(): Product[] {
        let fetchedProducts: Product[] = [];

        // temp way to load in data 
        for (let item of stickerData) {
            let product: Product = {
                id: item.id,
                price: item.price,
                title: item.title,
                imgs: item.imgs,
                listingDate: item.listingDate,
                description: item.description
            };
            fetchedProducts.push(product);
        }
        return fetchedProducts;
    }


}
export default ItemRepository;