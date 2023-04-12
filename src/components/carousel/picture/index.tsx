interface PropsPictureInCarousel {
  image: string;
}
function Picture(props: PropsPictureInCarousel) {
  return (
    <div className="w-full">
      <div className="flex-col mt-20 h-full slidePicture">
        <img src={props.image} alt="product" className="w-10/12 h-10/12" />
      </div>
    </div>
  );
}

export default Picture;
