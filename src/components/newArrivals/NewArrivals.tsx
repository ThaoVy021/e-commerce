import { Button, Col, Row } from "antd";
import ImageAnimation from "./image";
// import {useDispatch} from 'react-redux'
import InformationNewArrivals from "./information";
import "./NewArrivals.scss";
import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { fetchAllProducts, fetchProducts, inforProductsNewArrivals } from "../../store/slices/allProducts";
// import axios from "axios";

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
}

async function fetchArrivalsProducts(offset: number, limit: number): Promise<Product[]> {
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`
  );
  const rawProducts = await response.json();
  return rawProducts.map((rawProduct: any) => ({
    id: rawProduct.id,
    image: rawProduct.category.image,
    title: rawProduct.title,
    price: rawProduct.price,
  }))
}                               

const limit = 8

function NewArrivals() {
  const [errMsg, setErrMsg] = useState("")
  const [isLoading, setLoading] = useState(false)
  const [products, setProducts] = useState([] as Product[])
  const [offset, setOffset]=  useState(0)

  useEffect(() => {
    setLoading(true)
    fetchArrivalsProducts(offset, limit)
      .then(arrivalProducts => {
        setProducts(arrivalProducts)
      })
      .catch(err => {
        setErrMsg(err)
      })
      .finally(() =>{
        setLoading(false)
      })
  }, [])

  const showMore = async () => {
    const newOffset = offset + 8
    const newArrivalProducts = await fetchArrivalsProducts(newOffset, limit)
    setProducts([...products, ...newArrivalProducts])
    setOffset(newOffset)
  }

  return (
    <div id="newArrival">
      <div className="container m-auto">
        <div className="flex justify-center">
          <h1 className="capitalize text-4xl font-semibold text-gray-500">
            new arrivals
          </h1>
        </div>

        <div>
          <Row
            className="flex justify-around py-10 px-24 w-full newArrivals"
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            {products.map((product: any) =>
            // newArrival.sale === true ? 
              (
                <Col
                  span={6}
                  key={product.id}
                  className="gutter-row relative cursor-pointer textHoverChangeColor"
                >
                  <ImageAnimation {...product} productName={product.title} sales="Hot" />
                  <InformationNewArrivals
                    productName={product.title} 
                    price={product.price}
                  />
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
              ) 
            )}

            <Button type="primary" onClick={showMore} className='flex justify-center items-center capitalize p-6 mt-8 buttonNewProducts'>
              <div className='flex justify-center font-bold text-base '>view more</div>
            </Button>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default NewArrivals;