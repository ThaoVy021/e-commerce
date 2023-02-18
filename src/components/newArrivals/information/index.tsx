function InformationNewArrivals(props: any) {
    return (
      <div className='p-4'>
        <h4 className='flex justify-center text-lg font-semibold text-zinc-600 textHover'>{props.productName}</h4>
        <p className='flex justify-center mt-2 text-base text-zinc-600'>${props.price}</p>
      </div>
    );
}

export default InformationNewArrivals;