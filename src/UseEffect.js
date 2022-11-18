import { useEffect, useState } from "react";

function UseEffect() {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        setCounter(counter + 1);
    }, [])
    console.log(counter);
    return (
        <div>{counter}</div>
    );
}
export default UseEffect;
