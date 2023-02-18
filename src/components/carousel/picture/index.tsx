function Picture(props: any) { 
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col mt-20 h-full slidePicture"><img src={props.image} alt="" className="w-10/12 h-10/12 flex justify-center"/></div>
    </div>
  )
}

export default Picture;