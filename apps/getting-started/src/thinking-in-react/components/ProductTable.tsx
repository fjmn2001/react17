import { Product } from "../repository/ProductsRepository";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import { ReactElement } from "react";

const ProductTable = ({products}: { products: Product[] }) => {
    const rows: ReactElement[] = [];
    let lastCategory: string | null = null;

    products.forEach((product) => {
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={ product.category }
                    key={ product.category } />
            );
        }
        rows.push(
            <ProductRow
                product={ product }
                key={ product.name } />
        );
        lastCategory = product.category;
    });

    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>{ rows }</tbody>
        </table>
    );
}

export default ProductTable;
