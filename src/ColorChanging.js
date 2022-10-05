import { useState } from "react";

/*
function ColorChanging() {
    const [isViolet, setIsViolet] = useState(true);
    let color;
    if (isViolet) {
        color = "bg-violet-300";
    } else {
        color = "bg-green-300";
    }


    const className = `flex flex-col w-screen h-screen ${color}`;

    return (

        <div className={className}>
            <button
                type="button"
                className="hover:bg-teal-600 bg-teal-500 w-2/12 h-[5%] border border-blue-600 mt-[20%] ml-[40%] font-bold text-white"
                onClick={() => setIsViolet(!isViolet)}>
                Color Change
            </button>
        </div>

    );
}

export default ColorChanging;
*/




function ColorChanging() {
    const [colorIndex, setColorIndex] = useState(0);
    let Color;
    if (colorIndex === 0) {
        Color = "bg-blue-300";
    }
    else if (colorIndex === 1) {
        Color = "bg-red-300";
    }
    else if (colorIndex === 2) {
        Color = "bg-sky-400";
    }
    else if (colorIndex === 3) {
        Color = "bg-gray-300";
    }
    else if (colorIndex === 4) {
        Color = "bg-teal-700";
    }
    else {
        Color = "bg-black";
    }

    const r = `w-screen h-screen ${Color}`;

    return (
        <div className={r}>
            <button
                type="button"
                onClick={() => setColorIndex((colorIndex + 1) % 6)}
                className="bg-gradient-to-r from-violet-500 to-fuchsia-500 w-2/12 h-[7%] border border-blue-600 mt-[20%] text-2xl font-bold text-white hover:text-orange-400"
            >Color Change
            </button>
        </div>
    );
}

export default ColorChanging;