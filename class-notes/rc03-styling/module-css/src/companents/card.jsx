const Card = ({ language, image }) => {
  const { language, img } = props;
  return (
    <>
      <div>
        <h2>{language}</h2>
      </div>
      <img src={img} alt="" />
    </>
  );
};
export default Card;
