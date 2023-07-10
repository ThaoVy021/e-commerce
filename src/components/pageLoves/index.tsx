import React from 'react'
import { Avatar, List, Popconfirm, Space, Typography } from 'antd'
import './index.scss'
import { useDispatch, useSelector } from 'react-redux'
import {
  removeInLovesPage,
  selectProductsInLovesPage,
} from '../../store/slices/loves'
import { DeleteOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const { Title } = Typography
interface LovesType {
  Key: React.Key
  title: string
  description: string
  image: string
}

const PageLoves = () => {
  const productsInLovesPage = useSelector(selectProductsInLovesPage)

  const dispatch = useDispatch()

  const navigate = useNavigate()
  const moveToDetailProductPage = (id: number) => {
    navigate(`/pageDetailProduct/${id}`)
  }

  const uniqueItems: LovesType[] = []
  productsInLovesPage.forEach((e: any) => {
    if (uniqueItems.indexOf(e.id) === -1) {
      uniqueItems.push(e.id)
    }
  })

  const loves = uniqueItems.map((uq) => {
    const products = productsInLovesPage.filter((e: any) => e.id === uq)
    return {
      ...products[0],
      key: products[0].id,
    }
  })

  return (
    <div id="pageLoves">
      <div className="container m-auto py-12 px-20 pageLoves">
        <div className="flex justify-center pb-12">
          <Title level={2} className="titleColor">
            Loved Products
          </Title>
        </div>
        <List
          className="cursor-pointer demo-loadmore-list"
          itemLayout="horizontal"
          pagination={{
            pageSize: 5,
          }}
          dataSource={loves}
          renderItem={(item) => (
            <List.Item
              actions={[
                <Space size="middle" className="cursor-pointer">
                  <Popconfirm
                    title="Sure to delete?"
                    okText="Yes"
                    cancelText="No"
                    className="popconfirm deleteHover"
                    onConfirm={() => dispatch(removeInLovesPage(item))}
                  >
                    <DeleteOutlined />
                  </Popconfirm>
                </Space>,
              ]}
              onClick={() => moveToDetailProductPage(item.id)}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.image} />}
                title={
                  <div className="flex justify-start font-semibold titleColor textHover">
                    {item.productName}
                  </div>
                }
                description={item.description}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  )
}

export default PageLoves
