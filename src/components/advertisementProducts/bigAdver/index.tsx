import './index.scss'
import { Card, Col, Row, Button, Space, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import React from 'react'
const { Title, Paragraph } = Typography

interface PropsBigAdver {
  id: number
  image: string
  title: string
  description: string
  price: number
}

function BigAdver(props: PropsBigAdver) {
  const navigate = useNavigate()
  const moveToDetailProductPage = (id: number) => {
    navigate(`/pageDetailProduct/${id}`)
  }

  return (
    <Card
      hoverable
      className="secondColorBg cursor-pointer h-full advertisementProducts"
    >
      <Row
        className="z-10 container"
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <Col span={12} className="flex">
          <div className="m-auto">
            <img src={props.image} alt="product" className="w-56" />
          </div>
        </Col>
        <Col span={12} className="bigAdverMobile">
          <div className="p-4 inforAdvertisementProducts">
            <div className="titleInforAdvertisementProducts">
              <Title level={4} className="capitalize titleColor">
                {props.title}
              </Title>
            </div>
            <Paragraph className="text-ellipsis overflow-hidden pt-4 text-sm secondLightColor w-46 h-18">
              {props.description}
            </Paragraph>
            <div className="flex pt-2 textSale">
              <div className="titleColor font-medium">Sales Start from</div>
              <div className="mainColor pl-2 font-medium">$ {props.price}</div>
            </div>
            <Space className="mt-6">
              <Button
                type="primary"
                onClick={() => moveToDetailProductPage(props.id)}
                className="flex p-5 text-base font-medium border-slate-500 hover:secondColor discoverMore"
              >
                <div className="self-center titleColor hover:secondColor discoverMoreHover">
                  Discover More
                </div>
              </Button>
            </Space>
          </div>
        </Col>
      </Row>
    </Card>
  )
}

export default BigAdver
