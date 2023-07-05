import { Button, Col, Row, Space, Typography } from 'antd'
import { collection } from '../../mockdata/Collection'
import './index.scss'

const { Title, Paragraph } = Typography

function CollectionDetail() {
  return (
    <div>
      <div className="banner">
        <div className="container collection">
          <Row className="px-20 inforCollection">
            <Col span={12} className="inforCollectionCol">
              <Title level={2} className="capitalize">
                {collection.data[0].productName}
              </Title>
              <Paragraph className="font-bold text-white">
                {collection.data[0].description}
              </Paragraph>
              <div className="collectionPrice font-bold mb-8">
                <div className="text-white">
                  String From{' '}
                  <span className="mainColor">
                    $ {collection.data[0].price}
                  </span>
                </div>
              </div>
              <Space className="h-12 leading-10 mainColorBg rounded-lg p-6 cursor-pointer">
                <Button
                  type="primary"
                  className="shadow-none buttonCollectionDetail"
                >
                  <div className="font-bold text-base">View More</div>
                </Button>
              </Space>
            </Col>
            <Col span={12}></Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default CollectionDetail
