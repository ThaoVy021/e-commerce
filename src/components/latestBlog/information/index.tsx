import { Typography } from "antd";
import "./index.scss";

const { Title, Paragraph } = Typography;

interface PropsInformationLatestBlog {
  productName: string;
  author: string;
  time: string;
  description: string;
}

function InformationLatestBlog(props: PropsInformationLatestBlog) {
  return (
    <div className="pt-5 textHover">
      <Title level={5} className="secondBoldColor titleLatestBlog">
        {props.productName}
      </Title>
      <span className="secondLightColor flex my-3">
        By {props.author} / {props.time}
      </span>
      <Paragraph className="secondBoldColor whitespace-normal">
        {props.description}
      </Paragraph>
    </div>
  );
}

export default InformationLatestBlog;
