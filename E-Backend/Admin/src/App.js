import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './Pages/Dashboard';
import About from './Pages/About';
import Comment from './Pages/Comment';
import Analytics from './Pages/Analytics';
import Product from './Pages/Product';
import ProductList from './Pages/ProductList';
import Sidebar from './Compinents/Sidebar';
import Editproduct from './Pages/Editproduct';
import Login from './Pages/Login';
import Logout from './Pages/Logout';
import UserInformation from './Pages/UserInformation';


function App() {

  const isLoggedIn = window.localStorage.getItem("loggedIn")
  
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path='/' element={isLoggedIn=="true"?<Dashboard/> : <Login/>} />
          <Route path='/dashboard' element={isLoggedIn=="true"?<Dashboard/> : <Login/>} />
          <Route path='/about' element={isLoggedIn=="true"? <About/> : <Login/>} />
          <Route path='/comment' element={isLoggedIn=="true"?<Comment/> : <Login/>} />
          <Route path='/analytics' element={isLoggedIn=="true"? <Analytics/> : <Login/>} />
          <Route path='/product' element={isLoggedIn=="true"? <Product/> : <Login/>} />
          <Route path='/productlist' element={isLoggedIn=="true"? <ProductList/> : <Login/>} />
          <Route path='/edit/:id' element={isLoggedIn=="true"? <Editproduct/> : <Login/>} />
          <Route path='/adminlogin' element={isLoggedIn=="true"?<Logout/> : <Login/>} />
          <Route path='/adminlogout' element={isLoggedIn!="true"?<Login/> : <Logout/>} />
          <Route path='/adminlogout' element={isLoggedIn!="true"?<Login/> : <Logout/>} />
          <Route path='/userinformation' element={isLoggedIn=="true"?<UserInformation/> : <Login/>} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
