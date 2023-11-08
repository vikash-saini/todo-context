const Image = (props) => {

    if (!props.src) {
        throw new Error("Image Not Found")
    }
  return (
    <>
      <img src={props.src} height="100" width="100"/>
    </>
  );
};

export default Image;
