import { useParams } from 'react-router-dom'
import '../assets/styles/product.css'
import { useGetProductDetailsQuery } from '../slices/productsApiSlice'
import Loader from '../components/Loader';
import Message from '../components/Message';

// export const ProductPage = () => {
//   const {id: productId} = useParams()
//   const {data: product, isLoading, error} = useGetProductDetailsQuery(productId);


//     const handleClick=()=>{
//         alert('iinn Stcok')
//     }

   
export const ProductPage = () => {
  const { id: productId } = useParams();
  const [qty, setQty] = useState();

  const { data, isLoading, error } = useGetProductDetailsQuery(productId);

  const product = data?.product;

  const handleClick = () => {
    alert('in Stock');
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

            <button
              disabled={product?.countInStock === 0}
              className="add-cart-btn"
              onClick={handleClick}
            >
              Add To Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};