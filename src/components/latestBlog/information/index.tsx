function InformationLatestBlog(props: any) {
    return (
      <div className='p-5'>
        <h4 className='flex justify-start text-base font-semibold text-zinc-600 textHover'>{props.productName}</h4>
        <span className="text-zinc-400 flex justify-start my-3">By {props.author} / {props.time}</span>
        <p className='flex justify-center text-sm text-zinc-600'>{props.description}</p>
      </div>
    );
}

export default InformationLatestBlog;