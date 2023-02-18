import { SendOutlined } from "@ant-design/icons";
import { Col, Row, Descriptions, Input, Space } from "antd";
import { newsLetters } from "../../mockdata/NewsLetter";
import "./NewsLetter.scss";

function NewsLetter() {
  return (
    <div>
      <div className="container m-auto">
        <Row
          className="flex justify-between flex-nowrap py-10 px-32 w-full newArrivals newsLetters"
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        >
          {newsLetters.data.map((newsLetter) => (
            <Col
              span={6}
              key={newsLetter.id}
              className="gutter-row capitalize relative cursor-pointer newsLettersStyle"
            >
              <Descriptions
                title={newsLetter.title}
                column={1}
                className="text-lg mb-11"
              >
                {newsLetter.inforDetail.map((getInfor, index) => (
                  <Descriptions.Item
                    key={index}
                    className="cursor-pointer flex justify-start text-sm text-zinc-600"
                  >
                    {getInfor.infor}
                  </Descriptions.Item>
                ))}
              </Descriptions>
            </Col>
          ))}
          <Col
            span={6}
            className="gutter-row capitalize relative lastNewsLetter"
          >
            <Descriptions
              title="newsletter"
              column={1}
              className="text-lg mb-11 cursor-pointer"
            >
              <Descriptions.Item className="flex justify-start text-xs text-zinc-600 lastNewsLetterInfor">
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
  );
}

export default NewsLetter;
