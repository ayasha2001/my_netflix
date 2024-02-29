import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer.reducer,
    movie:movieReducer.reducer
  },
});
export default appStore;
