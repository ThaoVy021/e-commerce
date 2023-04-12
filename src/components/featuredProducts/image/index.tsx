interface PropsPictureInFeatureProducts {
  image: string;
}
function ImageFeatureProducts(props: PropsPictureInFeatureProducts) {
  return (
    <div className="flex justify-center">
      <img src={props.image} alt="featured products" />
    </div>
  );
}

export default ImageFeatureProducts;
