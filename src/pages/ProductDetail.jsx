import BgList from '../assets/img/bg.png'
import { useLocation } from "react-router-dom"
const ProductDetail = () => {
    const { state } = useLocation()
    console.log('local', state)
 return (
    <>
    <section>
        <div className="container pt-5">
            <div className="text-center mt-5">
                <h2>Product Detail</h2>
            </div>
            <div className='card mb-5 py-5 px-5'>
                <div className="row">
                <div className="col-md-7">
                    <h2 className="featurette-heading">
                    {state.productname}
                    </h2>
                    <div><b>Product Category :</b> {state.productcategory}</div>
                    <div><b>Product Freshness :</b> {state.productfreshness}</div>
                    <br />
                    <p className="lead">
                    Description : {state.additionaldescription}
                    </p>
                    <br />
                    <h4>$ {state.productprice}</h4>
                </div>
                <div className="col-md-5">
                    <img
                    className="featurette-image img-fluid mx-auto"
                    src={BgList}
                    alt=""
                    
                    style={{ objectFit: "contain" }}
                    />
                </div>
                </div>
            </div>
        </div>
    </section>
    </>
 )
}

export default ProductDetail