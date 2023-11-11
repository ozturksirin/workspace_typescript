import Product from "./Product";

interface IProductService {
  getById(id: number): Product;
  getProducts(): Array<Product>;
  saveProduct(product: Product): void;
  deleteProduct(product: Product): void;
}

export default IProductService;
