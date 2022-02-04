import { ChangeEvent } from "react";

interface SearchBarProps {
    filterText: string
    inStockOnly: boolean
    onFilerTextChange: (value: string) => void
    onInStockOnlyChange: (value: boolean) => void
}

const SearchBar = ({filterText, inStockOnly, onFilerTextChange, onInStockOnlyChange}: SearchBarProps) => {
    const handleText = (e: ChangeEvent<HTMLInputElement>) => {
        onFilerTextChange(e.target.value);
    }

    const handleInStockOnly = (e: ChangeEvent<HTMLInputElement>) => {
        onInStockOnlyChange(e.target.checked);
    }

    return (
        <form>
            <input type="text" placeholder="Search..." value={ filterText } onChange={ handleText } />
            <p>
                <input type="checkbox" checked={ inStockOnly } onChange={ handleInStockOnly } />
                { ' ' }
                Only show products in stock
            </p>
        </form>);
}

export default SearchBar;
