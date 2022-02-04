import { Product } from "../repository/ProductsRepository";

const ProductRow = ({product}: { product: Product }) => {

    const name = product.stocked ?
        product.name :
        <span style={ {color: 'red'} }>
        { product.name }
      </span>;

    return (
        <tr>
            <td>{ name }</td>
            <td>{ product.price }</td>
        </tr>
    );
}

export default ProductRow;
