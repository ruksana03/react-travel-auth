

const BookingFormLeft = ({getBookingData}) => {
    const { id, img, origin, title, description } = getBookingData;
    console.log(getBookingData)
    return (
        <div className="z=0 text-white text-left">
            <h1 className="text-8xl font-medium mb-6">{title}</h1>
            <p className="my-4">{description}</p>
        </div>
    );
};

export default BookingFormLeft;