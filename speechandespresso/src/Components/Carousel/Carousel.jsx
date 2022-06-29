import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";

export default function CarouselComponent(props) {
    let imgUrls = props.imgs;

    return (
        <div className="carousel-wrapper carousel-container">
            <Carousel showThumbs={false} showArrows={false} showStatus={false}>
                {imgUrls.map((url, index) => (
                    <div key={index}>
                        <img alt="first" src={url} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
