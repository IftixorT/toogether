/** @format */

import FoodProperty from "./style.jsx";

const FoodProperties = ({
  imgURL,
  price,
  title,
  description,
  isRecomended,
  size,
}) => {
  return (
    <>
      <FoodProperty className = "product">
        <img src={imgURL} alt='png' />
        <p className='recommend'>{isRecomended}</p>
        <span className='line'></span>
        <h3 className='food-name'>{title}</h3>
        <p className='data'>{description}</p>
        <div className='cost'>${price}</div>
      </FoodProperty>
    </>
  );
};

export default FoodProperties;
