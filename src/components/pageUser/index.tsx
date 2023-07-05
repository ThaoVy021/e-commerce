import { Typography, Form, Input, Button } from 'antd'
import { user } from '../../mockdata/database'
import './index.scss'

const { Title } = Typography

function UserPage() {
  return (
    <div>
      <div className="container m-auto">
        <div className="px-24 m-auto userLayoutMobile">
          <Title
            level={3}
            className="w-full flex justify-start pt-8 secondBoldColor"
          >
            User Information
            <Form.Item className="ml-8">
              <Button
                type="primary"
                className="w-full text-sm font-medium bg-transparent mainColor buttonAdd"
              >
                Edit
              </Button>
            </Form.Item>
          </Title>

          <Form
            name="basic"
            initialValues={{ remember: true }}
            autoComplete="off"
            className="flex-col m-auto w-full formUser"
          >
            <Form.Item label="Name" name="name" className="font-bold">
              <div className="font-normal">{user.data[0].name}</div>
            </Form.Item>
            <Form.Item label="User Name" name="username" className="font-bold">
              <div className="font-normal">{user.data[0].userName}</div>
            </Form.Item>
            <Form.Item label="Email" name="email" className="font-bold">
              <div className="font-normal">{user.data[0].email}</div>
            </Form.Item>
            <Form.Item
              label="Phone Number"
              name="phoneNumber"
              className="font-bold"
            >
              <div className="font-normal">{user.data[0].phoneNumber}</div>
            </Form.Item>
            <Form.Item label="Address" name="address" className="font-bold">
              <div className="font-normal">{user.data[0].address}</div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default UserPage
