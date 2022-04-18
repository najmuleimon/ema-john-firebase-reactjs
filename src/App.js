import './App.css';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import Shop from './pages/Shop/Shop/Shop';
import Checkout from './pages/Shop/Checkout/Checkout';
import NotFound from './pages/NotFound/NotFound';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from 'react-router-dom';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/checkout" element={
            <RequireAuth>
              <Checkout/>
            </RequireAuth>
          } />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;
