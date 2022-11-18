import { useState } from "react";

function ImageChange() {
    const [queue, setQueue] = useState(0);
    const [image, setImage] = useState([
        "image-1.jpg",
        "image-2.jpg",
        "image-3.jpg",
        "image-4.jpg",
        "image-5.jpg",
        "image-6.jpg",
        "image-7.jpg",
        "image-8.jpg",
        "image-9.jpg",
        "image-10.jpg",
        "image-11.jpg"
    ]);

    const cloud = "w-full h-full";
    const flower = "flex flex-row w-full h-full justify-center";
    const rain = "flex w-full h-screen";
    const fog = "w-4/12 h-2/6";
    const sky = "bg-violet-500 w-2/12 h-[8%] ml-[40%] text-2xl border border-yellow-600 font-bold text-white hover:text-green-400 mt-[10%]";

    return (
        <div className={cloud}>
            <div className={flower}>
                <img src={image[queue]} className={fog}></img>
            </div>
            <div className={rain}>
                <button
                    type="button"
                    onClick={() => setQueue((queue + 1) % 11)}
                    className={sky}
                >Image Change
                </button>
            </div>
        </div>
    );
}
export default ImageChange;







