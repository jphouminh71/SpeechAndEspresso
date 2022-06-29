import stickerData from "../Assets/a_mockData/StickerData";
import IItemRepository from "./Interfaces/ItemRepository";
import Product from "./Dtos/Product";


// Need to make this an interface that will match back to how the backend will look
class ItemRepository implements IItemRepository {
    public getProducts(): Product[] {
        let fetchedProducts: Product[] = [];

        // temp way to populate the data, want to replace this with async http calls to db in the future
        const item: Product = {
            id: stickerData.id,
            price: stickerData.price,
            title: stickerData.title,
            imgs: stickerData.imgs,
            listingDate: stickerData.listingDate,
            description: stickerData.description
        };
        fetchedProducts.push(item);

        return fetchedProducts;
    }


}
export default ItemRepository;