
import { useLoaderData } from "react-router-dom";
import LeftHome from "./HomePart/LeftHome/LeftHome";
import RightHome from "./HomePart/RightHome/RightHome";
import { useState } from "react";


const Home = () => {
    const carouselData = useLoaderData();
    console.log(carouselData);

    const [slected, setSelected] = useState(1)
    const [showForm, setShowForm] = useState(false);

    console.log(showForm)

    return (
        <div className="absolute top-0 text-center h-auto gap-8 lg:h-auto  w-full z-0 grid sm:grid-cols-1 lg:grid-cols-2 py-40  mb-10"
            style={{
                backgroundImage: 'url(https://i.ibb.co/BZtFhzz/Rectangle-1.png)',
                backgroundSize: 'cover',
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
            }}>
            <div className="absolute inset-0 z-1 bg-black bg-opacity-70"></div>

            <div className="z-0">
                <LeftHome carouselData={carouselData} slected={slected} setShowForm={setShowForm}></LeftHome>
            </div>
            <div className="z-0">
                <RightHome setSelected={setSelected} slected={slected} carouselData={carouselData} showForm={showForm}></RightHome>
            </div>

        </div >
    );
};

export default Home;
