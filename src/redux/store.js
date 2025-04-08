import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import cartReducer from "../features/cart/cartSlice";
import courseReducer from "../features/courses/courseSlice";
import userReducer from "../features/user/userSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    courses: courseReducer,
    user: userReducer,
  },
});

export default store;
