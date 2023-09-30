import './Custom.css'
import React, { useEffect } from 'react';

function CreateAccount () {
    useEffect(() => {
        window.alert("Welcome");
    }, []);
    
    const article = {
        title: {
          id: "Buat Akun",
          en: "Create Account"
        },
        description: {
          id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
          en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."
        }
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
                    <h2>{article.title.en}</h2>
                    <p className="lead">
                        {article.description.en}
                    </p>
                </div>
                <div className="row justify-content-center">
                    <div className="col col-lg-8 mb-5">
                    <form
                        className="form needs-validation"
                        id="accountform"
                        noValidate
                    >
                        <h4>Detail Form</h4>
                        <div className="row">
                        <div className="col col-lg">
                            <div className="col-md-12 mb-3">
                            <label className="form-label" htmlFor="fname">
                                First name:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="fname"
                                name="fname"
                                defaultValue=""
                                required=""
                            />
                            <div className="invalid-feedback">
                                Please enter a valid first name.
                            </div>
                            </div>
                        </div>
                        <div className="col col-lg">
                            <div className="col-md-12 mb-3">
                            <label className="form-label" htmlFor="lname">
                                Last name:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="lname"
                                name="lname"
                                defaultValue=""
                                required=""
                            />
                            <div className="invalid-feedback">
                                Please enter a valid last name.
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-12 mb-3">
                        <label className="form-label" htmlFor="username">
                            Username:
                        </label>
                        <div className="input-group">
                            <span
                            className="input-group-text"
                            id="basic-addon1"
                            style={{ borderRadius: "0.25rem 0rem 0rem 0.25rem" }}
                            >
                            @
                            </span>
                            <input
                            type="text"
                            className="form-control"
                            id="username"
                            name="username"
                            defaultValue=""
                            placeholder="Username"
                            style={{ borderRadius: "0rem 0.25rem 0.25rem 0rem" }}
                            required=""
                            />
                            <br />
                            <div className="invalid-feedback">
                            Please enter a valid username.
                            </div>
                        </div>
                        </div>
                        <div className="col-md-12 mb-3">
                        <label className="form-label" htmlFor="email">
                            Email:
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            defaultValue=""
                            placeholder="you@example.com"
                            required=""
                        />
                        <div className="invalid-feedback">
                            Please enter a valid email.
                        </div>
                        </div>
                        <div className="col-md-12 mb-3">
                        <label className="form-label">Gender:</label>
                        <div className="form-check mb-1">
                            <input
                            className="form-check-input"
                            type="radio"
                            id="gender1"
                            name="gender"
                            defaultValue="Male"
                            required=""
                            />
                            <label className="form-check-label" htmlFor="gender1" id="g1">
                            Male
                            </label>
                        </div>
                        <div className="form-check mb-1">
                            <input
                            className="form-check-input"
                            type="radio"
                            id="gender2"
                            name="gender"
                            defaultValue="Female"
                            required=""
                            />
                            <label className="form-check-label" htmlFor="gender2" id="g2">
                            Female
                            </label>
                        </div>
                        <div className="form-check mb-1">
                            <input
                            className="form-check-input"
                            type="radio"
                            id="gender3"
                            name="gender"
                            defaultValue="Other"
                            required=""
                            />
                            <label className="form-check-label" htmlFor="gender3" id="g3">
                            Other
                            </label>
                            <div className="invalid-feedback" id="gender-invalid">
                            Please select a gender option.
                            </div>
                        </div>
                        </div>
                        <div className="col-md-12 mb-3">
                        <label className="form-label" htmlFor="address">
                            Address:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="address"
                            name="address"
                            defaultValue=""
                            placeholder="1234 Main St"
                            required=""
                        />
                        <div className="invalid-feedback">
                            Please enter a valid address.
                        </div>
                        </div>
                        <div className="col-md-12 mb-3">
                        <label className="form-label" htmlFor="address2">
                            Address 2:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="address2"
                            name="address2"
                            defaultValue=""
                            placeholder="Apartement or suite"
                            required=""
                        />
                        <div className="invalid-feedback">
                            Please enter a valid address.
                        </div>
                        </div>
                        <div className="col-md-12 mb-3">
                        <label className="form-label" htmlFor="nasionality">
                            Nationality:
                        </label>
                        <select
                            className="form-control"
                            id="nationality"
                            name="nationality"
                            required=""
                        >
                            <option value="" disabled="" selected="">
                            Choose...
                            </option>
                            <option value="ID">Indonesian</option>
                            <option value="EN">English</option>
                            <option value="US">U.S.A</option>
                            <option value="JP">Japan</option>
                            <option value="KR">Korea</option>
                        </select>
                        <div className="invalid-feedback">
                            Please select a nationality option.
                        </div>
                        </div>
                        <hr />
                        <div className="col-md-12 mb-3">
                        <label className="form-label">Language Spoken:</label>
                        <div className="form-check">
                            <input
                            className="form-check-input"
                            type="checkbox"
                            id="language1"
                            name="language"
                            defaultValue="Indonesian"
                            />
                            <label className="form-check-label" htmlFor="language1" id="l1">
                            Indonesian
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                            className="form-check-input"
                            type="checkbox"
                            id="language2"
                            name="language"
                            defaultValue="English"
                            />
                            <label className="form-check-label" htmlFor="language2" id="l2">
                            English
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                            className="form-check-input"
                            type="checkbox"
                            id="language3"
                            name="language"
                            defaultValue="Other"
                            />
                            <label className="form-check-label" htmlFor="language3" id="l3">
                            Other
                            </label>
                            <div className="invalid-feedback" id="language-invalid">
                            Please select a language spoken option.
                            </div>
                        </div>
                        </div>
                        <div className="col-md-12 mb-3 d-grid">
                        <button
                            type="submit"
                            className="btn btn-primary"
                            id="accountvalidate"
                        >
                            Create Account
                        </button>
                        </div>
                    </form>
                    </div>
                </div>
                <div className="py-5 justify-content-center">
                    <div className="row justify-content-between">
                    <div className="col .col-12">
                        <h2>List Account</h2>
                    </div>
                    <div className="col .col-6">
                        <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            id="searchaccount"
                            placeholder="Search by Username"
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
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Userame</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Address 1</th>
                            <th>Address 2</th>
                            <th>Nationality</th>
                            <th>Language Spoken</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody id="accounttable"></tbody>
                    </table>
                    </div>
                </div>
                </div>
            </section>
        </>
    )    
}

export default CreateAccount