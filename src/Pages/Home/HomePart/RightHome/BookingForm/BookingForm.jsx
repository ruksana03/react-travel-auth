import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BookingFormLeft from "../../../../../components/bookingFormPart/BookingFormLeft";
import BookingFormRight from "../../../../../components/bookingFormPart/BookingFormRight";

const BookingForm = () => {

const [getBookingData, setBookingData] = useState({})
const { id } = useParams();
const bookingId = parseInt(id);
const totalData =  useLoaderData('data.json')

  console.log( bookingId ,totalData);

  useEffect(()=>{
    if(totalData){
      const findBookingData  = totalData.find((bookingData) => bookingData.id === bookingId)
      setBookingData(findBookingData ||{})
      // console.log(findBookingData);
    }

  },[id,totalData]);
  console.log(getBookingData)
  // console.log(getBookingData.title)



  return (
    <div className="absolute top-0 text-center h-auto gap-8 lg:h-auto  w-full z-0 grid sm:grid-cols-1 lg:grid-cols-2 py-40  mb-10 "
            style={{
                backgroundImage: 'url(https://i.ibb.co/BZtFhzz/Rectangle-1.png)',
                backgroundSize: 'cover',
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
            }}>
            <div className="absolute inset-0 z-1 bg-black bg-opacity-70"></div>

            <div className="z-0 ml-28">
                <BookingFormLeft getBookingData={getBookingData}></BookingFormLeft>
            </div>
            <div className="z-0 mr-28">
               <BookingFormRight getBookingData={getBookingData}></BookingFormRight>
            </div>

        </div >
  );
};

export default BookingForm;
