import { Col, Row, Skeleton } from "antd";
import BigAdver from "./bigAdver";
import SmallAdver from "./smallAdver";
import "./AdvertisementProducts.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  advertisementProducts,
  fetchAllProducts,
} from "../../store/slices/allProducts";
import { useEffect } from "react";

function AdvertisementProducts() {
  const dispatch = useDispatch();
  const advertisementProductShow = useSelector(advertisementProducts);

  useEffect(() => {
    dispatch(fetchAllProducts() as any);
  }, []);

  return (
    <div className="flex justify-center">
      {advertisementProductShow == 0 ? (
        <Skeleton />
      ) : (
        <Row
          className="flex justify-around py-24 px-12 container AdvertisementProducts"
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        >
          <Col
            span={6}
            className="flex justify-center gutter-row AdvertisementProductsIpad"
          >
            <SmallAdver
              image={advertisementProductShow[0].imageAdvertisementProducts}
              productName={
                advertisementProductShow[0].titleAdvertisementProducts
              }
              description={
                advertisementProductShow[0].describeAdvertisementProducts
              }
            />
          </Col>
          <Col
            span={12}
            className="flex justify-center gutter-row AdvertisementProductsIpad"
          >
            <BigAdver
              productName={
                advertisementProductShow[1].titleAdvertisementProducts
              }
              description={
                advertisementProductShow[1].describeAdvertisementProducts
              }
              price={advertisementProductShow[1].priceAdvertisementBigProducts}
              image={advertisementProductShow[1].imageAdvertisementProducts}
            />
          </Col>
          <Col
            span={6}
            className="flex justify-center gutter-row AdvertisementProductsIpad"
          >
            <SmallAdver
              image={advertisementProductShow[2].imageAdvertisementProducts}
              productName={
                advertisementProductShow[2].titleAdvertisementProducts
              }
              description={
                advertisementProductShow[2].describeAdvertisementProducts
              }
            />
          </Col>
        </Row>
      )}
    </div>
  );
}

export default AdvertisementProducts;
