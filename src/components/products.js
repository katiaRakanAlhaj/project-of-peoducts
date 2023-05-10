import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { AiFillStar } from 'react-icons/ai';
import '../style.css';
const Products = ({ product }) => {
  return (
    <div style={{ padding: '2rem' }}>
      <h3 className="text-center mb-5">Our Products</h3>
      <div className="products">
        {product.length ? (
          product.map((pro) => {
            return (
              <Link to={`/view/${pro.id}`} style={{ textDecoration: 'none' }}>
                <div className="card">
                  <img src={pro?.image} className="image" />
                  <p className="mt-2 text-dark"> {pro?.title}</p>
                  <p className="text-dark" style={{ fontWeight: 'bold' }}>
                    {pro?.rating?.rate}
                    <IconContext.Provider
                      style={{ marginLeft: '0.3rem' }}
                      value={{ color: 'yellow' }}
                    >
                      <AiFillStar />
                    </IconContext.Provider>
                  </p>
                  <p className="price">{pro?.price} SYP</p>
                </div>
              </Link>
            );
          })
        ) : (
          <h1 className="text-center p-5">There Is No Products</h1>
        )}
      </div>
      <footer>
        <p className="text-white text-center">
          2023 | All Rights Reserved | Ocean Soft
        </p>
      </footer>
    </div>
  );
};
export default Products;
