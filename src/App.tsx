import { useEffect, useState } from 'react'
import './App.css'

import type { ProductType } from './types/product';
import { add, list, remove, update } from './api/product';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import AdminLayout from './pages/layouts/AdminLayout';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Dashboard from './pages/admin/Dashboard';
import ProductManager from './pages/admin/products/ProductManager';
import ProductDetail from './pages/ProductDetail';
import ProductAdd from './pages/admin/products/ProductAdd';
import ProductEdit from './pages/admin/products/ProductEdit';
import PrivateRouter from './components/PrivateRouter';
import Signup from './pages/Signup';
import { UserType } from './types/User';
import { signup, removeUser } from './api/user';
import Signin from './pages/Signin';
import UserManager from './pages/admin/users/UserManager';
import { toast } from 'react-toastify';

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
  //User
  // const onHandleAddUser = async (user: any) => {
  //   const { data } = await signup(user);
  //   setUsers([...users, data]);
  // }
  const onHandleRemoveUser = async (id: number) => {
    removeUser(id);

  }
  // Add Product
  const onHandleAdd = async (product: any) => {
    // const userLocal = JSON.parse(localStorage.getItem("user") as string);
    // const UserId = userLocal.user._id;
    // console.log(UserId);
    const { data } = await add(product);
    toast.success("Thêm sản phẩm thành công");
    setProducts([...products, data]);
  }
  const onHandleRemove = async (_id: number | string) => {
    remove(_id);
    toast.success("Xóa sản phẩm thành công");
    console.log(_id);
    // rerender
    setProducts(products.filter(item => item._id !== _id));
  }
  const onHandleUpdate = async (product: ProductType) => {
    try {
      // api
      const { data } = await update(product);
      toast.success("Update sản phẩm thành công");
      // Tạo ra 1 vòng lặp, nếu item.id == id sản phẩm vừa cập nhật (data), thì cập nhật ngược lại giữ nguyên
      setProducts(products.map(item => item._id === data._id ? product : item))
    } catch (error) {

    }
  }
  return (
    <>
      <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="App.css" />
      </div>
      <main>
        <Routes>
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
          <Route path="/" element={<WebsiteLayout />}>
            <Route index element={<HomePage products={products} />} />
            <Route path="product">
              <Route index element={<ProductPage products={products} />} />
              <Route path=":id" element={<ProductDetail />} />
            </Route>
          </Route>'
          <Route path="admin" element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products">
              <Route index element={<ProductManager products={products} onRemove={onHandleRemove} />} />
              <Route path=":userId/:id/edit" element={<ProductEdit onUpdate={onHandleUpdate} />} />
              <Route path=":userId" element={<ProductAdd onAdd={onHandleAdd} />} />
            </Route>
            <Route path="user">
              <Route index element={<UserManager users={users} onRemove={onHandleRemoveUser} />} />
            </Route>
          </Route>
        </Routes>
      </main>
    </> 
  )
}

export default App




