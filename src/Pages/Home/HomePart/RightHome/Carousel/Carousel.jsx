import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import CarouselCard from "./CarouselCard";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Carousel = ({ carouselData, setSelected }) => {

    // const [selectedSlideIndex, setSelectedSlideIndex] = useState(null);

    const handleSlideClick = (index) => {
        // setSelectedSlideIndex(index);
        setSelected(index)
    };
    console.log(carouselData);
    return (
        <div>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={150}
                totalSlides={carouselData.length}
                visibleSlides={2}
            >
                <Slider >
                    {carouselData.map((singleCarouselCard, index) => (
                        <Slide
                            style={{ marginRight: '-18px' }}
                            index={index}
                            key={singleCarouselCard.id}
                            onClick={()=>handleSlideClick(singleCarouselCard.id)}
                            >
                            <CarouselCard singleCarouselCard={singleCarouselCard} />
                        </Slide>
                    ))}
                </Slider>
                <div className='flex justify-start gap-2 mb-12'>
                    <ButtonBack className='btn rounded-full bg-white text-black'><FaArrowLeft></FaArrowLeft></ButtonBack>
                    <ButtonNext className='btn rounded-full bg-white text-black'><FaArrowRight></FaArrowRight></ButtonNext>
                </div>
            </CarouselProvider>
        </div>
    );
};

export default Carousel;

