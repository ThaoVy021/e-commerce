import { SearchOutlined } from "@ant-design/icons";
import { Input, Popover, Space } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

interface PropsSearch {
  id: number;
  title: string;
  image: string;
  price: number;
  handleSearch: any;
  category: any;
}

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();
  const moveToDetailProductPage = (id: number) => {
    navigate(`/pageDetailProduct/${id}`);
  };

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
  };
  const BASE_URL = process.env.REACT_APP_V_COMMERCE_URL;

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios(`${BASE_URL}/products`);
      const results = data.data.filter((e: any) =>
        e.title.includes(searchTerm)
      );
      setSearchResults(results);
    };
    fetchData();
  }, [searchTerm]);

  const content = searchResults.slice(0, 7).map((searchResult: PropsSearch) => {
    return (
      <div
        key={searchResult.id}
        className="flex w-full mt-8 cursor-pointer"
        onClick={() => moveToDetailProductPage(searchResult.id)}
      >
        <div className="w-max">
          <img
            src={searchResult.category.image}
            alt="chair"
            className="w-12 h-auto"
          />
        </div>
        <div className=" pl-4">
          <div className="text-[#6f6f6f] text-sm font-bold capitalize">
            {searchResult.title}
          </div>
          <div className="text-[#a09e9c] text-xs">
            $ {searchResult.price.toLocaleString("en-US")}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="bg-[#333] py-2.5 showSearch">
        <div className="container searchInput">
          <Space wrap>
            <Popover
              content={content}
              title="Search results..."
              trigger="click"
            >
              <Input
                prefix={<SearchOutlined className="site-form-item-icon" />}
                allowClear
                autoFocus
                value={searchTerm}
                onChange={handleChange}
                placeholder="Are you searching..."
              />
            </Popover>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default Search;
