import { useState } from "react";

function Queue() {

    const [serial, setSerial] = useState(0);
    const [name, setName] = useState(0);
    const [people, setPeople] = useState(["Shamil Irfan", "Shakil Ahmed",
        "Omar Faruk", "Amir Hossain"]);

    return (
        <div className="flex flex-col h-screen ml-[40%] mt-[17%]">
            <input value={name}
                className="border-2 w-4/12 h-[4%] border border-black"
                onChange={e => setName(e.target.value)}>
            </input>

            <button
                type="button"
                onClick={() => setSerial(serial + 1)}
                className="border border-blue-500
                bg-violet-300 text-white w-4/12 h-[5%] 
                hover:text-blue-600 mt-4"
            >Next
            </button>
            {people[serial]}

            <button
                type="button"
                className="bg-blue-300 
                text-white 
                border border-blue-500 
                w-4/12 h-[5%]
                hover:text-violet-600"
                onClick={() => setPeople([...people, name])}
            >Submit
            </button>
        </div>
    );
}
export default Queue;
