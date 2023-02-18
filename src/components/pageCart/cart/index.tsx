import { Space, Table, Typography } from "antd";
import "./Cart.scss";

const { Title } = Typography;

function Cart(props: any) {
  return (
    <div>
      <Space align="center">
        <Title level={4}>{props.title}</Title>
      </Space>
      <Table
        columns={props.columns}
        dataSource={props.cart}
        pagination={false}
      />
    </div>
  );
}

export default Cart;
