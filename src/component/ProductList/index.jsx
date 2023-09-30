import BgList from '../../assets/img/bg.png'
import './List.css'
import { Link } from 'react-router-dom'
const ProductList = () => {
    return (
        <>
        <div className="album py-5 bg-light">
            <div className="container">
                <div className='row justify-content-between'>
                <div className="col-4">
                <h2>
                    Product List
                </h2>
                </div>
                <div className="col-2">
                <Link to={'/create-product'}>
                <a className='btn btn-outline-primary btn-lg'>Create</a>
                </Link>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                    <div className="card mb-4 box-shadow">
                    <img
                        className="card-img-top"
                        src={BgList}
                        alt="Card image cap"
                    />
                    <div className="card-body">
                        <p className="card-text">
                        This is a wider card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                            >
                            View
                            </button>
                            <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                            >
                            Edit
                            </button>
                        </div>
                        <small className="text-muted">9 mins</small>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-4 box-shadow">
                    <img
                        className="card-img-top"
                        src={BgList}
                        alt="Card image cap"
                    />
                    <div className="card-body">
                        <p className="card-text">
                        This is a wider card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                            >
                            View
                            </button>
                            <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                            >
                            Edit
                            </button>
                        </div>
                        <small className="text-muted">9 mins</small>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-4 box-shadow">
                    <img
                        className="card-img-top"
                        src={BgList}
                        alt="Card image cap"
                    />
                    <div className="card-body">
                        <p className="card-text">
                        This is a wider card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                            >
                            View
                            </button>
                            <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                            >
                            Edit
                            </button>
                        </div>
                        <small className="text-muted">9 mins</small>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductList