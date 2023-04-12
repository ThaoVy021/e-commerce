import {
  BehanceOutlined,
  FacebookOutlined,
  GoogleOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  UpOutlined,
} from '@ant-design/icons'
import './index.scss'
import { FloatButton } from 'antd'
import { useLocation } from 'react-router-dom'

function Footer() {
  const location = useLocation()
  const footerFixBottom =
    location.pathname !== '/sign_in' &&
    location.pathname !== '/sign_up' &&
    location.pathname !== '/user'

  return (
    <div
      id="contact"
      className={`secondColorBg h-40 flex justify-center items-center ${
        footerFixBottom ? '' : 'fixed bottom-0 w-full'
      }`}
    >
      <div className="container">
        <div className="block align-[4px]">
          <div className="flex justify-center gap-x-4 py-3 cursor-pointer colorFooter">
            <FacebookOutlined className="hover:text-[#e99c2e]" />
            <InstagramOutlined className="hover:text-[#e99c2e]" />
            <LinkedinOutlined className="hover:text-[#e99c2e]" />
            <GoogleOutlined className="hover:text-[#e99c2e]" />
            <BehanceOutlined className="hover:text-[#e99c2e]" />
          </div>

          <span className="flex justify-center colorFooter">
            © 2045 All Rights Reserved | Design by: <a href="/"> ThemeSINE</a>
          </span>
        </div>
      </div>

      <FloatButton.BackTop
        icon={<UpOutlined />}
        className="buttonBackTop mainColorBg mainColor"
      />
    </div>
  )
}

export default Footer
