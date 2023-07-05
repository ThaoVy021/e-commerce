import { Button, Rate, Space, Typography } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
import { Radio, Collapse } from 'antd'
import './index.scss'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../store/slices/cart'

const { Panel } = Collapse
const { Title } = Typography
interface PropsInforPageDetailProduct {
  rate: any
  title: string
  price: number
  reviews: number
  description: string
  image: string
  id?: string
  amountAdd?: number
  nameCategory: string
}

function InforPageDetailProduct(props: PropsInforPageDetailProduct) {
  const [amountAdd, setamountAdd] = useState<number>(1)

  const dispatch = useDispatch()

  const handleDecrement = () => {
    setamountAdd(amountAdd - 1)
  }
  const handleIncrement = () => {
    setamountAdd(amountAdd + 1)
  }

  const onChange = (key: string | string[]) => {}
  return (
    <div className="w-full pt-8 inforCarousel inforDetailPage">
      <div className="flex flex-col items-start inforDetailPageMobile">
        <Title level={2} className="capitalize titleColor pt-6">
          {props.title}
        </Title>
        <span className="flex text-base titleColor">
          Category:{' '}
          <div className="items-center font-medium text-lg pl-4">
            {props.nameCategory}
          </div>
        </span>
        <div className="flex items-center pt-4 titleColor">
          Starts from
          <div className="font-medium text-lg pl-4">
            $ {props.price.toLocaleString('en-US')}
          </div>
        </div>
        <div className="pt-4 ">
          <Rate
            allowHalf
            disabled
            defaultValue={props.rate}
            className="text-sm pr-4"
          />
          <span className="titleColor">({props.reviews} Review)</span>
        </div>
        <div className="flex items-center pt-4 titleColor">
          Amount:
          <div className="font-medium text-lg pl-4">{amountAdd}</div>
        </div>
        <Radio.Group className="py-5">
          <Radio.Button
            onClick={handleDecrement}
            disabled={amountAdd === 1}
            value="decrement"
          >
            -
          </Radio.Button>
          <Radio.Button value={amountAdd}>{amountAdd}</Radio.Button>
          <Radio.Button onClick={handleIncrement} autoFocus value="increment">
            +
          </Radio.Button>
        </Radio.Group>

        <Collapse onChange={onChange} ghost className="text-start">
          <Panel header="Description" key="1">
            <p>{props.description}</p>
          </Panel>
        </Collapse>
        <Space className="my-8 styleMobile buttonAddDetailPage">
          <Button
            type="primary"
            onClick={() => {
              props = { ...props, amountAdd }
              dispatch(addToCart(props))
            }}
            className="text-base font-medium mainColorBg hover:bg-transparent buttonAdd "
          >
            <PlusCircleOutlined className="hover:mainColor align-[0.1em]" />
            Add To Cart
          </Button>
        </Space>
      </div>
    </div>
  )
}

export default InforPageDetailProduct
