import { BehanceOutlined, FacebookOutlined, GoogleOutlined, InstagramOutlined, LinkedinOutlined, UpOutlined } from "@ant-design/icons";
import './Footer.scss';
import { FloatButton  } from 'antd';

function Footer() {
    return (
      <div id="contact" className="secondColorBg h-40 flex justify-center items-center">
        <div className='container block justify-center'>
          <div className="block align-[4px]">
            <div className="flex items-center justify-center gap-x-4 py-3 cursor-pointer colorFooter">
              <FacebookOutlined className="hover:text-[#e99c2e]"/>
              <InstagramOutlined className="hover:text-[#e99c2e]" />
              <LinkedinOutlined className="hover:text-[#e99c2e]" />
              <GoogleOutlined className="hover:text-[#e99c2e]" />
              <BehanceOutlined className="hover:text-[#e99c2e]" />
            </div>

            <span className="flex items-center justify-center colorFooter">© 2045 All Rights Reserved | Design by:  <a href="/"> ThemeSINE</a> </span>
          </div>
        </div>


        <FloatButton.BackTop icon={<UpOutlined />} className="buttonBackTop mainColorBg mainColor"/>
      </div>
    );
}

export default Footer;