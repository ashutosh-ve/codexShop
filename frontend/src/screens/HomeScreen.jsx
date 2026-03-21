import { Col, Row } from 'react-bootstrap'
import { Products } from '../components/Products'
import { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react'
import { useGetProductsQuery } from '../slices/productsApiSlice';
import Loader from '../components/Loader';


export const  HomeScreen = () => {
//   const [products, setProducts] = useState([]);

//     useEffect(() => {
//       const fetchedProduct = async () => {
//         try {
//         const {data} = await axios.get('http://localhost:5000/api/v1/products');
//         setProducts(data.products);
//  } catch (error) {
//       console.log("ERROR:", error.message);
//       console.log("DETAIL:", error);
//     }   
//   }

//       fetchedProduct();

//     },[])


const {data: products, isLoading, error}= useGetProductsQuery();


    // const result = products.map((product)=>{
    //    return ( <Col sm={12} md={6} lg={4} xl={3}>
    //         <h3>{product.name}</h3>
    //         < Products product={product}/>
    //     </Col>
    //    )
    // }) 


  return (
  <>
    {isLoading ? (
      <Loader/>
    ) : error ? (
      <div>{error?.products?.message || error.error}</div>
    ) : (
      <>
        <h1>Latest Product</h1>
        <Row>
          {products?.products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4}>
              <Products product={product} />
            </Col>
          ))}
        </Row>
      </>
    )}
  </>
);

}