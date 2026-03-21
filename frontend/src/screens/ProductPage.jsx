import { useNavigate, useParams } from 'react-router-dom'
import '../assets/styles/product.css'
import { useGetProductDetailsQuery } from '../slices/productsApiSlice'
import Loader from '../components/Loader';
import Message from '../components/Message';
import { useState } from 'react';
import { addToCart } from '../slices/cartSlice';
import { useDispatch } from 'react-redux';
// export const ProductPage = () => {
//   const {id: productId} = useParams()
//   const {data: product, isLoading, error} = useGetProductDetailsQuery(productId);


//     const handleClick=()=>{
//         alert('iinn Stcok')
//     }

   
export const ProductPage = () => {
  const { id: productId } = useParams();
  const [qty, setQty] = useState(1);

  const { data, isLoading, error } = useGetProductDetailsQuery(productId);

  const product = data?.product;
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleAddToCart = () => {
    dispatch(addToCart({
      ...product,
      qty
    }));
    navigate('/cart')
  };

  return (
    <div className="product-container">
      {isLoading ? (
        <Loader/>
      ) : error ? (
        <Message varient='danger'>{error?.data?.message || error.error}</Message>
      ) : (
        <>
          <div className="product-image">
            <img src={product?.image} alt={product?.name} />
          </div>

          <div className="product-details">
            <h1>{product?.name}</h1>

            <p className="product-brand">
              Brand: <strong>{product?.brand}</strong>
            </p>

            <p className="product-price">₹{product?.price}</p>

            <p className="product-rating">
              ⭐ {product?.rating} ({product?.numReviews} reviews)
            </p>

            <p className="product-description">
              {product?.description}
            </p>

            <p className="product-stock">
              {product?.countInStock > 0 ? "In Stock" : "Out of Stock"}
            </p>
              <div className="qty-selector">
              <span>Qty: </span>
              <select 
                value={qty} 
                onChange={(e) => setQty(Number(e.target.value))}
              >
                {[...Array(product.countInStock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
            </div>

            <button
              disabled={product?.countInStock === 0}
              className="add-cart-btn"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};