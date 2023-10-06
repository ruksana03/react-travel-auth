import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import BookingForm from "../../RightHome/BookingForm/BookingForm";


const PlaceDetails = ({ selectedData, setShowForm }) => {
    console.log(selectedData);

    const { id, img, origin, title, description } = selectedData;


    return (
        <div>
            <div className="z-0">
                <div className="text-white text-left my-8 lg:ml-28">
                    <h1 className="text-4xl  lg:text-5xl font-medium mb-4">{title} </h1>
                    <p className="mb-4 overflow-hidden text-ellipsis">
                        {description}
                        <span className="whitespace-nowrap">
                            <Link to='\' className="text-yellow-500 underline"> Read more....</Link>
                        </span>
                    </p>

                    <div className="btn flex text-black relative bg-[#F9A51A] sm:w-1/3 lg:w-1/4 p-3">
                        <Link to={`/booking/${id}`}>
                            <button className="" onClick={() => setShowForm(true)}> Booking </button>
                        </Link>
                        <button className="absolute right-5"><FaArrowRight /></button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default PlaceDetails;