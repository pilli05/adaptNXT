import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Inventory from "./pages/Inventory/Inventory";
import Order from "./pages/Order/Order";
import Returns from "./pages/Returns/Returns";
import Customers from "./pages/Customers/Customers";
import Shipping from "./pages/Shipping/Shipping";
import Channel from "./pages/Channel/Channel";
import Integration from "./pages/Integrations/Integration";
import Reports from "./pages/Reports/Reports";
import Accounts from "./pages/Accounts/Accounts.";
import { createContext, useState } from "react";

export const MenuContext = createContext();
const App = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <MenuContext.Provider value={{ setMobileMenu, mobileMenu }}>
      <div className="bg-gray-200 h-screen w-screen">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/order" element={<Order />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="customers" element={<Customers />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/channel" element={<Channel />} />
            <Route path="/integration" element={<Integration />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/accounts" element={<Accounts />} />
          </Routes>
        </BrowserRouter>
      </div>
    </MenuContext.Provider>
  );
};

export default App;
