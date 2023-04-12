import { Typography } from 'antd'
import { useLocation } from 'react-router-dom'
import Logo from '../navbar/logo'
import './index.scss'
import SignIn from './signIn'
import SignUp from './signUp'

const { Title } = Typography

function LoginPage() {
  const location = useLocation()

  return (
    <div className="loginPage">
      <div className="container m-auto">
        <div className="w-full m-auto">
          <Title
            level={3}
            className="w-full flex justify-center px-12 py-4 secondBoldColor"
          >
            Welcome to{' '}
            <div className="ml-4">
              <Logo />
            </div>
          </Title>

          {location.pathname == '/sign_in' ? <SignIn /> : <SignUp />}
        </div>
      </div>
    </div>
  )
}

export default LoginPage
