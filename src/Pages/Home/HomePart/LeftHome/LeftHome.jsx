// import DefaultHomeCard from "./Default/DefaultHomeCard";
import PlaceDetails from "./PlaceDetails/PlaceDetails";


const LeftHome = ({carouselData, selectedSlideIndex, slected, setShowForm}) => {
    console.log(carouselData, selectedSlideIndex)

    const selectedData = carouselData.find(item => item.id ===slected);
    return (
        <div className=" text-white z-0">
            <PlaceDetails selectedData={selectedData} setShowForm={setShowForm}></PlaceDetails>
        </div>
    );
};

export default LeftHome;