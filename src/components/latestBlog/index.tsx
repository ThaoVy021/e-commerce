import { Col, Row, Typography } from "antd";
import { latestBlogs } from "../../mockdata/LatestBlog";
import ImageLatestBlog from "./image";
import InformationLatestBlog from "./information";

const { Title } = Typography;

function LatestBlog() {
  return (
    <div id="blog">
      <div className="container m-auto">
        <div className="flex justify-center">
          <Title level={2} className="p-6 titleColor">
            Latest Blog
          </Title>
        </div>

        <div>
          <Row
            className="flex justify-between py-10 px-24 w-full newArrivals"
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            {latestBlogs.data.map((latestBlog) => (
              <Col
                span={8}
                key={latestBlog.id}
                className="gutter-row relative cursor-pointer textHoverChangeColor"
              >
                <ImageLatestBlog image={latestBlog.image} />
                <InformationLatestBlog
                  productName={latestBlog.productName}
                  description={latestBlog.description}
                  author={latestBlog.author}
                  time={latestBlog.time}
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default LatestBlog;
