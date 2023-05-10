import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { AiFillStar } from 'react-icons/ai';
import { CiHeart } from 'react-icons/ci';
import axios from 'axios';
const View = () => {
  const [product, setProduct] = useState([]);
  const [counter, setCounter] = useState(0);
  const param = useParams();
  // fetch product from Api by id
  const getProductDetails = async () => {
    const res = await axios.get(
      `https://fakestoreapi.com/products/${param?.id}`
    );
    setProduct(res.data);
  };
  useEffect(() => {
    getProductDetails();
  }, []);
  // increament the quantity
  const Increament = () => {
    setCounter((prev) => prev + 1);
    console.log(counter);
  };
  // decrease the quantity
  const Decreament = () => {
    setCounter((prev) => prev - 1);
  };
  return (
    <div className="crud-details px-5">
      <div>
        <img src={product?.image} className="details-image" />
      </div>
      <div style={{ marginLeft: '2rem' }}>
        <p className="product-name">{product?.title}</p>
        <p>{product?.description}</p>
        <p className="price">{product?.price} SYP</p>
        <p className="rate">
          {product?.rating?.rate}
          <IconContext.Provider value={{ color: 'yellow' }}>
            <AiFillStar />
          </IconContext.Provider>
        </p>
        <div className="d-flex">
          <button onClick={Increament} className="increament-button">
            +
          </button>
          <input className="count" type="text" value={counter} />
          <button onClick={Decreament} className="decreament-button">
            -
          </button>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <button className="add-to-bag">Add To Bag</button>
          <button className="add-to-wishlist">
            Add To Wishlist
            <IconContext.Provider
              value={{ size: '25', color: 'rgb(115, 115, 211)' }}
            >
              <CiHeart style={{ marginLeft: '2rem' }} />
            </IconContext.Provider>
          </button>
        </div>
      </div>
    </div>
  );
};
export default View;
