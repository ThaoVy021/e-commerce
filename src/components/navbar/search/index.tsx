import { SearchOutlined } from "@ant-design/icons";
import {Input} from "antd";
import './Search.scss';

function Search() {
    return (
        <div className='bg-[#333] py-2.5 showSearch'>
            <div className='container searchInput'>
                <Input  prefix={<SearchOutlined className="site-form-item-icon" />} allowClear autoFocus defaultValue="Search" placeholder="Search" />
            </div>
        </div>
    );
  }
  
export default Search;