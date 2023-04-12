import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import clients1 from "../../assets/img/imageDetail/clients1.png";
import clients2 from "../../assets/img/imageDetail/clients2.png";
import clients3 from "../../assets/img/imageDetail/clients3.png";
import clients4 from "../../assets/img/imageDetail/clients4.png";
import clients5 from "../../assets/img/imageDetail/clients5.png";
import "./index.scss";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const clients = [clients1, clients2, clients3, clients4, clients5];
function Clients() {
  return (
    <div className="flex h-52 clients cursor-pointer">
      <div className="container m-auto">
        <Carousel
          responsive={responsive}
          infinite={true}
          centerMode={true}
          swipeable={true}
          draggable={true}
          removeArrowOnDeviceType={[
            "superLargeDesktop",
            "desktop",
            "tablet",
            "mobile",
          ]}
        >
          {clients.map((client, index) => (
            <img key={index} src={client} alt="client" />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Clients;
