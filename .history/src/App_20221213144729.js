import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import {
  createUserDocumentFromAuth,
  getCurrentUser,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils.js";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import CheckOut from "./routes/checkout/checkout.component";
import { setCurrentUser } from './store/user/user.action'


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentUser().then(user) => console.log(user)
  }, []);

return (
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path="shop/*" element={<Shop />} />
      <Route path="auth" element={<Authentication />} />
      <Route path="checkout" element={<CheckOut />} />
    </Route>
  </Routes>
);
};

export default App;
