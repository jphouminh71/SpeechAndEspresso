import stickerData from "../Assets/a_mockData/StickerData";
import IItemRepository from "./Interfaces/ItemRepository";
import Product from "./Dtos/Product";

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

    // might want to make this generic later on 
    public getProductsInSubsets(subsetSize: number, products: Product[]): Product[][] {
        let dividedSet: Product[][] = [];

        let count: number = 0;
        let currentSubset: Product[] = [];
        for (var item of products) {
            if (count >= subsetSize) {
                dividedSet.push(currentSubset);
                count = 0;
                currentSubset = [];
            }
            currentSubset.push(item);
            count = count + 1;
        }

        if (currentSubset.length > 0) {
            dividedSet.push(currentSubset);
        }
        return dividedSet;
    }


}
export default ItemRepository;