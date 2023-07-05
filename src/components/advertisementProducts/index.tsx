import { Col, Row, Skeleton } from 'antd'
import BigAdver from './bigAdver'
import SmallAdver from './smallAdver'
import './index.scss'
import { useDispatch, useSelector } from 'react-redux'
import {
  advertisementProducts,
  fetchAllProducts,
} from '../../store/slices/allProducts'
import { useEffect } from 'react'

function AdvertisementProducts() {
  const dispatch = useDispatch()
  const advertisementProductShow = useSelector(advertisementProducts)

  useEffect(() => {
    dispatch(fetchAllProducts() as any)
  }, [])

  return (
    <div className="flex justify-center">
      {advertisementProductShow.length === 0 ? (
        <Skeleton />
      ) : (
        <Row
          className="p-12 justify-center container AdvertisementProducts"
          gutter={{ xs: 4, sm: 8, md: 12, lg: 24 }}
        >
          <Col
            span={6}
            className="flex justify-center AdvertisementProductsIpad"
          >
            <SmallAdver
              id={advertisementProductShow[0].id}
              image={advertisementProductShow[0].image}
              title={advertisementProductShow[0].title}
              description={advertisementProductShow[0].description}
            />
          </Col>
          <Col
            span={12}
            className="flex justify-center AdvertisementProductsIpad AdvertisementBigProducts"
          >
            <BigAdver
              id={advertisementProductShow[1].id}
              title={advertisementProductShow[1].title}
              description={advertisementProductShow[1].description}
              price={advertisementProductShow[1].price}
              image={advertisementProductShow[1].image}
            />
          </Col>
          <Col
            span={6}
            className="flex justify-center AdvertisementProductsIpad"
          >
            <SmallAdver
              id={advertisementProductShow[2].id}
              image={advertisementProductShow[2].image}
              title={advertisementProductShow[2].title}
              description={advertisementProductShow[2].description}
            />
          </Col>
        </Row>
      )}
    </div>
  )
}

export default AdvertisementProducts
