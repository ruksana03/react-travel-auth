

    const BookingFormRight = ({ getBookingData }) => {
        const { id, img, origin, title, description } = getBookingData;
        console.log(getBookingData)
        return (
            <div className="z=0 text-black text-left bg-white m-14 p-6">
                <h1 className="text-[#818181] font-semibold">Origin</h1>
                <p className="bg-[#F2F2F2] p-2 font-bold my-2">{origin}</p>
                <h1 className="text-[#818181] font-semibold">Destination</h1>
                <p className="bg-[#F2F2F2] p-2 font-bold my-2">{title}</p>
                <div className="flex gap-4">
                    <div>
                        <h1 className="text-[#818181] font-semibold">From</h1>
                       <input className="bg-[#F2F2F2] p-2 font-bold my-2" type="date" name="" id="" />
                    </div>
                    <div>
                        <h1 className="text-[#818181] font-semibold">To</h1>
                        <input className="bg-[#F2F2F2] p-2 font-bold my-2" type="date" name="" id="" />
                    </div>

                </div>
                <button className="btn w-full bg-[#F9A51A] text-base font-medium">Start Booking</button>
            </div>
        );
    };

    export default BookingFormRight;