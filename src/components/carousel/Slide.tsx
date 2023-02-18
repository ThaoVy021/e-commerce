import { Col, Row, Carousel } from "antd";
import Picture from "./picture";
import InforCarousel from "./infor";
import "./Slide.scss";
import { advertisementProducts } from "../../store/slices/allProducts";
import { useSelector } from "react-redux";

function Slide() {
  const carouselProductShow = useSelector(advertisementProducts);

  return (
    <div id="home" className="bg-slate-100">
      <Carousel
        autoplay
        dots={{ className: "dots" }}
        className="flex justify-center"
      >
        {carouselProductShow.map((productShow: any) => (
          <div key={productShow.idAdvertisementProducts}>
            <div className="headerStyle">
              <Row
                className="flex justify-center pb-10 z-10 w-full container slideDisplayMobile"
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
              >
                <Col
                  span={14}
                  className="flex justify-center gutter-row colInfor"
                >
                  <InforCarousel
                    id={productShow.idAdvertisementProducts}
                    image={productShow.imageAdvertisementProducts}
                    productName={productShow.titleAdvertisementProducts}
                    description={productShow.describeAdvertisementProducts}
                    price={productShow.priceAdvertisementBigProducts}
                    oldPrice={productShow.priceAdvertisementBigProducts * 1.5}
                  />
                </Col>
                <Col
                  span={10}
                  className="flex justify-center gutter-row colPicture"
                >
                  {" "}
                  <Picture image={productShow.imageAdvertisementProducts} />
                </Col>
              </Row>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Slide;
