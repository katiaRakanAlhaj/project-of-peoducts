import Navbar from 'react-bootstrap/Navbar';
import ocean from '../images/ocean.png';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CiHeart, CiUser } from 'react-icons/ci';
import { IconContext } from 'react-icons';
import { RiShoppingCart2Line } from 'react-icons/ri';
import '../style.css';
import axios from 'axios';
const NavbarComponent = () => {
  const [word, setWord] = useState('');
  const [product, setProduct] = useState([]);
  // search for products
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/products?title=${word}`
      );
      setProduct(response.data);
    };
    fetchProducts();
    console.log(word);
  }, [word]);
  return (
    <div className="Navbar">
      <Navbar className="navbar">
        <img src={ocean} className="ocean-image" />
        <Link style={{ textDecoration: 'none' }} className="text-dark" to="/">
          <h5 className="space-link">Products</h5>
        </Link>
        <Link
          style={{ textDecoration: 'none' }}
          className="text-dark"
          to="/details"
        >
          <h5 className="space-link"> Details</h5>
        </Link>
        <input
          className="search-input"
          type=" text"
          value={word}
          placeholder="Search For Products"
          onChange={(e) => setWord(e.target.value)}
        />
        <div className="icons">
          <IconContext.Provider value={{ size: 30 }}>
            <CiHeart className="space-icon" />
          </IconContext.Provider>
          <IconContext.Provider value={{ size: 25 }}>
            <CiUser className="space-icon" />
          </IconContext.Provider>
          <IconContext.Provider value={{ size: 30 }}>
            <RiShoppingCart2Line className="space-icon" />
          </IconContext.Provider>
        </div>
      </Navbar>
    </div>
  );
};
export default NavbarComponent;
