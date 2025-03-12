import "./App.css";
import "./ecom/index.css";
import "./ecom/media.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";
import { useSelector } from "react-redux";
import Chat from "./pages/Chat/Chat";
import EcomHome from "./ecom/pages/Home";
import ProductDetails from "./ecom/pages/ProductDetails";
import Cart from "./ecom/pages/Cart";
import UserDash from "./ecom/pages/user/UserDash";
import PrivateUser from "./ecom/Components/User/UserVerify";
import Order from "./ecom/pages/Order";
import UserProfile from "./ecom/pages/user/UserProfile";
import About from "./pages/About/About";
import Terms from "./pages/About/Terms";
import PolicyPage from "./pages/About/Policy";
import Contact from "./pages/About/Contact";
import AdminDashboard from "./ecom/pages/Admin/AdminDashboard";
import Products from "./ecom/Components/Products";
import UpdateProduct from "./ecom/pages/Admin/UpdateProduct";
import CreateCategory from "./ecom/pages/Admin/CreateCategory";
import Createproduct from "./ecom/pages/Admin/Createproduct";
import AdminOrder from "./ecom/pages/Admin/AdminOrder";



function App() {
  const user = useSelector((state) => state?.authReducer?.authData);
  return (
    <div
      className="App"
      style={{
        height:
          window.location.href === "http://localhost:3000/chat"
            ? "calc(100vh - 2rem)"
            : "auto",
      }}
    >
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      <Routes>


        <Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
        />
        <Route path='/ecom' element={<EcomHome />} />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../auth" />}
        />


        <Route
          path="/auth"
          element={user ? <Navigate to="../home" /> : <Auth />}
        />
        <Route
          path="/profile/:id"
          element={user ? <Profile /> : <Navigate to="../auth" />}
        />

        <Route
          path="/chat"
          element={user ? <Chat /> : <Navigate to="../auth" />}
        />

        <Route path='ecom/product/:slug' element={<ProductDetails />} />
        
        <Route path='/cart' element={<Cart />} />
        <Route path='/dashboard'>
          <Route path='user' element={<UserDash />} />
          <Route path='user/orders' element={<Order />} />
          <Route path='user/profile' element={<UserProfile />} />
        </Route>

        <Route path='/about' element={<About />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/policy' element={<PolicyPage />} />
        <Route path='/contact' element={<Contact />} />

        {/* <Route path='/ecom/search/:name' element={<Search />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} /> */}

      
        <Route path='/dashboard'>
          <Route path='admin' element={<AdminDashboard />} />
          <Route path='admin/products' element={<Products />} />
          <Route path='admin/update-products/:slug' element={<UpdateProduct />} />
          <Route path='admin/create-category' element={<CreateCategory />} />
          <Route path='admin/create-product' element={<Createproduct />} />
          <Route path='admin/orders' element={<AdminOrder />} />
        </Route>

        {/* <Route path="*" element={<NotFound />} /> */}

      </Routes>
    </div>
  );
}

export default App;
