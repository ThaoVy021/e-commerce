import InformationNewArrivals from "../newArrivals/information";
import { featuredProducts } from '../../mockdata/FeaturedProducts';
import { Col, Row, Rate  } from 'antd';
import ImageFeatureProducts from "./image";

function FeaturedProducts() {
    return (
      <div id="features">
        <div className='container m-auto'>
          <div className='flex justify-center'>
            <h1 className='capitalize text-3xl font-semibold text-gray-500 p-8 pt-24'>featured products</h1>
          </div>
     
          <Row className="flex justify-around py-10 px-24 w-full newArrivals" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {
              featuredProducts.data.map(featuredProduct =>  (
                <Col span={6} key={featuredProduct.id} className="gutter-row relative cursor-pointer capitalize textHoverChangeColor">
                  <ImageFeatureProducts image={featuredProduct.image} />
                  <div className="flex justify-center px-4 pt-4 ">
                    <Rate disabled defaultValue={featuredProduct.rate} className="text-sm pr-4" />
                    <span className="text-zinc-400 flex justify-center">({featuredProduct.reviews} Review)</span>
                  </div>
                  <InformationNewArrivals productName={featuredProduct.productName} price={featuredProduct.price} />
                </Col>
              ))
            }
          </Row>
        </div>
      </div>
    );
}

export default FeaturedProducts;