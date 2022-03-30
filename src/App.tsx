import { useEffect, useState } from 'react'
import './App.css'

import type { ProductType } from './types/product';
import { add, list, remove, update } from './api/product';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/products/ProductPage';
import AdminLayout from './pages/layouts/AdminLayout';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Dashboard from './pages/Dashboard';
import ProductManager from './pages/products/ProductManager';
import ProductDetail from './pages/products/ProductDetail';
import ProductAdd from './pages/products/ProductAdd';
import ProductEdit from './pages/products/ProductEdit';
import PrivateRouter from './components/PrivateRouter';
import Signup from './pages/Signup';
import { UserType } from './types/User';
import { addUser } from './api/user';
import Signin from './pages/Signin';

function App() {
  const [products, setProducts] = useState<ProductType[]>([])
  const [users, setUsers] = useState<UserType[]>([])

  useEffect(() => {
    const getProducts = async () => {
        const { data } = await list();
        setProducts(data);
    }
    getProducts();
  }, []);

  // Add Product
  const onHandleAdd = async (product: any) => {
    const {data} = await add(product);
    setProducts([...products, data]);
  }
  const onHandleAddUser = async (user: any) => {
    const {data} = await addUser(user);
    setUsers([...users, data]);
  }
  const onHandleRemove = async (id: number) => {
    remove(id);
    // rerender
    setProducts(products.filter(item => item.id !== id));
  }
  const onHandleUpdate = async (product: ProductType) => {
    try {
      // api
       const {data} = await update(product);
       // reREnder - 
       // Tạo ra 1 vòng lặp, nếu item.id == id sản phẩm vừa cập nhật (data), thì cập nhật ngược lại giữ nguyên
       setProducts(products.map(item => item.id === data.id ? product : item))
    } catch (error) {
      
    }
  }
  return (
    <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<WebsiteLayout />}>
                <Route index element={<HomePage />} />
                <Route path="product">
                  <Route index element={<ProductPage/>}/>
                  <Route path=":id" element={<ProductDetail />} />
                </Route>
                <Route path="signup" element={<Signup onAdd={onHandleAddUser}/>} />
                <Route path="signin" element={<Signin />} />
            </Route>'
            <Route path="admin" element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
                <Route index element={<Navigate to="dashboard" />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="product">
                  <Route index  element={<ProductManager products={products} onRemove={onHandleRemove} />} />
                  <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate}/>} />
                  <Route path="add" element={<ProductAdd onAdd={onHandleAdd} />} />
                </Route>
            </Route>
            <Route path="login" element={<h1>Login page</h1>} />
          </Routes>
        </main>
    </div>
  )
}

export default App




