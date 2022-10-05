import { Link } from "react-router-dom";

function Links() {
    return (
        <div className="flex w-full h-full">
            <div className="w-[25%] h-full"></div>
            <div className="flex flex-col mt-[10%] w-[50%] h-[40%] bg-gradient-to-r from-sky-500 to-indigo-500">
                <Link to="/time" className="border p-5 m-5 text-3xl hover:text-blue-600 text-white">Time</Link>
                <Link to="/queue" className="border p-5 m-5 text-3xl hover:text-blue-600 text-white">Queue</Link>
                <Link to="/colorchanging" className="border p-5 m-5 text-3xl hover:text-blue-600 text-white">Color Changing</Link>
                <Link to="/practice" className="border p-5 m-5 text-3xl hover:text-blue-600 text-white">Practice</Link>
            </div>
            <div className="w-[25%] h-full"></div>
        </div>
    );
}

export default Links;