import { Button, Col, Row, Space } from "antd";
import { collection } from "../../mockdata/Collection";
import "./CollectionDetail.scss";

function CollectionDetail() {
  return (
    <div>
      <div className="banner">
        <div className="container collection">
          <Row className="px-32 inforCollection">
            <Col
              span={12}
              className="block justify-start gutter-row inforCollectionCol"
            >
              <h2 className="capitalize">{collection.data[0].productName}</h2>
              <p className="font-bold">{collection.data[0].description}</p>
              <div className="collectionPrice font-bold mb-8 text-sm">
                <h4 className="capitalize text-white">
                  string from{" "}
                  <span className="mainColor">
                    $ {collection.data[0].price}
                  </span>
                </h4>
              </div>
              <Space className="h-12 leading-10 mainColorBg rounded-lg p-6 cursor-pointer">
                <Button
                  type="primary"
                  className="capitalize shadow-none buttonCollectionDetail"
                >
                  <div className="flex self-center font-bold text-base">
                    view more
                  </div>
                </Button>
              </Space>
            </Col>
            <Col span={12} className="flex justify-center gutter-row"></Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default CollectionDetail;
