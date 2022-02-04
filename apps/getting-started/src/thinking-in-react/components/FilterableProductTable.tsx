import { Product } from "../repository/ProductsRepository";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { useState } from "react";

const FilterableProductTable = ({products}: { products: Product[] }) => {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    const handleFilerTextChange = (value: string) => {
        setFilterText(value)
    }

    const handleInStockOnlyChange = (value: boolean) => {
        setInStockOnly(value)
    }

    return (
        <div>
            <SearchBar
                onFilerTextChange={ handleFilerTextChange }
                onInStockOnlyChange={ handleInStockOnlyChange }
                filterText={ filterText }
                inStockOnly={ inStockOnly } />
            <ProductTable
                products={ products }
                filterText={ filterText }
                inStockOnly={ inStockOnly } />
        </div>
    );
}

export default FilterableProductTable;
