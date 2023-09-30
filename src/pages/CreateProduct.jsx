import './Custom.css'
import React, { useState, useEffect } from 'react';
import { products } from "../api/data";
import { Link } from 'react-router-dom';

const CreateProduct = () => {
    const [data, setData] = useState([]) // state untuk data awal
    const [filteredData, setFilteredData] = useState([]) // state data yang terfillter
    const [search, setSearch] = useState('')
    const [editIndex, setEditIndex] = useState(-1);
    const [formData, setFormData] = useState({
        productname: '',
        productcategory: '',
        productfreshness: '',
        additionaldescription: '',
        productprice: 0,
    });
    const [className, setClassName] = useState({
        productname: 'form-control',
        productcategory: 'form-select',
        productfreshness: 'form-check-input',
        additionaldescription: 'form-control',
        productprice: 'form-control',
    });
    const [errorText, setErrorText] = useState({
        productname: '',
        productcategory: '',
        productfreshness: '',
        additionaldescription: '',
        productprice: '',
    });
    const [isValid, setIsValid] = useState({
        productname: false,
        productcategory: false,
        productfreshness: false,
        additionaldescription: false,
        productprice: false,
    });
    // const [message, setMessage] = useState({ isInValid: false });
    
    useEffect(() => {
        window.localStorage.setItem('productdata', JSON.stringify(data));
    }, [data]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({ ...formData, [name]: value }));

        if (name === "productname") {
            if (value.length === 0) {
                setClassName((className) => ({
                    ...className,
                    productname: 'form-control is-invalid' 
                }))
                setErrorText((errorText) => ({
                    ...errorText,
                    productname: 'please fill in the product name'
                }))
                setIsValid((isValid) => ({
                    ...isValid,
                    productname: false,
                }))
            } else if (value.length > 25) {
                setClassName((className) => ({
                    ...className,
                    productname: 'form-control is-invalid' 
                }))
                setErrorText((errorText) => ({
                    ...errorText,
                    productname: 'Product Name must not exceed 25 characters.'
                }))
                setIsValid((isValid) => ({
                    ...isValid,
                    productname: false,
                }))
            } else if (/[!@#{}]/.test(value)) {
                setClassName((className) => ({
                    ...className,
                    productname: 'form-control is-invalid' 
                }))
                setErrorText((errorText) => ({
                    ...errorText,
                    productname: 'Name must not contain symbols.'
                }))
                setIsValid((isValid) => ({
                    ...isValid,
                    productname: false,
                }))
            } else {
                setClassName((className) => ({
                    ...className,
                    productname: 'form-control is-valid' 
                }))
                setErrorText((errorText) => ({
                    ...errorText,
                    productname: ''
                }))
                setIsValid((isValid) => ({
                    ...isValid,
                    productname: true,
                }))
            }
        }

        if (name === "productcategory") {
            if (value === '') {
                setClassName((className) => ({
                    ...className,
                    productcategory: 'form-select is-invalid' 
                }))
                setErrorText((errorText) => ({
                    ...errorText,
                    productcategory: 'The product category field must be selected.'
                }))
                setIsValid((isValid) => ({
                    ...isValid,
                    productcategory: false,
                }))
            } else {
                setClassName((className) => ({
                    ...className,
                    productcategory: 'form-select is-valid' 
                }))
                setErrorText((errorText) => ({
                    ...errorText,
                    productcategory: ''
                }))
                setIsValid((isValid) => ({
                    ...isValid,
                    productcategory: true,
                }))
            }
        }

        if (name === "productfreshness") {
            if (value === '') {
                setClassName((className) => ({
                    ...className,
                    productfreshness: 'form-check-input is-invalid' 
                }))
                setErrorText((errorText) => ({
                    ...errorText,
                    productfreshness: 'The product freshness field must be selected.'
                }))
                setIsValid((isValid) => ({
                    ...isValid,
                    productfreshness: false,
                }))
            } else {
                setClassName((className) => ({
                    ...className,
                    productfreshness: 'form-check-input is-valid' 
                }))
                setErrorText((errorText) => ({
                    ...errorText,
                    productfreshness: ''
                }))
                setIsValid((isValid) => ({
                    ...isValid,
                    productfreshness: true,
                }))
            }
        }

        if (name === "additionaldescription") {
            if (value === '') {
                setClassName((className) => ({
                    ...className,
                    additionaldescription: 'form-control is-invalid' 
                }))
                setErrorText((errorText) => ({
                    ...errorText,
                    additionaldescription: 'The additional description field must be filled in.'
                }))
                setIsValid((isValid) => ({
                    ...isValid,
                    additionaldescription: false,
                }))
            } else {
                setClassName((className) => ({
                    ...className,
                    additionaldescription: 'form-control is-valid' 
                }))
                setErrorText((errorText) => ({
                    ...errorText,
                    additionaldescription: ''
                }))
                setIsValid((isValid) => ({
                    ...isValid,
                    additionaldescription: true,
                }))
            }
        }

        if (name === "productprice") {
            if (value.length === 0) {
                setClassName((className) => ({
                    ...className,
                    productprice: 'form-control is-invalid' 
                }))
                setErrorText((errorText) => ({
                    ...errorText,
                    productprice: 'please fill in the product price.'
                }))
                setIsValid((isValid) => ({
                    ...isValid,
                    productprice: false,
                }))
            } else if (!/^\d+(\.\d{1,2})?$/.test(value)) {
                setClassName((className) => ({
                    ...className,
                    productprice: 'form-control is-invalid' 
                }))
                setErrorText((errorText) => ({
                    ...errorText,
                    productprice: 'Please enter a valid numeric.'
                }))
                setIsValid((isValid) => ({
                    ...isValid,
                    productprice: false,
                }))
            } else {
                setClassName((className) => ({
                    ...className,
                    productprice: 'form-control is-valid' 
                }))
                setErrorText((errorText) => ({
                    ...errorText,
                    productprice: ''
                }))
                setIsValid((isValid) => ({
                    ...isValid,
                    productprice: true,
                }))
            }
        }
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // setMessage('')
        if (
            formData.productname === "" 
            || formData.productcategory === "" 
            || formData.productfreshness === "" 
            || formData.additionaldescription === "" 
            || formData.productprice === "" 
        ) {
            // setMessage({ isInValid : true });
            return;
        } else {
            // setMessage({ isInValid : false });
            if (editIndex === -1) {
                setData([...data, formData]);
            } else {
                const updatedData = [...data];
                updatedData[editIndex] = formData;
                setData(updatedData);
                setEditIndex(-1);
            }
            setFormData({ 
                productname: '',
                productcategory: '',
                productfreshness: '',
                additionaldescription: '',
                productprice: '',
            });
        }
    };

    const handleEdit = (index) => {
        setFormData(data[index]);
        setEditIndex(index);
    };
    
    const handleDelete = (index) => {
        const updatedData = [...data];
        updatedData.splice(index, 1);
        setData(updatedData);
        setEditIndex(-1);
    };

    const onSearch = (e) => {
        setSearch(e.target.value)
        onFilter(search)
    }

    const onFilter = (query) => {
        // untuk melakukan filtering dari title
        let filter = data?.filter((item) =>
            item.productname.toLowerCase().includes(query.toLowerCase())
        );

        // update state filteredData untuk mengubah list article
        setFilteredData(filter)
    }
    return (
        <>
            <section>
                <div className="container mt-5">
                <div className="py-5 text-center">
                    <img
                    className="d-block mx-auto mb-4"
                    src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
                    alt=""
                    width={72}
                    height={72}
                    style={{ objectFit: "contain" }}
                    />
                    <h2>Create Product</h2>
                    <p className="lead">
                    Below is an example form built entirely with Bootstrap's form
                    controls. Each required form group has a validation state that can be
                    triggered by attempting to submit the form without completing it.
                    </p>
                </div>
                <div className="row justify-content-center">
                    <div className="col col-lg-8 mb-5">
                    <form
                        className="form needs-validation"
                        id="productform"
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        <h4>Product Details</h4>
                        <div className="col-md-12 mb-3">
                        <label htmlFor="productname" className="form-label">
                            Product Name:
                        </label>
                        <input
                            type="text"
                            // className={`form-control ${message.isInValid ? 'is-invalid' : ''}`}
                            className={className.productname}
                            id="productname"
                            name="productname"
                            value={formData.productname}
                            onChange={handleChange}
                            required
                        />
                        {errorText.productname && 
                            <div className="invalid-feedback">
                                {errorText.productname}
                            </div>
                        }
                        </div>
                        <div className="col-md-12 mb-3">
                        <label htmlFor="productcategory" className="form-label">
                            Product Category:
                        </label>
                        <br />
                        <select
                            // className={`form-select ${message.isInValid ? 'is-invalid' : ''}`}
                            className={className.productcategory}
                            id="productcategory"
                            name="productcategory"
                            value={formData.productcategory}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled="" selected="">
                            Choose...
                            </option>
                            <option value="Electronic">Electronic</option>
                            <option value="Home Appliances">Home Appliances</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Sport">Sport</option>
                            <option value="Art">Art</option>
                        </select>
                        {errorText.productcategory && 
                        <div className="invalid-feedback">
                            {errorText.productcategory}
                        </div>}
                        </div>
                        <div className="col-md-12 mb-3">
                        <label className="form-label">Product Freshness:</label>
                        <div className="form-check mb-1">
                            <input
                            // className={`form-check-input ${message.isInValid ? 'is-invalid' : ''}`}
                            className={className.productfreshness}
                            type="radio"
                            id="productfreshness1"
                            name="productfreshness"
                            value="Brand New"
                            checked={formData.productfreshness === 'Brand New'}
                            onChange={handleChange}
                            required
                            />
                            <label
                            className="form-check-label"
                            htmlFor="productfreshness1"
                            id="pf1"
                            >
                            Brand New
                            </label>
                        </div>
                        <div className="form-check mb-1">
                            <input
                            // className={`form-check-input ${message.isInValid ? 'is-invalid' : ''}`}
                            className={className.productfreshness}
                            type="radio"
                            id="productfreshness2"
                            name="productfreshness"
                            value="Second Hank"
                            checked={formData.productfreshness === 'Second Hank'}
                            onChange={handleChange}
                            required
                            />
                            <label
                            className="form-check-label"
                            htmlFor="productfreshness2"
                            id="pf2"
                            >
                            Second Hand
                            </label>
                        </div>
                        <div className="form-check mb-1">
                            <input
                            // className={`form-check-input ${message.isInValid ? 'is-invalid' : ''}`}
                            className={className.productfreshness}
                            type="radio"
                            id="productfreshness3"
                            name="productfreshness"
                            value="Refurbished"
                            checked={formData.productfreshness === 'Refurbished'}
                            onChange={handleChange}
                            required
                            />
                            <label
                            className="form-check-label"
                            htmlFor="productfreshness3"
                            id="pf3"
                            >
                            Refurbished
                            </label>
                            {errorText.productfreshness && 
                            <div className="invalid-feedback">
                            {errorText.productfreshness}
                            </div>}
                        </div>
                        </div>
                        <div className="col-md-12 mb-3">
                        <label htmlFor="additionaldescription" className="form-label">
                            Additional Description
                        </label>
                        <textarea
                            // className={`form-control ${message.isInValid ? 'is-invalid' : ''}`}
                            className={className.additionaldescription}
                            id="additionaldescription"
                            name="additionaldescription"
                            value={formData.additionaldescription}
                            onChange={handleChange}
                            rows={6}
                            required
                        />
                        {errorText.additionaldescription && 
                        <div className="invalid-feedback">
                            {errorText.additionaldescription}
                        </div>}
                        </div>
                        <div className="col-md-12 mb-3">
                        <label htmlFor="productprice" className="form-label">
                            Product price:
                        </label>
                        <input
                            type="text"
                            // className={`form-control ${message.isInValid ? 'is-invalid' : ''}`}
                            className={className.productprice}
                            id="productprice"
                            name="productprice"
                            value={formData.productprice}
                            onChange={handleChange}
                            placeholder="$ 100"
                            required
                        />
                        {errorText.productprice && 
                        <div className="invalid-feedback">
                            {errorText.productprice}
                        </div>}
                        </div>
                        <div className="col-md-12 mb-3 d-grid">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                id="productvalidate"
                            >
                                {editIndex === -1 ? 'Add Product' : 'Update'}
                            </button>
                        </div>
                    </form>
                    </div>
                </div>
                <div className="py-5 justify-content-center">
                    <div className="row justify-content-between">
                    <div className="col .col-12">
                        <h2>List Product</h2>
                    </div>
                    <div className="col .col-6">
                        <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            id="searchproduct"
                            placeholder="Search by Product Name"
                            value={search}
                            onChange={(e) => onSearch(e)}
                        />
                        <button className="btn btn-outline-primary" type="button">
                            Search
                        </button>
                        </div>
                    </div>
                    </div>
                    <div className="table-responsive mt-5">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Product Name</th>
                                <th>Product Category</th>
                                <th>Product Freshness</th>
                                <th>Additional Description</th>
                                <th>Product Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            search !== "" ?
                                <tbody>
                                    {
                                        filteredData.length > 0 ? filteredData.map((item, index) => (
                                            <tr key={index}>
                                                <td>{index +1}</td>
                                                <td>{item.productname}</td>
                                                <td>{item.productcategory}</td>
                                                <td>{item.productfreshness}</td>
                                                <td>{item.additionaldescription}</td>
                                                <td>{item.productprice}</td>
                                                <td>
                                                    <button
                                                        className="btn btn-danger btn-sm me-2"
                                                        onClick={() => handleDelete(index)}
                                                    >
                                                        Delete
                                                    </button>
                                                    <button
                                                        className="btn btn-success btn-sm me-2"
                                                        onClick={() => handleEdit(index)}
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        className="btn btn-info btn-sm"
                                                    >
                                                        <Link to={`/create-product/${index}`} state={item}>
                                                            Detail
                                                        </Link>
                                                    </button>
                                                </td>
                                            </tr>
                                        )) : <></>
                                    }
                                </tbody>
                            : 
                                <tbody>
                                    {
                                        data.length > 0 ? data.map((item, index) => (
                                            <tr  key={index}>
                                                <td>{index +1}</td>
                                                <td>{item.productname}</td>
                                                <td>{item.productcategory}</td>
                                                <td>{item.productfreshness}</td>
                                                <td>{item.additionaldescription}</td>
                                                <td>{item.productprice}</td>
                                                <td>
                                                    <button
                                                        className="btn btn-danger btn-sm me-2"
                                                        onClick={() => handleDelete(index)}
                                                    >
                                                        Delete
                                                    </button>
                                                    <button
                                                        className="btn btn-success btn-sm me-2"
                                                        onClick={() => handleEdit(index)}
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        className="btn btn-info btn-sm"
                                                    >
                                                        <Link to={`/create-product/${index}`} state={item}>
                                                            Detail
                                                        </Link>
                                                    </button>
                                                </td>
                                            </tr>
                                        )) : <></>
                                    }
                                </tbody>
                        } 
                    </table>
                    </div>
                </div>
                </div>
            </section>
        </>
    )    
}

export default CreateProduct