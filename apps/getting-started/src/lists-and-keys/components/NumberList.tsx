import ListItem from "./ListItem";

const NumberList = ({numbers}: { numbers: number[] }) => {
    return (
        <ul>
            { numbers.map((number) =>
                <ListItem key={ number.toString() }
                          value={ number } />
            ) }
        </ul>
    );
}

export default NumberList;
