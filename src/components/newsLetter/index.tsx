import { SendOutlined } from '@ant-design/icons'
import { Col, Row, Descriptions, Input, Space } from 'antd'
import { newsLetters } from '../../mockdata/NewsLetter'
import './index.scss'

function NewsLetter() {
  return (
    <div>
      <div className="container m-auto">
        <Row
          className="py-10 px-32 newArrivals newsLetters"
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        >
          {newsLetters.data.map((newsLetter) => (
            <Col
              span={6}
              key={newsLetter.id}
              className="capitalize relative cursor-pointer newsLettersStyle"
            >
              <Descriptions
                title={newsLetter.title}
                column={1}
                className="mb-11"
              >
                {newsLetter.inforDetail.map((getInfor, index) => (
                  <Descriptions.Item
                    key={index}
                    className="cursor-pointer secondLightColor"
                  >
                    {getInfor.infor}
                  </Descriptions.Item>
                ))}
              </Descriptions>
            </Col>
          ))}
          <Col
            span={6}
            className="capitalize relative lastNewsLetter newsLettersStyle"
          >
            <Descriptions
              title="newsletter"
              column={1}
              className="mb-11 cursor-pointer"
            >
              <Descriptions.Item className="secondLightColor lastNewsLetterInfor">
                Subscribe to get latest news, update and information.
              </Descriptions.Item>
              <Space direction="vertical">
                <Input
                  placeholder="Enter Email here..."
                  suffix={<SendOutlined className="mainColor" />}
                />
              </Space>
            </Descriptions>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default NewsLetter
