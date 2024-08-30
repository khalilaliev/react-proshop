import React from "react";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import HomeScreen from "./screens/HomeScreen.jsx";
import ProductScreen from "./screens/ProductScreen.jsx";
import CartScreen from "./screens/CartScreen.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import LoginScreen from "./screens/LoginScreen.jsx";
import RegisterScreen from "./screens/RegisterScreen.jsx";
import ShippingScreen from "./screens/ShippingScreen.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import PaymentScreen from "./screens/PaymentScreen.jsx";
import PlaceOrderScreen from "./screens/PlaceOrderScreen.jsx";
import OrderScreen from "./screens/OrderScreen.jsx";
import ProfileScreen from "./screens/ProfileScreen.jsx";
import AdminRoute from "./components/AdminRoute/AdminRoute.jsx";
import OrderListScreen from "./screens/admin/OrderListScreen.jsx";
import ProductListScreen from "./screens/admin/ProductListScreen.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route index={true} path="/product/:id" element={<ProductScreen />} />
      <Route index={true} path="/cart" element={<CartScreen />} />
      <Route index={true} path="/login" element={<LoginScreen />} />
      <Route index={true} path="/register" element={<RegisterScreen />} />
      <Route path="" element={<PrivateRoute />}>
        <Route index={true} path="/shipping" element={<ShippingScreen />} />
        <Route index={true} path="/payment" element={<PaymentScreen />} />
        <Route index={true} path="/placeorder" element={<PlaceOrderScreen />} />
        <Route index={true} path="/order/:id" element={<OrderScreen />} />
        <Route index={true} path="/profile" element={<ProfileScreen />} />
      </Route>
      <Route path="" element={<AdminRoute />}>
        <Route
          index={true}
          path="/admin/orderslist"
          element={<OrderListScreen />}
        />
        <Route
          index={true}
          path="/admin/productslist"
          element={<ProductListScreen />}
        />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={true}>
        <RouterProvider router={router} />
      </PayPalScriptProvider>
    </Provider>
  </React.StrictMode>
);
