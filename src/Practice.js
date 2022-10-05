import { useState } from "react";

function Practice() {
    const [colorIndex, setColorIndex] = useState(0);
    let color;
    if (colorIndex === 0) {
        color = "bg-gradient-to-r from-cyan-500 to-blue-500";
    }
    else if (colorIndex === 1) {
        color = "bg-gradient-to-r from-sky-500 to-indigo-500";
    }
    else if (colorIndex === 2) {
        color = "bg-gradient-to-r from-violet-500 to-fuchsia-500";
    }
    else {
        color = "bg-gradient-to-r from-purple-500 to-pink-500";
    }

    const t = `flex w-screen h-screen justify-center ${color}`;

    return (
        <div className={t}>
            <button
                type="buttton"
                onClick={() => setColorIndex((colorIndex + 1) % 4)}
                className="bg-teal-500 w-2/12 h-[5%] text-2xl border border-blue-600 font-bold text-white hover:text-yellow-200 mt-[20%]"
            >color change
            </button>
        </div>
    );
}

export default Practice;