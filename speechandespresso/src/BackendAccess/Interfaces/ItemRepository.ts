import Product from "../Dtos/Product";

interface IItemRepository {
    getProducts(): Product[];
}

export default IItemRepository;