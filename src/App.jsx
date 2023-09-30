import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Header from "./component/Header"
import Footer from "./component/Footer"
import CreateProduct from './pages/CreateProduct'
import CreateAccount from './pages/CreateAccount'
import LandingPage from './pages/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetail from './pages/ProductDetail'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/create-product' element={<CreateProduct />} />
          <Route path='/create-product/:id' element={<ProductDetail />} />
          <Route path='/create-account' element={<CreateAccount />} />
        </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
