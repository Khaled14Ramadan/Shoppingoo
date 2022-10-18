import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice";


const SingleProduct = ({ product }) => {

  const dispatch = useDispatch();
  const addProduct = ()=>{
    dispatch(addToCart(product));
  }

  return (
    <div className="col-md-4 col-sm-6 col-9 mx-auto">
      <div className="product card shadow text-center p-2 h-100">
        <div className="image m-auto mb-4">
          <Link to={`/details/${product.id}`}><img className="w-100 h-100" src={product.image} alt="" /></Link>
        </div>
        <div className="contant ">
          <h5>{product.title}</h5>
          <h4>price : <span className="price">{product.price} </span>$</h4>
        </div>
        <button className="btn-card btn btn-info" onClick={addProduct}>Add to Card</button>
      </div>
    </div>
  )
}

export default SingleProduct;