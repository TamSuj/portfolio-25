import {introdata} from "./content_details";

export function About() {
    return (
        <div className="p-5 lg:p-20">
            <h1 className="lg:text-3xl sm:text-2xl font-bold">About</h1>
            <p className="text-gray-500">{introdata.about}</p>
        </div>
        // <div className="bg-gray-800 text-white flex justify-center p-10">
        //     <h1>About</h1>
        // </div>
    );
}