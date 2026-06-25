import React, { useState, useEffect, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import ErrorPage from "./components/ErrorPage";
import Loading from "./components/Loading";
import FiturXYZ from "./pages/FiturXYZ";

import customersData from "./data/customers.json";
import ordersData from "./data/orders.json";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Products = React.lazy(() => import("./pages/Products"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
const Components = React.lazy(() => import("./pages/Components")); 

const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

function App() {
  // 10. Fitur LocalStorage untuk Customers
  const [customers, setCustomers] = useState(() => {
    const saved = localStorage.getItem("crm_customers");
    return saved ? JSON.parse(saved) : customersData;
  });

  // 10. Fitur LocalStorage untuk Orders
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem("crm_orders");
    return saved ? JSON.parse(saved) : ordersData;
  });

  // Sinkronisasi ke LocalStorage setiap kali ada perubahan data
  useEffect(() => {
    localStorage.setItem("crm_customers", JSON.stringify(customers));
  }, [customers]);

  useEffect(() => {
    localStorage.setItem("crm_orders", JSON.stringify(orders));
  }, [orders]);

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* AUTH */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* MAIN */}
        <Route path="/" element={<MainLayout />}>
          {/* 6. Kirim data ke Dashboard untuk Statistik */}
          <Route index element={<Dashboard customers={customers} orders={orders} />} />

          {/* Oper state dan setter sebagai props ke halaman masing-masing */}
          <Route path="orders" element={<Orders orders={orders} setOrders={setOrders} customers={customers} setCustomers={setCustomers} />} />
          
          {/* PERBAIKAN: Ditambahkan props orders={orders} agar poin terakumulasi otomatis */}
          <Route path="customers" element={<Customers customers={customers} setCustomers={setCustomers} orders={orders} />} />

          {/* PRODUCTS */}
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetail />} />
          
          <Route path="components" element={<Components />} />
          <Route path="FiturXYZ" element={<FiturXYZ />} />
            
          {/* ERROR */}
          <Route path="400" element={<ErrorPage code="400" description="Bad Request" />} />
          <Route path="401" element={<ErrorPage code="401" description="Unauthorized" />} />
          <Route path="403" element={<ErrorPage code="403" description="Forbidden" />} />
          <Route path="*" element={<ErrorPage code="404" description="Page Not Found" />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;