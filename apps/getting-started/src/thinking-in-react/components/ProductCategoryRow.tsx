const ProductCategoryRow = ({category}: { category: string }) => {
    return (
        <tr>
            <th colSpan={ 2 }>
                { category }
            </th>
        </tr>
    );
}

export default ProductCategoryRow;
