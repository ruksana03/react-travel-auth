const CarouselCard = ({ singleCarouselCard }) => {
    // console.log(singleCarouselCard)
    const { id, img, title } = singleCarouselCard;

    return (

        <div className="relative ml-10 bg-red-600 text-white hover:border-4 border-[#FBBC04] rounded-3xl ">
            <img className="h-full" src={img} alt="" />
            <p className="absolute bottom-2 left-4">{title}</p>
        </div>
    );
};

export default CarouselCard;
