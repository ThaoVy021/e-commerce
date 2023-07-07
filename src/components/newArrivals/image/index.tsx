import {
  ShoppingCartOutlined,
  HeartOutlined,
  ExpandOutlined,
} from '@ant-design/icons'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToCart, addToLovesPage } from '../../../store/slices/cart'

interface PropsImageAnimation {
  id: number
  sales: string
  image: string
  amountAdd?: number
}

function ImageAnimation(props: PropsImageAnimation) {
  const navigate = useNavigate()
  const moveToDetailProductPage = (id: number) => {
    navigate(`/pageDetailProduct/${id}`)
  }
  const dispatch = useDispatch()
  const [amountAdd, setAmountAdd] = useState(1)

  const handleAmountProductsInCart = () => {
    props = { ...props, amountAdd }
    dispatch(addToCart(props))
  }

  const handleProductsInLovesPage = () => {
    props = { ...props }
    dispatch(addToLovesPage(props))
  }

  return (
    <div className="secondColorBg backgroundImg">
      <img src={props.image} alt="new arrivals" />
      <div
        className="backgroundImgHover"
        onClick={() => moveToDetailProductPage(props.id)}
      ></div>
      <div
        className={props.sales ? 'capitalize font-semibold textSale' : 'hidden'}
      >
        {props.sales}
      </div>
      <div className="newArrivalCart flex justify-between">
        <div
          className="flex justify-center"
          onClick={handleAmountProductsInCart}
        >
          <ShoppingCartOutlined className="cursor-pointer flex flex-col justify-center px-3" />
          <span className="flex items-center text-xs">Add To Cart</span>
        </div>
        <div className="flex items-center">
          <HeartOutlined className="mr-4" onClick={handleProductsInLovesPage} />
          <ExpandOutlined className="mr-4" />
        </div>
      </div>
    </div>
  )
}

export default ImageAnimation
