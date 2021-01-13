function DinnerSupplies(props) {
    return (
        <>
            <div>
                Spoons: {props.guestList.length * 2}
            </div>
            <div>
                Forks: {props.guestList.length * 2}
            </div>
            <div>
                Knives: {props.guestList.length * 2}
            </div>
        </>
    );
}

export default DinnerSupplies;