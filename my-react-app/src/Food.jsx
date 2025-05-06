
function Food(){

    const food1 = "grape";
    const food2 = "hotdog";

    return(
        <ul>
            <li>Banana</li>
            <li>{food1.toUpperCase()}</li>
            <li>{food2}</li>
        </ul>
    );
}

export default Food