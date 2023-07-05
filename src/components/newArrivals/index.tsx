import { Button, Col, Row, Typography } from 'antd'
import ImageAnimation from './image'
import InformationNewArrivals from './information'
import './index.scss'
import { useEffect, useState } from 'react'
import React from 'react'

const { Title } = Typography

interface Product {
  id: number
  image: string
  title: string
  price: number
  description: string
}
const BASE_URL = process.env.REACT_APP_V_COMMERCE_URL

async function fetchArrivalsProducts(
  offset: number,
  limit: number,
): Promise<Product[]> {
  const response = await fetch(
    `${BASE_URL}/products?offset=${offset}&limit=${limit}`,
  )
  const rawProducts = await response.json()
  return rawProducts.map((rawProduct: any) => ({
    id: rawProduct.id,
    image: rawProduct.category.image,
    title: rawProduct.title,
    price: rawProduct.price,
    description: rawProduct.description,
  }))
}

const limit = 8

function NewArrivals() {
  const [errMsg, setErrMsg] = useState<String>('')
  const [isLoading, setLoading] = useState(false)
  const [products, setProducts] = useState([] as Product[])
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const listProduct = await fetchArrivalsProducts(offset, limit)
      setProducts([...products, ...listProduct])
      setOffset(offset + 8)
    } catch (err) {
      setErrMsg(errMsg)
    }
  }

  const showMore = () => {
    fetchProducts()
  }

  return (
    <div id="newArrival">
      <div className="container m-auto">
        <div className="flex justify-center">
          <Title level={2} className="titleColor">
            New Arrivals
          </Title>
        </div>

        <div>
          <Row
            className="py-10 px-12 newArrivals"
            gutter={{ xs: 4, sm: 8, md: 16, lg: 24 }}
          >
            {products.map((product: any) => (
              // newArrival.sale === true ?
              <Col
                span={6}
                key={product.id}
                className="relative cursor-pointer textHoverChangeColor setLayout"
              >
                <ImageAnimation
                  {...product}
                  productName={product.title}
                  sales="Hot"
                />
                <InformationNewArrivals {...product} />
              </Col>
              // : (
              //   <Col
              //     span={6}
              //     key={newArrival.id}
              //     className="gutter-row relative cursor-pointer textHoverChangeColor"
              //   >
              //     <ImageAnimation image={newArrival.image} />
              //     <InformationNewArrivals
              //       productName={newArrival.productName}
              //       price={newArrival.price}
              //     />
              //   </Col>
              // )
            ))}

            <Button
              type="primary"
              onClick={showMore}
              className="flex items-center p-6 mt-8 buttonNewProducts"
            >
              <div className="font-bold text-base ">View More</div>
            </Button>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default NewArrivals
