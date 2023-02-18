import { Card } from 'antd';
import './smallAdver.scss'

const { Meta } = Card;

const SmallAdver = (props: any) => (
  <Card
    hoverable
    cover={<img alt="advertimentProducts" src={props.image} className='px-14 py-6 smallAdverImg'/>}
    className='w-60 bg-slate-100 productHover'
  >
    <Meta className='capitalize text-center smallAdverInfor' title={props.productName} description={props.description} />
  </Card>
);

export default SmallAdver;