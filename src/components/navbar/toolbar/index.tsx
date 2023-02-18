import "./Toolbar.scss";
import {
  SearchOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Button, MenuProps, Badge, Space, Popover } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectProductsInCart,
  selectCount,
  selectTotalPrice
} from "../../../store/slices/amountProductsInCart";

function Toolbar(props: any) {
  const navigate = useNavigate();
  const moveToCart = () => navigate(`/PageCart`);

  const showAmoutProduct = useSelector(selectCount);
  const productsInCart = useSelector(selectProductsInCart);
  const totalPrice = useSelector(selectTotalPrice);

  const buttonObject = (
    <div key={99999999} className="flex justify-between text-start w-52 mt-6">
      <div className="text-[#6f6f6f] text-xs font-bold flex justify-center items-center">
        Total: $ {totalPrice}
      </div>
      <Button
        type="primary"
        className=" capitalize text-base font-medium mainColorBg hover:bg-transparent buttonAdd"
        onClick={moveToCart}
      >
        <Link to="/PageCart"></Link>
        view cart
      </Button>
    </div>
  );

  const uniqueIds: any[] = [];
  productsInCart.forEach((e: any) => {
    if (uniqueIds.indexOf(e.id) === -1) {
      uniqueIds.push(e.id);
    }
  }); 

  const items = uniqueIds
    .map((uniqueId: any) => {
      const product = productsInCart.find((p: any) => p.id === uniqueId);

      return (
        <div key={product.id} className="flex justify-around w-52 mt-4 cursor-pointer">
          <div className="w-max">
            <img src={product.image} alt="chair" className="w-12 h-auto pt-2" />
          </div>
          <div className="block pl-4">
            <div className="text-[#6f6f6f] text-sm font-bold capitalize">
              {product.productName}
            </div>
            <div className="text-[#a09e9c] text-xs">
              {productsInCart.filter((e: any) => e.id === product.id).length} X
              - $ {product.price}
            </div>
          </div>
          <div className="top-0">x</div>
        </div>
      );
    })
    .concat(buttonObject);

  return (
    <div className="flex flex-row justify-around text-lg">
      <SearchOutlined
        className="cursor-pointer flex flex-col justify-center px-2 text-[#a9a6a6] hover:text-[#e99c2e]"
        onClick={() => props.handleSearch()}
      />
      <SettingOutlined className="cursor-pointer flex flex-col justify-center px-2 text-[#a9a6a6] hover:text-[#e99c2e]" />
      <Space size="middle" className="mt-2 iconCart">
        <Badge size="default" count={showAmoutProduct}>
          <Popover placement="bottomLeft" content={items}>
            <ShoppingCartOutlined className="cursor-pointer flex flex-col justify-center px-2 text-[#a9a6a6] hover:text-[#e99c2e] text-xl" />
          </Popover>
        </Badge>
      </Space>
    </div>
  );
}

export default Toolbar;
