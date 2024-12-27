import {introdata, profile} from "./content_details";
import profileImage from "./assets/profile.jpg";

function Intro() {
    return(
        <div className="md:flex items-center justify-center min-h-screen">
            <div className="intro-text font-bold leading-loose p-5 lg:p-20">
                <h1 className="lg:text-5xl sm:text-2xl">{introdata.title}</h1>
                <div className="description text-gray-400 lg:text-3xl sm:text-1xl ">
                    <p className="">{introdata.description.first}</p>
                    <p>{introdata.description.second}</p>
                </div>
            </div>

            <div className="profile-image md:basis-1/3 flex justify-center transition duration-500 hover:scale-110">
                <img src={profileImage} className="rounded-full h-40 w-40 mx-auto lg:h-52 lg:w-52"/>
            </div>
        </div>
    )
}

export default Intro;