import { Button, Rate, Space } from 'antd';
import {PlusCircleOutlined} from '@ant-design/icons';
import { Radio, Collapse  } from 'antd';
import './Information.scss';

const { Panel } = Collapse;

function InforPageDetailProduct(props: any) { 
    const onChange = (key: string | string[]) => {
        // console.log(key);
    };
    return (
        <div className="w-full items-start pt-8 pl-28 inforCarousel">
            <div className="flex flex-col justify-start items-start">
                <h1 className="capitalize text-gray-500 text-4xl pt-6">{props.productName}</h1>
                <div className="flex flex-column justify-center items-center pt-4 text-gray-500">Starts from 
                    <div className="flex flex-row justify-start items-start font-medium text-lg pl-4">${props.price}</div>
                </div>
                <div className="flex justify-center pt-4 ">
                    <Rate allowHalf disabled defaultValue={props.rate} className="text-sm pr-4" />
                    <span className="text-zinc-400 flex justify-center">({props.reviews} Review)</span>
                </div>
                <div className="flex flex-column justify-center items-center pt-4 text-gray-500">Số lượng: 
                    <div className="flex flex-row justify-start items-start font-medium text-lg pl-4">1</div>
                </div>
                <Radio.Group className='py-5'>
                    <Radio.Button value={'discrease'}>-</Radio.Button>
                    <Radio.Button value="1">1</Radio.Button>
                    <Radio.Button value={'increase'}>+</Radio.Button>
                </Radio.Group>

                <Collapse onChange={onChange} ghost className='text-start'>
                    <Panel header="Mô tả" key="1">
                        <p>{props.description}</p>
                    </Panel>
                </Collapse>
                <Space className='my-8 styleMobile'>
                    <Button type="primary" className=' capitalize text-base font-medium mainColorBg hover:bg-transparent buttonAdd'>
                        <PlusCircleOutlined className='hover:text-orange-500 align-[0.1em]'/>
                        add to cart
                    </Button>
                </Space>    
            </div>
        </div>
    )
}

export default InforPageDetailProduct;