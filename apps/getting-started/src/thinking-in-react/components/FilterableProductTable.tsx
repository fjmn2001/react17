import { Product } from "../repository/ProductsRepository";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const FilterableProductTable = ({products}: { products: Product[] }) => {
    return (
        <div>
            <SearchBar />
            <ProductTable products={ products } />
        </div>
    );
}

export default FilterableProductTable;
