import './ImageLatestBlog.scss';

function ImageLatestBlog(props: any) {
    return (
        <div className='flex justify-center backgroundImg imageLatestBlog'>
            <img src={props.image} alt="Latest Blog" />
            <div className='backgroundImgHover'></div>
        </div>
    );
}

export default ImageLatestBlog;