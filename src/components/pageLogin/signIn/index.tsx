import { Button, Space, Checkbox, Form, Input } from 'antd'
import { useGoogleAuth } from '../googleLogin'

const onFinish = (values: any) => {
  console.log('Success:', values)
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}

function SignIn() {
  const { signIn } = useGoogleAuth()
  console.log('signIn', signIn)

  //   const signInHandler = async () => {
  //     if (!signIn) return
  //     console.log('a')

  //     const res = await signIn()
  //     console.log(res)
  //   }

  return (
    <div>
      <Space className="flex justify-center buttonLoginGoogle">
        <Button
          type="primary"
          onClick={signIn}
          className="flex justify-center text-lg font-semibold mainColorBg hover:bg-transparent buttonAdd"
        >
          <img
            src={
              'https://itviec.com/assets/google_logo-af373a5e64715e7d4fcdea711f96995f7fd7a49725b3dd8910d4749b74742cb2.svg'
            }
            alt="icon google"
            className="w-8 h-8 mr-4 hover:mainColor align-[0.1em]"
          />
          Sign in with Google
        </Button>
      </Space>

      <div className="w-72 flex items-center m-auto my-4">
        <hr className="secondBoldBg w-full" />
        <div className="px-2">OR</div>
        <hr className="secondBoldBg w-full" />
      </div>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="m-auto w-fit formLogin"
      >
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

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full text-base font-medium mainColorBg hover:bg-transparent buttonAdd"
          >
            Sign in
          </Button>
        </Form.Item>
      </Form>
      <div className="mb-3">
        <div className="text-center">
          Do not have an account?
          <a href="/sign_up" style={{ color: 'blue' }}>
            {''} Sign up now!
          </a>
        </div>
      </div>
    </div>
  )
}

export default SignIn
