import BookingForm from "./BookingForm/BookingForm";
import Carousel from "./Carousel/Carousel";


const RightHome = ({carouselData , setSelected, showForm,id}) => {
    console.log(setSelected,id)


console.log(showForm)
    console.log(carouselData)
    return (
        <div className=" text-white z-0">
            {
              !showForm?(<Carousel carouselData={carouselData} setSelected={setSelected}></Carousel>):(<BookingForm></BookingForm>)
            }
            
            
        </div>
    );
};

export default RightHome;