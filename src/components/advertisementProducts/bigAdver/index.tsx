import './BigAdver.scss';
import { Card, Col, Row, Button, Space } from 'antd';

function BigAdver(props: any) {
  return (
    <Card
      hoverable
      className='flex flex-row bg-slate-100 cursor-pointer advertisementProducts'
    >
      <Row className="flex justify-center z-10 w-full container" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={8} className="flex justify-center gutter-row">
          <div className="w-full flex justify-center">
            <div className="flex flex-col justify-center h-full"><img src={props.image} alt="" className="w-auto h-auto flex justify-center"/></div>
          </div>  
        </Col>
        <Col span={16} className="flex justify-center gutter-row bigAdverMobile">
          <div className="items-start p-8 inforAdvertisementProducts">
             <div className="flex flex-col justify-start items-start titleInforAdvertisementProducts">
                <h3 className="capitalize text-slate-500 text-xl font-semibold">{props.productName}</h3>
            </div>
            <div className="flex flex-col justify-start">
                <p className="text-ellipsis overflow-hidden ... pt-4 text-sm text-left text-stone-400 w-46 h-24">{props.description}</p>
            </div>
            <div className="flex flex-row justify-start items-start pt-6">
                <div className="flex flex-row justify-start text-slate-500 items-start font-medium">Sales Start from</div>
                <div className="text-amber-500 pl-2 font-medium">$ {props.price}</div>
            </div>
            <Space className='items-start mt-6'>
              <Button type="primary" className='flex justify-center capitalize p-5 text-base font-medium border-slate-500 hover:text-slate-50 discoverMore'>
                  <div className='flex self-center text-slate-500 hover:text-slate-50 discoverMoreHover'>
                      discover more
                  </div>
              </Button>
            </Space>
          </div>  
        </Col>
      </Row>
    </Card>
  )
}
  
export default BigAdver;