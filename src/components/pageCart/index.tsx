import React, { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, message, Popconfirm, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  removeInCarts,
  selectProductsInCart,
  removeSelectedItems,
} from "../../store/slices/cart";

interface CartType {
  Key: React.Key;
  title: string;
  price: number;
  amountAdd: number;
}

function PageCart() {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const productsInCart = useSelector(selectProductsInCart);

  const dispatch = useDispatch();

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  const uniqueItems: CartType[] = [];
  productsInCart.forEach((e: any) => {
    if (uniqueItems.indexOf(e.id) === -1) {
      uniqueItems.push(e.id);
    }
  });
  const carts = uniqueItems.map((uq) => {
    const products = productsInCart.filter((e: any) => e.id === uq);
    return {
      ...products[0],
      amountAdd: products
        .map((product: any) => {
          return product.amountAdd;
        })
        .reduce((a: number, b: number) => a + b, 0),
      key: products[0].id,
    };
  });

  const selectedCarts = carts.filter((item) => {
    return selectedRowKeys.find((index) => item.id === index);
  });
  const totalPriceSelected = selectedCarts.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.amountAdd,
    0
  );

  const idItemsCart = carts.map((id) => id.id);

  const deleteProduct = (removeItem: any) => {
    dispatch(removeInCarts({ id: removeItem.id, amount: removeItem.amount }));
    message.open({
      type: "success",
      content: "Deleted",
    });
  };

  const chooseAllProduct = () => {
    return hasSelected ? selectedRowKeys : setSelectedRowKeys(idItemsCart);
  };

  const deletProductChoosed = (removeAllItem: any) => {
    return (
      dispatch(
        removeSelectedItems({
          removedItems: selectedRowKeys,
          amount: removeAllItem.filter((item: any) => item.amount),
        })
      ),
      setSelectedRowKeys([]),
      message.open({
        type: "success",
        content: `Deleted ${selectedRowKeys.length} Products`,
      })
    );
  };

  const columnsCart: ColumnsType<CartType> = [
    {
      title: "Product",
      dataIndex: "title",
      key: "title",
      sortDirections: ["descend", "ascend"],
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: "12%",
      sorter: (a, b) => a.price - b.price,
      render: (value) => {
        return <span>$ {value.toLocaleString("en-US")}</span>;
      },
    },
    {
      title: "Amount",
      dataIndex: "amountAdd",
      width: "10%",
      key: "amountAdd",
      sorter: (a, b) => a.amountAdd - b.amountAdd,
    },
    {
      title: "Pay",
      width: "20%",
      key: "totalPrice",
      render: (row: any) => {
        return (
          <span>$ {row.price * row.amountAdd.toLocaleString("en-US")}</span>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "x",
      render: (row, record) => (
        <Space size="middle" className="cursor-pointer">
          <Popconfirm
            title="Sure to delete?"
            okText="Yes"
            cancelText="No"
            className="popconfirm"
            onConfirm={() => deleteProduct(record)}
          >
            <DeleteOutlined />
          </Popconfirm>
        </Space>
      ),
      width: "10%",
    },
  ];

  return (
    <div id="pageCart">
      <div className="block m-auto container py-8 px-4 pageCart">
        <div className="py-6 flex">
          <div
            className="font-semibold mr-8 cursor-pointer underline"
            onClick={chooseAllProduct}
          >
            {hasSelected
              ? `Choosed ${selectedRowKeys.length} products`
              : "Choose all products"}
          </div>
          <span
            className={
              hasSelected
                ? `font-semibold cursor-pointer underline`
                : "font-semibold ml-8 cursor-pointer underline"
            }
            onClick={() => deletProductChoosed(carts)}
          >
            {hasSelected ? `Delete ${selectedRowKeys.length} products` : ""}
          </span>
        </div>
        <Table
          rowSelection={rowSelection}
          columns={columnsCart}
          dataSource={carts}
          scroll={{ x: 1000, y: 600 }}
          summary={() => (
            <Table.Summary fixed>
              <Table.Summary.Row className="font-bold">
                <Table.Summary.Cell colSpan={4} index={0}>
                  Total Pay
                </Table.Summary.Cell>
                <Table.Summary.Cell colSpan={2} index={1}>
                  {hasSelected ? totalPriceSelected : "0"}
                </Table.Summary.Cell>
              </Table.Summary.Row>
            </Table.Summary>
          )}
        />
        <div className="py-14">
          <textarea
            placeholder="Note..."
            className="secondColorBg p-5 w-full h-52"
          />
          <div className="flex justify-center">
            <Button
              type="primary"
              size="large"
              className="my-8 text-base font-medium mainColorBg hover:bg-transparent buttonAdd"
            >
              Thanh Toán
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageCart;
