import { Typography, Form, Input, Button } from 'antd'
import { user } from '../../mockdata/database'
import './index.scss'

const { Title } = Typography

function UserPage() {
  return (
    <div>
      <div className="container m-auto">
        <div className="w-96 m-auto userLayoutMobile">
          <Title
            level={3}
            className="w-full flex justify-between px-12 pt-8 secondBoldColor"
          >
            User Information
            <Form.Item>
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
            className="flex-col m-auto w-full px-12 formUser"
          >
            <Form.Item label="Name" name="name" className="font-bold">
              <span className="font-normal">{user.data[0].name}</span>
            </Form.Item>
            <Form.Item label="User Name" name="username" className="font-bold">
              <span className="font-normal">{user.data[0].userName}</span>
            </Form.Item>
            <Form.Item label="Email" name="email" className="font-bold">
              <span className="font-normal">{user.data[0].email}</span>
            </Form.Item>
            <Form.Item
              label="Phone Number"
              name="phoneNumber"
              className="font-bold"
            >
              <span className="font-normal">{user.data[0].phoneNumber}</span>
            </Form.Item>
            <Form.Item label="Address" name="address" className="font-bold">
              <span className="font-normal">{user.data[0].address}</span>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default UserPage
