import InformationNewArrivals from '../newArrivals/information'
import { featuredProducts } from '../../mockdata/FeaturedProducts'
import { Col, Row, Rate, Typography } from 'antd'
import ImageFeatureProducts from './image'
import './index.scss'

const { Title } = Typography

function FeaturedProducts() {
  return (
    <div id="features">
      <div className="container m-auto">
        <div className="flex justify-center">
          <Title level={2} className="secondBoldColor p-8 pt-24">
            Featured Products
          </Title>
        </div>

        <Row
          className="py-10 px-12 newArrivals"
          gutter={{ xs: 4, sm: 8, md: 12, lg: 24 }}
        >
          {featuredProducts.data.map((featuredProduct) => (
            <Col
              span={6}
              key={featuredProduct.id}
              className="relative cursor-pointer capitalize textHoverChangeColor setLayout"
            >
              <ImageFeatureProducts image={featuredProduct.image} />
              <div className="flex justify-center pt-4 rateFeaturedProducts">
                <Rate
                  disabled
                  defaultValue={featuredProduct.rate}
                  className="text-sm pr-4"
                />
                <span className="text-zinc-400">
                  ({featuredProduct.reviews} Review)
                </span>
              </div>
              <InformationNewArrivals
                id={featuredProduct.id}
                title={featuredProduct.productName}
                price={featuredProduct.price}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default FeaturedProducts
