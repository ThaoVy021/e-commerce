import { Button, Form, Input } from 'antd'

const onFinish = (values: any) => {
  console.log('Success:', values)
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}

function SignUp() {
  return (
    <div>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="m-auto w-fit formLogin"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full text-base font-medium mainColorBg hover:bg-transparent buttonAdd"
          >
            Sign Up
          </Button>
        </Form.Item>
      </Form>
      <div className="mb-3">
        <div className="text-center">
          Already have an account?
          <a href="/sign_in" style={{ color: 'blue' }}>
            {''} Sign in now!
          </a>
        </div>
      </div>
    </div>
  )
}

export default SignUp
