import { useEffect, useReducer } from "react";
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Products from "../components/Products";



const reducer=(state , action)=>{
  switch (action.type) {
    
    case "FETCH_REQUEST":  
      return {state , loading:true};
    case "FETCH_SUCCESS":  
      return {state ,products:action.payload , loading:false};
    case "FETCH_FAIL":  
      return {state ,error:action.payload , loading:false};
    default:
      return state;
  }
}

function HomeScreen(){

  const [{products , loading ,error},dispatch]=useReducer(reducer,{products:[], loading:true , error:''})
    useEffect(() => {
      const fetchData = async () => {
            dispatch({type:'FETCH_REQUEST'})
            try{
              const result = await axios.get('/api/products');
              dispatch({type:'FETCH_SUCCESS',payload:result.data ,loading:false})
            }catch(e){
              dispatch({type:'FETCH_FAIL' ,payload:e.message,loading:true})
            } 
      };
      fetchData();
    },[]);

    return (
      <div>
        <h1>Featured Products</h1>
        <div className="products">
          {loading ? 
            <div>Loading...</div>
          : error ? 
            <div>{error}</div>
           : 
            <Row>
              {products.map((product) => (
                <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                  <Products product={product}></Products>
                </Col>
              ))}
            </Row>
          }
        </div>
      </div>
    );
}

export default HomeScreen;