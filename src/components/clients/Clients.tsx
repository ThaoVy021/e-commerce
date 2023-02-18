import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import clients1 from "../../assets/img/clients1";
import clients2 from "../../assets/img/clients2";
import clients3 from "../../assets/img/clients3";
import clients4 from "../../assets/img/clients4";
import clients5 from "../../assets/img/clients5";
import './Clients.scss';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  }
};
function Clients() {
  return (
    <div className='flex h-52 items-center clients cursor-pointer'>
      <div className='container m-auto'>
        <Carousel responsive={responsive} infinite={true} centerMode={true} swipeable={true} draggable={true} removeArrowOnDeviceType={["superLargeDesktop", "desktop", "tablet", "mobile"]}>
          <img src={clients1} alt="client" />
          <img src={clients2} alt="client" />
          <img src={clients3} alt="client" />
          <img src={clients4} alt="client" />
          <img src={clients5} alt="client" />
        </Carousel>
      </div>
    </div>
  
  );
}

export default Clients;