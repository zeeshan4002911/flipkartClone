import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import { bannerData } from "../constants/data";
import { styled } from '@mui/material';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const BannerImage = styled('img')`
  width: 100%;
  height: auto;
`

const Banners = () => {
    return (
        <Carousel
            swipeable={false}
            draggable={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            responsive={responsive}>
            {
                bannerData.map(data => (
                    <BannerImage src={data.url} alt={`pic-${data.id}`} />
                ))
            }
        </Carousel>
    )
}

export default Banners;