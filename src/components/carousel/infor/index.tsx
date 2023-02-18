import { Button, Space } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import "./Information.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  incrementProductsInCart,
  addToCart,
} from "../../../store/slices/amountProductsInCart";

function InforCarousel(props: any) {
  const navigate = useNavigate();
  const moveToDetailProductPage = (id: any) => {
    navigate(`/pageDetailProduct/${id}`);
  };

  const dispatch = useDispatch();

  return (
    <div className="w-full items-start pt-20 pl-28 inforCarousel">
      <div className="flex flex-col justify-start items-start">
        <h4 className="capitalize text-gray-400 text-2xl">
          great design collection
        </h4>
        <h1 className="capitalize text-gray-500 text-4xl pt-6">
          {props.productName}
        </h1>
        <p className="text-ellipsis overflow-hidden pt-8 text-base text-left leading-8 text-stone-400">
          {props.description}
        </p>
        <div className="flex flex-row justify-start items-start pt-4">
          <div className="flex flex-row justify-start items-start font-medium price">
            $ {props.price}
          </div>
          <del className="text-stone-400 pl-4 font-medium">
            $ {props.oldPrice}
          </del>
        </div>
        <Space className="my-8 styleMobile">
          <Button
            type="primary"
            onClick={() => {
              dispatch(incrementProductsInCart());
              dispatch(addToCart(props));
            }}
            className="capitalize text-base font-medium mainColorBg hover:bg-transparent buttonAdd"
          >
            <PlusCircleOutlined className="hover:text-orange-500 align-[0.1em]" />
            add to cart
          </Button>

          <Button
            type="primary"
            onClick={() => moveToDetailProductPage(props.id)}
            className="capitalize text-base font-medium secondColorBg mainColor border-slate-100 hover:border-[#e99c2e] buttonMore"
          >
            more info
          </Button>
        </Space>
      </div>
    </div>
  );
}

export default InforCarousel;
