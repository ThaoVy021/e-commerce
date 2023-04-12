import { Col, Row, Carousel } from "antd";
import Picture from "./picture";
import InforCarousel from "./infor";
import "./index.scss";
import { advertisementProducts } from "../../store/slices/allProducts";
import { useSelector } from "react-redux";
interface InformationCarouselProductShow {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}

function Slide() {
  const carouselProductShow = useSelector(advertisementProducts);

  return (
    <div id="home" className="secondColorBg">
      <Carousel
        autoplay
        dots={{ className: "dots" }}
        className="flex justify-center customizeDots"
      >
        {carouselProductShow.map(
          (productShow: InformationCarouselProductShow) => (
            <div key={productShow.id}>
              <div className="headerStyle">
                <Row
                  className="pb-10 z-10 w-full container slideDisplayMobile"
                  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                >
                  <Col span={14} className="colInfor">
                    <InforCarousel
                      {...productShow}
                      oldPrice={productShow.price * 1.5}
                    />
                  </Col>
                  <Col span={10} className="colPicture">
                    <Picture image={productShow.image} />
                  </Col>
                </Row>
              </div>
            </div>
          )
        )}
      </Carousel>
    </div>
  );
}

export default Slide;
