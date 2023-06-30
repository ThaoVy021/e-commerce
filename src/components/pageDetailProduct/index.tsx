import { Col, Row } from 'antd'
import Picture from '../carousel/picture'
import { slideDatas } from '../../mockdata/Slide'
import '../carousel/index.scss'
import './index.scss'
import InforPageDetailProduct from './infor'
import { useLocation } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface DetailProduct {
  id: string
  title: string
  image: string
  description: string
  price: number
}
const BASE_URL = process.env.REACT_APP_V_COMMERCE_URL

function PageDetailProduct() {
  const [products, setProducts] = useState([] as DetailProduct[])
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${BASE_URL}/products`)
      setProducts(result.data)
    }
    fetchData()
  }, [])
  // const carouselProductShow = useSelector(advertisementProducts)
  const location = useLocation()
  const tabId = location.pathname.split('t/').pop()

  return (
    <div id="pageDetailProduct">
      <div className="secondColorBg max-w-full container">
        <div className="headerStyle pageDetailProduct">
          {products.map((detailProduct: any) => {
            if (tabId === String(detailProduct.id)) {
              console.log('detailProduct', detailProduct)
              return (
                <Row
                  className="pb-24 container slideDisplayMobile"
                  // gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                  key={detailProduct.id}
                >
                  <Col span={12} className="colPicture pictureOfDetailPage">
                    <Picture image={detailProduct.category.image} />
                  </Col>
                  <Col span={12} className="colInfor colInforOfDetailPage">
                    <InforPageDetailProduct
                      id={detailProduct.id}
                      title={detailProduct.title}
                      nameCategory={detailProduct.category.name}
                      image={detailProduct.category.image}
                      price={detailProduct.price}
                      rate={slideDatas.data[0].rate}
                      reviews={slideDatas.data[0].reviews}
                      description={detailProduct.description}
                    />
                  </Col>
                </Row>
              )
            }
            return undefined
          })}
        </div>
      </div>
    </div>
  )
}

export default PageDetailProduct
