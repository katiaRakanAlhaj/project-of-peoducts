import { useState } from 'react';
import {
  AiFillStar,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { useParams } from 'react-router';
import '../style.css';
const ProductCrud = ({ handleDelete, product }) => {
  const [counter, setCounter] = useState(0);
  const id = useParams();
  // increase the quantity
  const Increament = () => {
    setCounter((prev) => prev + 1);
  };
  // decrease the quantity
  const Decreament = () => {
    setCounter((prev) => prev - 1);
  };
  return (
    <div className="container">
      <h3 className="text-center">My Shopping Cart</h3>
      <table className="table table-border mt-5">
        <thead>
          <tr>
            <th>Product</th>
            <th>Rate</th>
            <th>Quantity</th>
            <th>Remove</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {product.map((pro) => {
            return (
              <tr>
                <td>
                  <img className="product-image" src={pro?.image} />
                </td>
                <td className="rate">
                  {pro?.rating?.rate}
                  <IconContext.Provider value={{ color: 'yellow' }}>
                    <AiFillStar style={{ marginLeft: '0.2rem' }} />
                  </IconContext.Provider>
                </td>
                <td className="d-flex">
                  <button onClick={Increament} className="increament-button">
                    +
                  </button>
                  <input type="text" className="count" value={counter} />
                  <button onClick={Decreament} className="decreament-button">
                    -
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(pro.id)}
                    className="delete-button"
                  >
                    x
                  </button>
                </td>
                <td>{pro?.price} SYP</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="d-flex justify-content-between mt-3">
        <button className="button-details">
          <div className="d-flex justify-content-between">
            <p className="text-secondary mt-2">Discount</p>
            <p className="Price mt-2">10,000 SYP</p>
          </div>
        </button>
        <button className="button-details">
          <div className="d-flex justify-content-between">
            <p className="text-secondary mt-2">Delivery</p>
            <p className="Price mt-2">3,000 SYP</p>
          </div>
        </button>
        <button className="button-details">
          <div className="d-flex justify-content-between">
            <p className="text-secondary mt-2">Subtotal</p>
            <p className="Price mt-2">310,000 SYP</p>
          </div>
        </button>
        <button className="button-details">
          <div className="d-flex justify-content-between">
            <p className="text-secondary mt-2">Total</p>
            <p className="Price mt-2">303,000 SYP</p>
          </div>
        </button>
      </div>

      <div className="two-buttons">
        <button className="continue-shopping">
          <IconContext.Provider value={{ size: '20' }}>
            <AiOutlineArrowLeft style={{ marginRight: '1rem' }} />
          </IconContext.Provider>
          Continue Shopping
        </button>
        <button className="make-purchase">
          Make Purchase
          <IconContext.Provider value={{ size: '20' }}>
            <AiOutlineArrowRight style={{ marginLeft: '1rem' }} />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
};
export default ProductCrud;
