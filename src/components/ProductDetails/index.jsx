import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Spinner } from 'react-bootstrap';


const ProductDetails = () => {
    const pramas = useParams();
    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = () => {
        fetch(`https://fakestoreapi.com/products/${pramas.id}`)
            .then(res => res.json())
            .then(json => setProduct(json))
    }

    console.log(product);

    if (!product) {
        return (
            <div className="d-flex justify-content-center align-content-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }

    return (
        <>
            <div className="container pt-4">
                <div className="card h-100 shadow p-4">
                    <div className="row align-items-center h-100">
                        <div className="col-md-5">
                            <div className="image h-100"><img className="w-100" src={product.image} alt="" /></div>
                        </div>
                        <div className="col-md-7">
                            <div className="conant">
                                <h2>{product.title}</h2>
                                <h4>price : <span className="price">{product.price} </span>$</h4>
                                <h6> <h4 className="d-inline-block">category:</h4> {product.category} </h6>
                                <p>{product.description}</p>
                            </div>
                            <button className="btn-card btn btn-info">Add to Card</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails