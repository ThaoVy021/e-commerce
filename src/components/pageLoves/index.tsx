import React, { useEffect, useState } from 'react'
import { Avatar, Button, List, Skeleton } from 'antd'
import axios from 'axios'
import './index.scss'
import { useDispatch, useSelector } from 'react-redux'

const BASE_URL = process.env.REACT_APP_V_COMMERCE_URL

interface DataType {
  gender?: string
  name: {
    title?: string
    first?: string
    last?: string
  }
  email?: string
  picture: {
    large?: string
    medium?: string
    thumbnail?: string
  }
  nat?: string
  loading: boolean
}

const count = 3
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`

const PageLoves = () => {
  const [products, setProducts] = useState()
  const [initLoading, setInitLoading] = useState(true)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<DataType[]>([])
  const [list, setList] = useState<DataType[]>([])

  //   const productsInCart = useSelector()

  const dispatch = useDispatch()

  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false)
        setData(res.results)
        setList(res.results)
      })
  }, [])

  const onLoadMore = () => {
    setLoading(true)
    setList(
      data.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          name: {},
          picture: {},
        })),
      ),
    )
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        const newData = data.concat(res.results)
        setData(newData)
        setList(newData)
        setLoading(false)
        window.dispatchEvent(new Event('resize'))
      })
  }

  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${BASE_URL}/products`)
      setProducts(result.data)
    }
    fetchData()
  }, [])
  return (
    <div id="pageLoves">
      <div className="container m-auto p-20">
        <List
          className="demo-loadmore-list"
          loading={initLoading}
          itemLayout="horizontal"
          loadMore={loadMore}
          dataSource={list}
          renderItem={(item) => (
            <List.Item actions={[<a key="list-loadmore-edit">Delete</a>]}>
              <Skeleton avatar title={false} loading={item.loading} active>
                <List.Item.Meta
                  avatar={<Avatar src={item.picture.large} />}
                  title={<a href="https://ant.design">{item.name?.last}</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
    </div>
  )
}

export default PageLoves
