import { cart, sumMoney } from "../../mockdata/Cart";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, Popconfirm, Space } from "antd";
import type { ColumnsType } from "antd/es/table";
import Cart from "./cart";
import "./PageCart.scss";
import { useSelector } from "react-redux";
import { selectProductsInCart } from "../../store/slices/amountProductsInCart";

interface DataCart {
  key: React.ReactNode;
  nameProduct: string;
  price: number;
  amount: number;
  pay: number;
}

function PageCart() {
  const productsInCart = useSelector(selectProductsInCart);
  const uniqueIds: any[] = [];
  productsInCart.forEach((e: any) => {
    if (uniqueIds.indexOf(e.id) === -1) {
      uniqueIds.push(e.id);
    }
  });

  const cart = uniqueIds.map((uq) => {
    const products = productsInCart.filter((e: any) => e.id === uq);
    console.log(products[0]);
    return {
      ...products[0],
      amount: products.length,
    };
  });

  const columnsCart = [
    {
      title: "Sản phẩm",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      width: "12%",
    },
    {
      title: "Số lượng",
      dataIndex: "amount",
      width: "10%",
      key: "amount",
    },
    {
      title: "Thành tiền",
      width: "20%",
      key: "price",
      render: (row: any) => row.price * row.amount,
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <Space size="middle" className="cursor-pointer">
          <Popconfirm title="Sure to delete?" className="popconfirm">
            <DeleteOutlined />
          </Popconfirm>
        </Space>
      ),
      width: "10%",
    },
  ];

  const columnsPay = [
    {
      title: "Tổng cộng",
      dataIndex: "sumPay",
      key: "sumPay",
      render: (row: any) => row.price * row.amount,
    },
  ];

  return (
    <div id="pageCart">
      <div className="container py-8 pageCart">
        <Cart
          cart={cart}
          title={`Bạn có ${uniqueIds.length} sản phẩm trong giỏ hàng`}
          columns={columnsCart}
        />
        <div className="flex justify-between py-14">
          <textarea
            placeholder="Ghi chú"
            className="secondColorBg p-5 w-6/12"
          />
          <div className="border-slate-500 w-5/12 text-center tablePay">
            <Cart
              cart={sumMoney}
              title="Tổng chi phí giỏ hàng"
              columns={columnsPay}
            />
            <Button
              type="primary"
              className=" capitalize my-8 text-base font-medium mainColorBg hover:bg-transparent buttonAdd"
            >
              thanh toán
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageCart;
