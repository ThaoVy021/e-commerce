import { Button, DatePicker, Form, Input, Select, Typography } from 'antd'
import moment from 'moment'

const config = {
  rules: [
    { type: 'object' as const, required: true, message: 'Please select time!' },
  ],
}

const onFinish = (success: any) => {
  console.log('success:', success)
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}
const { Title } = Typography
const { Option } = Select

function disabledDate(current: any) {
  return current && current < moment().endOf('day')
}

function InforShip() {
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="84">+84</Option>
      </Select>
    </Form.Item>
  )
  return (
    <div className="inforShip">
      <div className="container m-auto">
        <div className="w-full m-auto">
          <Title
            level={2}
            className="w-full flex justify-center px-12 py-4 secondBoldColor"
          >
            Your Information
          </Title>

          <div>
            <Form
              name="basic"
              initialValues={{ remember: true, prefix: '84' }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              className="m-auto w-fit formInforShip"
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Phone Number"
                name="phoneNumber"
                rules={[
                  {
                    required: true,
                    message: 'Please input your phone number!',
                  },
                ]}
              >
                <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
              </Form.Item>

              <Form.Item
                label="Address"
                name="address"
                rules={[
                  { required: true, message: 'Please input your address!' },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Time delivery"
                name="timeDelivery"
                {...config}
                rules={[
                  {
                    required: true,
                    message: 'Please input your time delivery!',
                  },
                ]}
              >
                <DatePicker
                  showTime
                  format="YYYY-MM-DD HH:mm"
                  style={{ width: '100%' }}
                  disabledDate={disabledDate}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full text-lg font-medium h-11 mainColorBg hover:bg-transparent"
                >
                  Continue
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InforShip
