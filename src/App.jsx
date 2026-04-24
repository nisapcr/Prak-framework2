import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Orders from "./pages/Orders";
import ErrorPage from "./components/ErrorPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-6">
        <Header />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />

          {/* ERROR */}
          <Route path="/400" element={<ErrorPage code="400" description="Bad Request" />} />
          <Route path="/401" element={<ErrorPage code="401" description="Unauthorized" />} />
          <Route path="/403" element={<ErrorPage code="403" description="Forbidden" />} />

          {/* 404 */}
          <Route path="*" element={<ErrorPage code="404" description="Page Not Found" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;